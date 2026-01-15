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
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// ------------------------------
// Temple data (UPDATE imageUrl to match YOUR filenames exactly)
// ------------------------------
const temples = [
  {
    templeName: "Bountiful Temple",
    location: "Bountiful, Utah, USA",
    dedicated: "1995-01-08",
    area: 104000,
    imageUrl: "images/temples/bountiful-temple.jpeg",
  },
  {
    templeName: "Los Angeles California Temple",
    location: "Los Angeles, California, USA",
    dedicated: "1956-03-11",
    area: 190614,
    imageUrl: "images/temples/los-angeles-temple.jpg",
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
    imageUrl: "images/temples/montevideo-uruguay-temple.jpg",
  },
  {
    templeName: "Phoenix Arizona Temple",
    location: "Phoenix, Arizona, USA",
    dedicated: "2014-11-16",
    area: 64640,
    imageUrl: "images/temples/phoenix-arizona-temple.jpg",
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
  {
    templeName: "San Diego California Temple",
    location: "San Diego, California, USA",
    dedicated: "1993-04-25",
    area: 72000,
    imageUrl: "images/temples/san-diego-california-temple.jpg",
  },
  {
    templeName: "Washington D.C. Temple",
    location: "Kensington, Maryland, USA",
    dedicated: "1974-11-19",
    area: 156558,
    imageUrl: "images/temples/washington-dc-temple.jpg",
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

function displayTemples(list) {
  templeContainer.innerHTML = "";
  list.forEach((t) => templeContainer.appendChild(createTempleCard(t)));
}

// ------------------------------
// Filters
// ------------------------------
function showHome() {
  pageTitle.textContent = "Home";
  displayTemples(temples);
}

function showOld() {
  pageTitle.textContent = "Old";
  displayTemples(temples.filter((t) => new Date(t.dedicated) < new Date("1900-01-01")));
}

function showNew() {
  pageTitle.textContent = "New";
  displayTemples(temples.filter((t) => new Date(t.dedicated) > new Date("2000-01-01")));
}

function showLarge() {
  pageTitle.textContent = "Large";
  displayTemples(temples.filter((t) => t.area > 90000));
}

function showSmall() {
  pageTitle.textContent = "Small";
  displayTemples(temples.filter((t) => t.area < 10000));
}

// ------------------------------
// Nav click handling
// ------------------------------
const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    const label = link.textContent.trim().toLowerCase();

    if (label === "home") showHome();
    else if (label === "old") showOld();
    else if (label === "new") showNew();
    else if (label === "large") showLarge();
    else if (label === "small") showSmall();

    // close mobile menu after click
    nav.classList.remove("open");
    hamButton.classList.remove("open");
  });
});

// Initial render
showHome();
