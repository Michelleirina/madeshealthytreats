document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".hero-slider");
  if (!slider) return;

  const slides = [...slider.querySelectorAll(".slide")];
  const dots = [...slider.querySelectorAll(".hero-dot")];
  const prev = slider.querySelector(".slider-arrow.prev");
  const next = slider.querySelector(".slider-arrow.next");
  const progress = slider.querySelector(".hero-progress");
  const duration = 5000;
  let index = 0;
  let start = performance.now();
  let paused = false;
  let rafId;

  const show = (nextIndex) => {
    slides[index].classList.remove("active");
    dots[index].classList.remove("active");
    index = (nextIndex + slides.length) % slides.length;
    slides[index].classList.add("active");
    dots[index].classList.add("active");
    start = performance.now();
    if (progress) progress.style.width = "0%";
  };

  const tick = (now) => {
    if (!paused) {
      const elapsed = now - start;
      const percent = Math.min((elapsed / duration) * 100, 100);
      if (progress) progress.style.width = `${percent}%`;
      if (elapsed >= duration) show(index + 1);
    } else {
      start += 16.7;
    }
    rafId = requestAnimationFrame(tick);
  };

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => show(dotIndex));
  });
  prev?.addEventListener("click", () => show(index - 1));
  next?.addEventListener("click", () => show(index + 1));
  slider.addEventListener("mouseenter", () => { paused = true; });
  slider.addEventListener("mouseleave", () => { paused = false; });
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") show(index - 1);
    if (event.key === "ArrowRight") show(index + 1);
  });

  rafId = requestAnimationFrame(tick);
  window.addEventListener("beforeunload", () => cancelAnimationFrame(rafId));
});
