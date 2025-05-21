const apiKey = "5ff6f28c601f2c7f369668e3f115cc50"; // Your valid API key

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");
  resultDiv.classList.remove("show"); // Remove animation class if already present

  if (!city) {
    resultDiv.innerHTML = `<p>Please enter a city name.</p>`;
    resultDiv.style.display = "block";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const weather = `
        <h2>${data.name}</h2>
        <p>${data.weather[0].description}</p>
        <p>🌡️ Temperature: ${data.main.temp}°C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon"/>
      `;
      resultDiv.innerHTML = weather;
    } else {
      resultDiv.innerHTML = `<p>❌ City not found</p>`;
    }

    resultDiv.classList.add("show");
    resultDiv.style.display = "block";
  } catch (error) {
    resultDiv.innerHTML = `<p style="color:red;">⚠️ Failed to fetch weather data</p>`;
    resultDiv.style.display = "block";
  }
}
