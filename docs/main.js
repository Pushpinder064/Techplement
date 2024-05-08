

const apiKey = "7ea42399b90780340d3ed17d9aa682cd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";


// JavaScript
const searchButton = document.getElementById('search');

searchButton.addEventListener('click', function() {
    const cityInput = document.getElementById('search').value;
    checkWeather(cityInput);
});


async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        updateWeatherUI(data); // Call updateWeatherUI function to update the UI with weather data
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}


function updateWeatherUI(data) {
    if (data) {
        const temperatureHeading = document.getElementById('temp');
        const weatherIcon = document.getElementById('weather-icon');
        const descriptionParagraph = document.getElementById('description');
       

        temperatureHeading.textContent = `${data.main.temp}°C`; // Update temperature
        weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; // Update weather icon
        descriptionParagraph.textContent = data.weather[0].description; // Update weather 

    } else {
        console.error('No weather data received.');
    }
}

// Example usage
//checkWeather('pune');

