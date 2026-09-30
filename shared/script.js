document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".nav-hamburger");
  const navLinks = document.querySelector(".nav-links");

  const setScrolled = () => {
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 80);
  };
  setScrolled();
  window.addEventListener("scroll", setScrolled, { passive: true });

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", String(open));
    });
  }

  const pathName = window.location.pathname.split("/").pop() || "index.html";
  const current = pathName.includes(".") ? pathName : `${pathName}.html`;
  const juiceRecipePages = new Set([
    "recipe-celery-detox-juice.html",
    "recipe-carrot-ginger-juice.html",
    "recipe-beet-energy-juice.html",
    "recipe-cucumber-mint-juice.html",
    "recipe-pineapple-turmeric-juice.html"
  ]);
  const shotRecipePages = new Set([
    "recipe-ginger-immunity-shot.html",
    "recipe-turmeric-golden-shot.html",
    "recipe-acv-detox-shot.html",
    "recipe-wheatgrass-energy-shot.html",
    "recipe-beet-performance-shot.html"
  ]);
  const activeTarget = current === "shots.html" || shotRecipePages.has(current)
    ? "shots.html"
    : current === "juices.html" || juiceRecipePages.has(current)
      ? "juices.html"
      : current.startsWith("recipe-")
      ? "recipes.html"
      : current.startsWith("blog-")
        ? "blog.html"
        : current === "coming-soon.html"
          ? "coming-soon.html"
          : current;
  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === activeTarget || (current === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("vis");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  document.querySelectorAll(".reveal, .ingredient-row").forEach((el, index) => {
    if (el.classList.contains("ingredient-row")) {
      el.style.transitionDelay = `${Math.min(index * 70, 420)}ms`;
    }
    revealObserver.observe(el);
  });

  document.querySelectorAll(".filter-tabs").forEach((tabGroup) => {
    const scope = tabGroup.dataset.scope || "body";
    const root = scope === "section" ? tabGroup.closest("section") : document;
    const cards = root.querySelectorAll("[data-cat]");

    tabGroup.addEventListener("click", (event) => {
      const button = event.target.closest(".filter-btn");
      if (!button) return;
      const filter = button.dataset.filter;

      tabGroup.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      cards.forEach((card) => {
        const categories = (card.dataset.cat || "").split(/\s+/);
        const show = filter === "all" || categories.includes(filter);
        card.classList.toggle("hide", !show);
      });
    });
  });

});

// Favorites stay on this device. Never report a save that failed.
document.addEventListener("DOMContentLoaded", () => {
  const storageKey = "mades-saved-recipes-v1";
  const readSaved = () => {
    try {
      const data = JSON.parse(localStorage.getItem(storageKey) || "[]");
      return Array.isArray(data) ? data.filter(item => item && typeof item.title === "string" && /^recipe-[a-z0-9-]+\.html$/.test(item.path)) : [];
    } catch { return []; }
  };
  const writeSaved = items => localStorage.setItem(storageKey, JSON.stringify(items));
  const recipe = document.querySelector(".recipe-post");
  const heading = document.querySelector("main h1");
  if (recipe && heading) {
    const path = (location.pathname.split("/").pop() || "").replace(/\.html$/, "") + ".html";
    const toolbar = document.createElement("div");
    toolbar.className = "recipe-actions";
    const save = document.createElement("button");
    save.type = "button";
    save.className = "btn btn-teal";
    const status = document.createElement("p");
    status.className = "action-status";
    status.setAttribute("role", "status");
    const refresh = () => {
      const selected = readSaved().some(item => item.path === path);
      save.textContent = selected ? "Saved ✓" : "Save recipe";
      save.setAttribute("aria-pressed", String(selected));
    };
    refresh();
    save.addEventListener("click", () => {
      try {
        const items = readSaved();
        const exists = items.some(item => item.path === path);
        writeSaved(exists ? items.filter(item => item.path !== path) : [...items, {path, title: heading.textContent.trim()}]);
        refresh();
        status.textContent = exists ? "Removed from saved recipes." : "Saved in this browser. Find it under Saved recipes in the footer.";
      } catch { status.textContent = "Your browser could not save this recipe. You can bookmark this page instead."; }
    });
    const print = document.createElement("button");
    print.type = "button";
    print.className = "btn btn-ghost";
    print.textContent = "Print recipe";
    print.addEventListener("click", () => window.print());
    const collection = document.createElement("a");
    collection.href = "saved.html";
    collection.className = "read-more";
    collection.textContent = "My saved recipes →";
    toolbar.append(save, print, collection);
    recipe.prepend(toolbar, status);
    const ingredients = recipe.querySelector(".styled-list");
    if (ingredients) {
      ingredients.id = "recipe-ingredients";
      const jump = document.createElement("a");
      jump.href = "#recipe-ingredients";
      jump.className = "btn btn-ghost";
      jump.textContent = "Jump to ingredients";
      toolbar.prepend(jump);
    }
  }
  const savedRoot = document.getElementById("savedRecipes");
  if (savedRoot) {
    const render = () => {
      savedRoot.replaceChildren();
      const items = readSaved();
      if (!items.length) {
        const empty = document.createElement("p");
        empty.textContent = "No saved recipes yet. Open a recipe and select Save recipe to keep it here.";
        savedRoot.append(empty);
      }
      items.forEach(item => {
        const card = document.createElement("div");
        card.className = "info-card";
        const title = document.createElement("h2");
        const link = document.createElement("a");
        link.href = item.path;
        link.textContent = item.title;
        title.append(link);
        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "btn btn-ghost";
        remove.textContent = "Remove";
        remove.setAttribute("aria-label", `Remove ${item.title}`);
        remove.addEventListener("click", () => {
          try {
            writeSaved(readSaved().filter(entry => entry.path !== item.path));
            render();
            document.getElementById("savedStatus").textContent = "Recipe removed.";
          } catch { document.getElementById("savedStatus").textContent = "Your browser could not update saved recipes."; }
        });
        card.append(title, remove);
        savedRoot.append(card);
      });
    };
    render();
  }
  const article = document.querySelector(".article-main");
  if (article && article.querySelectorAll("h2").length >= 3) {
    const nav = document.createElement("nav");
    nav.className = "article-contents";
    nav.setAttribute("aria-label", "On this page");
    const label = document.createElement("strong");
    label.textContent = "On this page";
    const list = document.createElement("ul");
    article.querySelectorAll("h2").forEach((section, index) => {
      section.id = section.id || `section-${index + 1}`;
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = `#${section.id}`;
      link.textContent = section.textContent;
      item.append(link);
      list.append(item);
    });
    nav.append(label, list);
    article.prepend(nav);
  }
});
