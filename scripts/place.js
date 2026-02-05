// ---------- Footer: Current Year ----------
const yearSpan = document.querySelector("#currentyear");
yearSpan.textContent = new Date().getFullYear();

// ---------- Footer: Last Modified ----------
const lastModified = document.querySelector("#lastmodified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// ---------- Wind Chill Calculation (US / NOAA) ----------
// Inputs must be in Fahrenheit and mph.
// Wind chill is only defined when:
// - temperature <= 50°F
// - wind speed > 3 mph
function calculateWindChill(tempF, windMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(windMph, 0.16) +
    0.4275 * tempF * Math.pow(windMph, 0.16)
  );
}

const tempEl = document.querySelector("#temp");
const windEl = document.querySelector("#wind");
const windChillEl = document.querySelector("#windchill");

const temp = Number(tempEl.textContent);
const wind = Number(windEl.textContent);

if (temp <= 50 && wind > 3) {
  const chill = calculateWindChill(temp, wind);
  windChillEl.textContent = `${Math.round(chill)}°F`;
} else {
  windChillEl.textContent = "N/A";
}

