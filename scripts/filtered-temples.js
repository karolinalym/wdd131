const templesElement = document.querySelector("#temples");
const pageTitle = document.querySelector("#page-title");

const homeBtn = document.querySelector("#home");
const oldBtn = document.querySelector("#old");
const newBtn = document.querySelector("#new");
const largeBtn = document.querySelector("#large");
const smallBtn = document.querySelector("#small");
const allBtn = document.querySelector("#all");

const temples = [
  {
    templeName: "Logan Utah",
    location: "Logan, Utah",
    dedicated: "1884-05-17",
    area: 119619,
    imageUrl: "images/temples/logan-utah-temple.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah",
    dedicated: "1893-04-06",
    area: 382207,
    imageUrl: "images/temples/salt-lake-temple.jpg"
  },
  {
    templeName: "Provo City Center",
    location: "Provo, Utah",
    dedicated: "2016-03-20",
    area: 85084,
    imageUrl: "images/temples/provo-city-center-temple.jpg"
  },
  {
    templeName: "Phoenix Arizona",
    location: "Phoenix, Arizona",
    dedicated: "2014-05-16",
    area: 64470,
    imageUrl: "images/temples/phoenix-arizona-temple.jpg"
  }
];

function displayTemples(list) {
  templesElement.innerHTML = "";

  list.forEach(temple => {
    const card = document.createElement("section");

    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p>${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Area: ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    templesElement.appendChild(card);
  });
}

homeBtn.addEventListener("click", () => {
  pageTitle.textContent = "Home";
  displayTemples(temples);
});

oldBtn.addEventListener("click", () => {
  pageTitle.textContent = "Old";
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
});

newBtn.addEventListener("click", () => {
  pageTitle.textContent = "New";
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
});

largeBtn.addEventListener("click", () => {
  pageTitle.textContent = "Large";
  displayTemples(temples.filter(t => t.area > 90000));
});

smallBtn.addEventListener("click", () => {
  pageTitle.textContent = "Small";
  displayTemples(temples.filter(t => t.area < 90000));
});

allBtn.addEventListener("click", () => {
  pageTitle.textContent = "All";
  displayTemples(temples);
});

displayTemples(temples);
