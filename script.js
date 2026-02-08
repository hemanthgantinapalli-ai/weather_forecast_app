const cityInput = document.getElementById("city_input");
const searchBtn = document.getElementById("searchBtn");
const locationBtn = document.getElementById("locationBtn");

async function geocodeCity(city) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Geocoding failed");
  const data = await res.json();
  if (!data.results || data.results.length === 0)
    throw new Error("City not found");

  return {
    lat: data.results[0].latitude,
    lon: data.results[0].longitude,
    name: data.results[0].name + ", " + data.results[0].country
  };
}

async function fetchWeather(lat, lon) {
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
    `&current_weather=true` +
    `&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,visibility,windspeed_10m,weathercode,pressure_msl` +
    `&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset` +
    `&forecast_days=5&timezone=auto`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Weather fetch failed");
  return res.json();
}

function populateCurrent(data, placeName) {
  const cur = data.current_weather;

  document.getElementById("currentTemp").innerText =
    Math.round(cur.temperature) + "°C";

  document.getElementById("currentDesc").innerText =
    "Weather code: " + cur.weathercode;

  document.getElementById("currentDate").innerText =
    new Date().toLocaleString();

  document.getElementById("currentPlace").innerText = placeName;

  document.getElementById("windSpeedVal").innerText =
    cur.windspeed + " m/s";
}

async function searchCity(city) {
  try {
    const geo = await geocodeCity(city);
    const weather = await fetchWeather(geo.lat, geo.lon);
    populateCurrent(weather, geo.name);
  } catch (err) {
    alert(err.message);
    console.error(err);
  }
}

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (!city) {
    alert("Enter city name");
    return;
  }
  searchCity(city);
});

document.addEventListener("DOMContentLoaded", () => {
  searchCity("New Delhi");
});