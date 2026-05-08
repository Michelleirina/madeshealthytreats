# pip install Pillow --break-system-packages

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


WATERMARK_TEXT = "madeshealthytreats.com"
IMAGE_DIR = Path(__file__).resolve().parent / "assets" / "images"
SUPPORTED_EXTENSIONS = {".png", ".jpg", ".jpeg"}
OPACITY = int(255 * 0.60)
PADDING = 20
FONT_SCALE = 0.025


def get_font(size):
    font_candidates = [
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/Library/Fonts/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
    ]

    for font_path in font_candidates:
        try:
            return ImageFont.truetype(font_path, size)
        except OSError:
            continue

    return ImageFont.load_default()


def add_watermark(image_path):
    with Image.open(image_path) as image:
        original_mode = image.mode
        base = image.convert("RGBA")
        width, height = base.size
        font_size = max(12, int(width * FONT_SCALE))
        font = get_font(font_size)

        overlay = Image.new("RGBA", base.size, (255, 255, 255, 0))
        draw = ImageDraw.Draw(overlay)

        bbox = draw.textbbox((0, 0), WATERMARK_TEXT, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        x = max(PADDING, width - text_width - PADDING)
        y = max(PADDING, height - text_height - PADDING)

        shadow_offset = max(1, font_size // 18)
        shadow_alpha = int(255 * 0.35)
        draw.text(
            (x + shadow_offset, y + shadow_offset),
            WATERMARK_TEXT,
            font=font,
            fill=(0, 0, 0, shadow_alpha),
        )
        draw.text(
            (x, y),
            WATERMARK_TEXT,
            font=font,
            fill=(255, 255, 255, OPACITY),
        )

        watermarked = Image.alpha_composite(base, overlay)

        if image_path.suffix.lower() in {".jpg", ".jpeg"}:
            watermarked = watermarked.convert("RGB")
        elif original_mode != "RGBA":
            watermarked = watermarked.convert(original_mode)

        watermarked.save(image_path)


def main():
    if not IMAGE_DIR.exists():
        raise FileNotFoundError(f"Image folder not found: {IMAGE_DIR}")

    image_paths = sorted(
        path
        for path in IMAGE_DIR.rglob("*")
        if path.is_file() and path.suffix.lower() in SUPPORTED_EXTENSIONS
    )

    processed = 0
    for image_path in image_paths:
        add_watermark(image_path)
        processed += 1
        print(image_path.name)

    print(f"{processed} images watermarked successfully.")


if __name__ == "__main__":
    main()
