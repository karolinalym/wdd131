// -----------------------------
// Footer year
// -----------------------------
const yearEl = document.querySelector("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// -----------------------------
// LocalStorage review counter
// -----------------------------
const STORAGE_KEY = "reviewCount";

function getCount() {
  const raw = localStorage.getItem(STORAGE_KEY);
  const num = Number(raw);
  return Number.isFinite(num) ? num : 0;
}

function incrementCount() {
  const next = getCount() + 1;
  localStorage.setItem(STORAGE_KEY, String(next));
  return next;
}

const countEl = document.querySelector("#count");
if (countEl) countEl.textContent = incrementCount();

// -----------------------------
// Display submitted form values
// -----------------------------
const params = new URLSearchParams(window.location.search);
const resultsList = document.querySelector("#results");

// If someone opens review.html directly (no query string), show a clear message.
if (!params.toString()) {
  if (resultsList) {
    const li = document.createElement("li");
    li.textContent = "No form data found. Please submit the form first.";
    resultsList.appendChild(li);
  }
} else {
  // Must match the same product list used in form.js
  const products = [
    { id: "p100", name: "Photo Editing - 100 images" },
    { id: "r010", name: "Retouching - 10 images" },
    { id: "s030", name: "Social Media Content Pack" },
    { id: "b005", name: "Backdrop Extension" },
    { id: "c050", name: "Culling - 500 images" }
  ];

  function addItem(label, value) {
    if (!resultsList) return;
    const li = document.createElement("li");

    // Build: <strong>Label:</strong> value
    const strong = document.createElement("strong");
    strong.textContent = `${label}: `;

    li.appendChild(strong);
    li.appendChild(document.createTextNode(value));
    resultsList.appendChild(li);
  }

  const productId = params.get("productName") ?? "";
  const productMatch = products.find((p) => p.id === productId);

  addItem("Product ID", productId || "(missing)");
  addItem("Product Name", productMatch ? productMatch.name : "(unknown)");

  addItem("Rating", params.get("rating") ?? "");
  addItem("Install Date", params.get("installDate") ?? "");

  const features = params.getAll("features");
  addItem("Features", features.length ? features.join(", ") : "(none)");

  addItem("Review", params.get("review") ?? "");
  addItem("Name", params.get("userName") ?? "");
}
