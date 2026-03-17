/* ===== CAROUSEL ===== */

let images = [
  "https://picsum.photos/200?1",
  "https://picsum.photos/200?2",
  "https://picsum.photos/200?3"
];

let index = 0;

function nextImage() {
  index = (index + 1) % images.length;
  document.getElementById("slider").src = images[index];
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  document.getElementById("slider").src = images[index];
}

/* ===== WEATHER API ===== */

async function getWeather() {
  let city = document.getElementById("city").value;

  if (city === "") {
    document.getElementById("weather").innerText = "Enter city name";
    return;
  }

  try {
    let res = await fetch(`https://wttr.in/${city}?format=3`);
    let data = await res.text();

    document.getElementById("weather").innerText = data;
  } catch (error) {
    document.getElementById("weather").innerText = "Error fetching weather";
  }
}