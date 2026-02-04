// Product array (used to dynamically build the Product Name <select>)
const products = [
  { id: "p100", name: "Photo Editing - 100 images" },
  { id: "r010", name: "Retouching - 10 images" },
  { id: "s030", name: "Social Media Content Pack" },
  { id: "b005", name: "Backdrop Extension" },
  { id: "c050", name: "Culling - 500 images" }
];

// Populate product select
const productSelect = document.querySelector("#productName");

products.forEach((product) => {
  const option = document.createElement("option");
  option.value = product.id;     // rubric requirement: value is the id
  option.textContent = product.name;
  productSelect.appendChild(option);
});

// Footer year
const yearSpan = document.querySelector("#year");
yearSpan.textContent = new Date().getFullYear();

