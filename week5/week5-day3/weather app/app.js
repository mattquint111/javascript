window.addEventListener('load', () => {
    let long, lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude

            const api = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=be163ecfc58134549d76cc1e429ed22c`

            const xhr = new XMLHttpRequest();
            xhr.open("GET", api)
            xhr.send()
            xhr.onreadystatechange = function() {
                let jsonData = JSON.parse(this.responseText)
                console.log(jsonData)
            }

        })

        

    } else {
        h1.textContent = "I don't know where you are."
    }
})