// Footer year
document.querySelector("#year").textContent = new Date().getFullYear();

// Select all images that still have a data-src attribute
const images = document.querySelectorAll("img[data-src]");

function loadImage(img) {
  img.src = img.dataset.src;      // swap in the real image
  img.removeAttribute("data-src"); // remove marker so we don't load again
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        loadImage(entry.target);
        observer.unobserve(entry.target);
      });
    },
    {
      root: null,
      threshold: 0.6,     // must be mostly visible before loading
      rootMargin: "0px"   // no preloading outside viewport
    }
  );

  images.forEach((img) => observer.observe(img));
} else {
  // Fallback: load all immediately if IntersectionObserver isn't supported
  images.forEach((img) => loadImage(img));
}
