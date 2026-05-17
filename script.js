// Nav fades in once the hero has been scrolled past.
// Gentle reveal-on-scroll for sections.
// Footer year stays current.

(function () {
  const nav = document.querySelector(".nav");
  const hero = document.querySelector(".hero");

  if (nav && hero) {
    if ("IntersectionObserver" in window) {
      // Watch a sentinel near the bottom of the hero: when it leaves view,
      // the user has scrolled into the content and the nav should appear.
      const sentinel = document.createElement("div");
      sentinel.style.cssText =
        "position:absolute;left:0;right:0;bottom:80px;height:1px;pointer-events:none;";
      hero.appendChild(sentinel);

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            nav.classList.toggle("is-scrolled", !entry.isIntersecting);
          });
        },
        { threshold: 0 }
      );
      io.observe(sentinel);
    } else {
      const onScroll = () => {
        const threshold = hero.offsetHeight - 80;
        nav.classList.toggle("is-scrolled", window.scrollY > threshold);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
  }

  // Reveal sections as they enter view
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    const targets = document.querySelectorAll(
      ".section-title, .category, .about-grid, .contact-inner > *"
    );
    targets.forEach((el) => el.classList.add("reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => io.observe(el));
  }

  // Year
  const yearEl = document.querySelector(".js-year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
