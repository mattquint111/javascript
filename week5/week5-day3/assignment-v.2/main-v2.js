let input = document.getElementById("search-box")
let weather = document.getElementById("weather")

input.addEventListener('keyup', function() {
    if (event.keyCode === 13) {
        weather.innerHTML = ''
        let city = input.value
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=be163ecfc58134549d76cc1e429ed22c`
        
        fetch(url)
            .then(response => response.json())
            .then(data => displayWeather(data))

        input.value = ''
    }
    
})

function displayWeather(object) {
    let cityName = object.name;
    let weatherCondition = object.weather[0].description;
    let temp = Math.floor(object.main.temp - 273.15);
    let tempMin = Math.floor(object.main.temp_min - 273.15);
    let tempMax = Math.floor(object.main.temp_max - 273.15);
    
    let weatherDescriptions = {
        "clear sky": "sun",
        "few clouds": "cloud-sun",
        "scattered clouds": "cloud-sun",
        "broken clouds": "cloud-sun",
        "overcast clouds": "cloud",
        "light rain": 'cloud-rain',
        "shower rain": "cloud-rain",
        "rain": "cloud-showers-heavy",
        "thunderstrom": "bolt",
        "snow": "snowflake",
        "mist": "smog",
    }
    let weatherIcon = weatherDescriptions[weatherCondition]

    let display = `
    <main id="main-container">
            <section class="location">
                <div class="city">${cityName}</div>
                <div class="date">${getDate()}</div>
            </section>
            <div class="current">
                <div class="temp">${temp}<span>°c</span></div>
                <i class="fas fa-${weatherIcon} fa-7x"></i>
                <div class="weather">${weatherCondition}</div>
                <div class="hi-low">${tempMin}°c / ${tempMax}°c</div>
            </div>
        </main>
    `
    let mainContainer = document.createElement('main')
    mainContainer.setAttribute('id', 'main-container')
    mainContainer.innerHTML = display
    weather.appendChild(mainContainer)
}

function getDate() {
    let d = new Date()
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let month = months[d.getMonth()]
    let day = d.getDate()
    let year = d.getFullYear()
    let todaysDate = `${month} ${day}, ${year}`
    return todaysDate
}
