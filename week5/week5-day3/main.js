let cityInput = document.getElementById("city-input");
let submitButton = document.getElementById("submitBtn");
const weatherOutput = document.getElementById("weather-output");

submitButton.addEventListener("click", function () {
  weatherOutput.innerHTML = "";
  let city = cityInput.value;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=be163ecfc58134549d76cc1e429ed22c`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => setWeather(data));
});

function setWeather(object) {
  console.log(object);
  let cityName = object.name;
  let weatherCondition = object.weather[0].description;
  let temp = Math.floor(object.main.temp - 273.15);
  let tempMin = Math.floor(object.main.temp_min - 273.15);
  let tempMax = Math.floor(object.main.temp_max - 273.15);

  const weatherDisplay = document.createElement("div");
  weatherDisplay.setAttribute("id", "weather-display");

  let weatherDescriptions = {
    "clear sky": "sun",
    "few clouds": "cloud-sun",
    "scattered clouds": "cloud-sun",
    "broken clouds": "cloud-sun",
    "light rain": 'cloud-rain',
    "shower rain": "cloud-rain",
    "rain": "cloud-showers-heavy",
    "thunderstrom": "bolt",
    "snow": "snowflake",
    "mist": "smog",
  };
  let weatherIcon = weatherDescriptions[weatherCondition];

  let displayInput = `
    <h1 id='city-name'>${cityName}</h1>
    <h3 id='weather-condition'>${weatherCondition}</h3>
    <i class="fas fa-${weatherIcon} fa-7x"></i>
    <div class="temp-display">
        <i class="fas fa-temperature-high fa-2x"></i>
        <h1 id='temp'>${temp}&deg C</h1>
    </div>
    <div class="max-min-temp">
        <h6>Min: ${tempMin}&deg C  - Max: ${tempMax}&deg C</h6>
    </div>
    `;

  weatherDisplay.innerHTML = displayInput;
  weatherOutput.appendChild(weatherDisplay);
}
