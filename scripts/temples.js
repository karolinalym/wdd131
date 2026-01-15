// ------------------------------
// Hamburger menu
// ------------------------------
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// ------------------------------
// Footer dates
// ------------------------------
const yearSpan = document.querySelector("#currentyear");
const modifiedSpan = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = document.lastModified;

// ------------------------------
// Temple data
// IMPORTANT: These imageUrl values match YOUR current filenames exactly.
// ------------------------------
const temples = [
  {
    templeName: "Bountiful Temple",
    location: "Bountiful, Utah, USA",
    dedicated: "1995-01-08",
    area: 104000,
    imageUrl: "images/temples/bountiful-temple (1).jpeg",
  },
  {
    templeName: "Los Angeles California Temple",
    location: "Los Angeles, California, USA",
    dedicated: "1956-03-11",
    area: 190614,
    imageUrl: "images/temples/la-temple (1).jpeg",
  },
  {
    templeName: "Logan Utah Temple",
    location: "Logan, Utah, USA",
    dedicated: "1884-05-17",
    area: 119619,
    imageUrl: "images/temples/logan-utah-temple.jpg",
  },
  {
    templeName: "Montevideo Uruguay Temple",
    location: "Montevideo, Uruguay",
    dedicated: "2001-03-18",
    area: 10700,
    imageUrl: "images/temples/montevideo_uruguay_temple_lds (1).webp",
  },
  {
    templeName: "Provo City Center Temple",
    location: "Provo, Utah, USA",
    dedicated: "2016-03-20",
    area: 85000,
    imageUrl: "images/temples/provo-city-center-temple.jpg",
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893-04-06",
    area: 382207,
    imageUrl: "images/temples/salt-lake-temple.jpg",
  },
];

// ------------------------------
// Build temple cards
// ------------------------------
const templeContainer = document.querySelector("#temples");
const pageTitle = document.querySelector("#page-title");

function createTempleCard(temple) {
  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = "lazy";

  const caption = document.createElement("figcaption");
  caption.textContent = temple.templeName;

  figure.appendChild(img);
  figure.appendChild(caption);

  return figure;
}

function displayTemples(templeList) {
  templeContainer.innerHTML = "";
  templeList.forEach((temple) => {
    templeContainer.appendChild(createTempleCard(temple));
  });
}

// ------------------------------
// Filters
// Old: dedicated before 1900
// New: dedicated after 2000
// Large: area > 90000 (common course threshold)
// ------------------------------
function showHome() {
  pageTitle.textContent = "Home";
  displayTemples(temples);
}

function showOld() {
  pageTitle.textContent = "Old";
  const oldTemples = temples.filter((t) => new Date(t.dedicated) < new Date("1900-01-01"));
  displayTemples(oldTemples);
}

function showNew() {
  pageTitle.textContent = "New";
  const newTemples = temples.filter((t) => new Date(t.dedicated) > new Date("2000-01-01"));
  displayTemples(newTemples);
}

function showLarge() {
  pageTitle.textContent = "Large";
  const largeTemples = temples.filter((t) => t.area > 90000);
  displayTemples(largeTemples);
}

// ------------------------------
// Nav click handling
// ------------------------------
const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // active link styling
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    const text = link.textContent.trim().toLowerCase();

    if (text === "home") showHome();
    else if (text === "old") showOld();
    else if (text === "new") showNew();
    else if (text === "large") showLarge();

    // close menu after clicking (mobile)
    navigation.classList.remove("open");
    hamButton.classList.remove("open");
  });
});

// Initial render
showHome();
