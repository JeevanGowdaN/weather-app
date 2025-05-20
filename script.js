const apiKey = "5ff6f28c601f2c7f369668e3f115cc50"; // Get from openweathermap.org
async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    if(data.cod === 200) {
        const weather = `
            <h2>${data.name}</h2>
            <p>Temparature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;

        document.getElementById("weatherResult").innerHTML = weather;
    }else {
        document.getElementById("weatherResult").innerHTML = `<p>City Not found</p>`;
    }
}