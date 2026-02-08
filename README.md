# 🌦️ Weather Forecast Application

## 1. Project Introduction

The **Weather Forecast Application** is a web-based project developed using **HTML, Tailwind CSS, and JavaScript**.  
It allows users to search for a city and view its **current weather details** such as temperature, wind speed, date, and location.

This project uses the **Open-Meteo API**, which does **not require an API key**, making the application simple and reliable.

---

## 2. Technologies Used

- HTML5 – Structure of the webpage  
- Tailwind CSS (CDN) – Styling and responsive design  
- JavaScript (ES6) – Application logic  
- Open-Meteo Geocoding API – Convert city name to coordinates  
- Open-Meteo Weather API – Fetch weather data  
- Git & GitHub – Version control  

---

## 3. Project File Structure

Weather_Forecast_App/
│
├── index.html # Main HTML file
├── script.js # JavaScript logic
├── README.md # Project documentation



---

## 4. Step-by-Step Working of the Project

### Step 1: Page Load (Default City)

When the webpage loads, JavaScript automatically searches for a default city (**New Delhi**) using the `DOMContentLoaded` event.


document.addEventListener("DOMContentLoaded", () => {
  searchCity("New Delhi");
});
Step 2: User Input (City Name)
The user enters a city name and clicks the Search button.

Empty input is checked

Valid city name is passed to the search function


searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (!city) {
    alert("Enter city name");
    return;
  }
  searchCity(city);
});
Step 3: Convert City Name to Coordinates
The geocodeCity() function sends the city name to the Open-Meteo Geocoding API and retrieves latitude and longitude.


async function geocodeCity(city) {
  // Converts city name into latitude and longitude
}
If the city is not found, an error message is displayed.

Step 4: Fetch Weather Data
The fetchWeather() function uses the latitude and longitude to fetch weather data from the Open-Meteo Weather API.


async function fetchWeather(lat, lon) {
  // Fetches weather information from the API
}
Step 5: Display Weather on UI
The populateCurrent() function updates the webpage with fetched weather data.

Displayed details:

City name

Temperature (°C)

Wind speed

Date and time

js
Copy code
function populateCurrent(data, placeName) {
  // Updates weather data in HTML elements
}
Step 6: Error Handling
All API calls are wrapped in try...catch blocks.


catch (err) {
  alert(err.message);
}
This ensures user-friendly error messages for:

Invalid city names

Network issues

5. Features of the Application
City-based weather search

Real-time weather data

Clean and responsive UI

No API key required

Simple and fast execution

6. Git & GitHub Integration
Git is initialized in the project folder

Files are committed locally

Project is pushed to GitHub repository

GitHub Repository:


https://github.com/hemanthgantinapalli-ai/weather_forecast
7. How to Run the Project
Download or clone the repository

Open the project folder

Open index.html in a web browser
OR

Use VS Code Live Server

8. Learning Outcomes
API integration using JavaScript

Asynchronous programming (async/await)

DOM manipulation

Error handling

Git and GitHub usage

Responsive UI design

9. Future Enhancements
5-day weather forecast

Weather icons

Dark / Light mode

Current location weather

Temperature unit toggle

10. Author
Hemanth
Weather Forecast Application
Academic Mini Project

---

### ✅ Faculty-ready README
- Clear  
- Step-by-step  
- Matches your code  
- Academic standard  








