/* Decorative ingredients live in their own space, never over recipe text. */
(() => {
  const assetRoot = new URL('../assets/images/', document.currentScript.src);
  const init = () => {
    if (!document.body.classList.contains('scrapbook')) return;
    const main = document.querySelector('main');
    if (!main) return;
    const slug = location.pathname.replace(/\.html$/, '').split('/').pop();
    const tea = /tea|chamomile|hibiscus/.test(slug);
    const themes = [
      [/guava/, ['guava', 'strawberry', 'lime', 'mint'], 'pink'],
      [/strawberry|berry/, ['strawberry', 'mint', 'lime'], 'pink'],
      [/chamomile/, ['chamomile', 'lemon', 'mint'], 'yellow'],
      [/hibiscus/, ['hibiscus', 'ginger', 'mint'], 'pink'],
      [/mint-tea/, ['mint', 'lemon', 'chamomile'], 'lime'],
      [/tea|coming-soon/, ['chamomile', 'mint', 'hibiscus', 'lemon'], 'lilac'],
      [/papaya/, ['papaya', 'lime', 'mint'], 'yellow'],
      [/mango|tropical|passion/, ['mango', 'passion-fruit', 'lime'], 'yellow'],
      [/pumpkin|oat/, ['pumpkin', 'oats', 'mint'], 'lilac'],
      [/tamarind/, ['tamarind', 'ginger', 'lime'], 'blue'],
      [/ginger|turmeric|shot/, ['ginger', 'lemon', 'lime'], 'yellow'],
      [/green|celery|cucumber|matcha/, ['mint', 'lime', 'lemon'], 'lime'],
      [/juice|citrus|golden/, ['lemon', 'mango', 'lime'], 'yellow']
    ];
    let [ingredients, color] = (themes.find(([match]) => match.test(slug)) || [null, ['strawberry', 'lime', 'mango', 'mint'], 'blue']).slice(1);
    // A recipe's existing ingredient cutouts are the most specific reference.
    const existing = [...main.querySelectorAll('.styled-list img')].map(img => img.getAttribute('src').match(/sticker-([a-z-]+)\.webp$/)?.[1]).filter(Boolean);
    if (existing.length) ingredients = [...new Set(existing)];
    document.body.dataset.gardenColor = color;
    if (tea) document.body.classList.add('garden-tea');
    const makeImage = (ingredient, index) => {
      const img = document.createElement('img');
      img.src = new URL(`sticker-${ingredient}.webp`, assetRoot).href;
      img.alt = '';
      img.width = 128;
      img.height = 110;
      img.loading = 'lazy';
      img.decoding = 'async';
      img.className = 'garden-fruit';
      img.style.setProperty('--tilt', `${index % 2 ? 10 : -9}deg`);
      img.style.setProperty('--delay', `${-index * 1.7}s`);
      return img;
    };
    const bands = [];
    const makeBand = (variant) => {
      const band = document.createElement('div');
      band.className = `garden-band garden-${variant}`;
      band.setAttribute('aria-hidden', 'true');
      const count = Math.min(ingredients.length, 4);
      for (let i = 0; i < count; i++) band.append(makeImage(ingredients[i], i));
      bands.push(band);
      return band;
    };
    const hero = main.querySelector('.bright-hero, .tea-recipe-hero, .single-hero, .page-hero, .article-hero, .tea-corner-hero');
    if (hero) hero.after(makeBand('top'));
    else main.prepend(makeBand('top'));
    main.append(makeBand('bottom'));
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle('garden-in-view', entry.isIntersecting)));
      bands.forEach(band => observer.observe(band));
    } else bands.forEach(band => band.classList.add('garden-in-view'));
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'motion-toggle';
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    let paused = preference.matches;
    try { paused = paused || localStorage.getItem('mades-motion-paused') === 'true'; } catch { /* Browser storage is optional. */ }
    const update = () => {
      document.body.classList.toggle('motion-paused', paused);
      button.disabled = preference.matches;
      button.textContent = preference.matches ? 'Reduced motion on' : paused ? 'Play animations' : 'Pause animations';
      button.setAttribute('aria-pressed', String(paused));
      document.dispatchEvent(new CustomEvent('mades-motion-toggle', { detail: { paused } }));
    };
    button.addEventListener('click', () => {
      paused = !paused;
      try { localStorage.setItem('mades-motion-paused', String(paused)); } catch { /* Keep working without storage. */ }
      update();
    });
    preference.addEventListener('change', event => { paused = event.matches; update(); });
    document.addEventListener('visibilitychange', () => document.body.classList.toggle('garden-tab-hidden', document.hidden));
    document.body.append(button);
    update();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
