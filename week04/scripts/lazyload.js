// Put the current year in the footer (nice + common requirement across weeks)
document.querySelector("#year").textContent = new Date().getFullYear();

const images = document.querySelectorAll("img[data-src]");

function loadImage(img) {
  img.src = img.dataset.src;
  img.removeAttribute("data-src");
}

// If IntersectionObserver is supported, use it (best practice)
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
      threshold: 0.1,
      rootMargin: "0px 0px 200px 0px", // start loading a bit before it appears
    }
  );

  images.forEach((img) => observer.observe(img));
} else {
  // Fallback: just load them all
  images.forEach((img) => loadImage(img));
}

