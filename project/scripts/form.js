// Product array (used to dynamically build the Product Name <select>)
const products = [
  { id: "p100", name: "Photo Editing - 100 images" },
  { id: "r010", name: "Retouching - 10 images" },
  { id: "s030", name: "Social Media Content Pack" },
  { id: "b005", name: "Backdrop Extension" },
  { id: "c050", name: "Culling - 500 images" }
];

const STORAGE_KEY_LAST_PRODUCT = "wdd131_lastProductId";

function populateProductSelect(selectEl, items) {
  // Clear any existing options (prevents duplicates if the script runs twice)
  selectEl.innerHTML = `<option value="">Select a product...</option>`;

  items.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selectEl.appendChild(option);
  });
}

function setFooterYear(yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function restoreLastProduct(selectEl) {
  const savedId = localStorage.getItem(STORAGE_KEY_LAST_PRODUCT);

  // Conditional branching (rubric)
  if (savedId) {
    // Only set it if it exists in our products list
    const exists = products.some((p) => p.id === savedId);
    if (exists) selectEl.value = savedId;
  }
}

function saveLastProduct(selectEl) {
  const selected = selectEl.value;

  // Conditional branching (rubric)
  if (selected) {
    localStorage.setItem(STORAGE_KEY_LAST_PRODUCT, selected);
  } else {
    localStorage.removeItem(STORAGE_KEY_LAST_PRODUCT);
  }
}

// Run after DOM is ready (prevents null references)
document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.querySelector("#productName");
  const yearSpan = document.querySelector("#year");

  // Defensive checks (avoids console errors if an element is missing)
  if (yearSpan) setFooterYear(yearSpan);

  if (!productSelect) return;

  // Build select options (DOM manipulation + array method + objects)
  populateProductSelect(productSelect, products);

  // localStorage: restore prior selection
  restoreLastProduct(productSelect);

  // Event listener (rubric)
  productSelect.addEventListener("change", () => {
    saveLastProduct(productSelect);

    // Template literal (rubric) — lightweight, but valid usage
    console.log(`Saved product selection: ${productSelect.value || "none"}`);
  });
});
