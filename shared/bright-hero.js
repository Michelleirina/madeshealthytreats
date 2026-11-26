document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.bright-hero');
  if (!hero) return;

  const slides = [...hero.querySelectorAll('.bright-slide')];
  const dots = [...hero.querySelectorAll('.bright-dot')];
  const pause = hero.querySelector('.bright-pause');
  const status = hero.querySelector('.bright-status');
  if (slides.length < 2 || !pause) return;

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const duration = 6500;
  let index = 0;
  let paused = motion.matches || document.body.classList.contains('motion-paused');
  let keyboardNavigation = false;
  let keyboardFocused = false;
  let inView = true;
  let timer;

  function schedule() {
    clearTimeout(timer);
    // Pointer hover and pointer-clicked controls do not stop autoplay.
    // Keyboard focus, an explicit pause, hidden tabs and reduced motion do.
    if (paused || motion.matches || keyboardFocused || document.hidden || !inView) return;
    timer = setTimeout(() => show(index + 1), duration);
  }

  function show(nextIndex, manual = false) {
    index = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === index;
      slide.classList.toggle('active', active);
      slide.inert = !active;
      slide.setAttribute('aria-hidden', String(!active));
    });
    dots.forEach((dot, i) => {
      const active = i === index;
      dot.classList.toggle('active', active);
      dot.setAttribute('aria-current', String(active));
    });
    // Announce user-initiated changes, not every automatic transition.
    if (manual && status) status.textContent = slides[index].getAttribute('aria-label');
    schedule();
  }

  function syncPause() {
    pause.disabled = motion.matches;
    pause.textContent = motion.matches ? 'Reduced motion on' : paused ? 'Play ▶' : 'Pause ⏸';
    pause.setAttribute('aria-label', motion.matches
      ? 'Automatic slideshow disabled by reduced motion setting'
      : paused ? 'Play recipe slideshow' : 'Pause recipe slideshow');
    schedule();
  }

  hero.querySelector('.bright-prev')?.addEventListener('click', () => show(index - 1, true));
  hero.querySelector('.bright-next')?.addEventListener('click', () => show(index + 1, true));
  dots.forEach((dot, i) => dot.addEventListener('click', () => show(i, true)));
  pause.addEventListener('click', () => {
    paused = !paused;
    syncPause();
  });

  // Keep slides still when someone is navigating them with the keyboard.
  // Clicking with a mouse or tapping must not leave autoplay stuck on pause.
  document.addEventListener('keydown', event => {
    if (event.key === 'Tab') keyboardNavigation = true;
  }, true);
  document.addEventListener('pointerdown', () => {
    keyboardNavigation = false;
    if (keyboardFocused) {
      keyboardFocused = false;
      schedule();
    }
  }, true);
  hero.addEventListener('focusin', () => {
    if (keyboardNavigation) {
      keyboardFocused = true;
      schedule();
    }
  });
  hero.addEventListener('focusout', () => setTimeout(() => {
    if (!hero.contains(document.activeElement)) keyboardFocused = false;
    schedule();
  }, 0));

  hero.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      show(index + (event.key === 'ArrowRight' ? 1 : -1), true);
    }
  });

  document.addEventListener('visibilitychange', schedule);
  document.addEventListener('mades-motion-toggle', event => {
    paused = event.detail.paused;
    syncPause();
  });
  motion.addEventListener('change', () => {
    paused = motion.matches;
    syncPause();
  });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      schedule();
    }, { threshold: 0.15 }).observe(hero);
  }

  show(0);
  syncPause();
  hero.classList.add('carousel-ready');
});
