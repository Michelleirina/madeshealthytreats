document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
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

  const current = window.location.pathname.split("/").pop() || "index.html";
  const activeTarget = current.startsWith("recipe-")
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
        const show = filter === "all" || card.dataset.cat === filter;
        card.classList.toggle("hide", !show);
      });
    });
  });

  document.querySelectorAll(".signup-row").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const button = form.querySelector("button");
      const input = form.querySelector("input");
      if (button) button.textContent = "You're In";
      if (input) input.value = "";
      form.setAttribute("aria-label", "Thanks for subscribing");
    });
  });
});
