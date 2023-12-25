const api = {
    base: 'https://api.openweathermap.org/data/2.5/weather',
    key: 'ae79f4dbacc876fd7d13533b1da64c99'
};

const searchBox = document.querySelector('.searchbar');

searchBox.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        getWeather(searchBox.value);
        searchBox.value = '';
    }
});

function getWeather(city) {
    fetch(`${api.base}?q=${city}&appid=${api.key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error(error);
        });
}

function displayWeather(data) {
    const locationElement = document.querySelector('.location');
    const dateElement = document.querySelector('.date');
    const temperatureElement = document.querySelector('.temp');
    const weatherElement = document.querySelector('.weather');

    const city = data.name;
    const country = data.sys.country;
    const temperature = Math.round(data.main.temp - 273.15);
    const weatherDescription = data.weather[0].description;

    locationElement.textContent = `${city}, ${country}`;
    dateElement.textContent = getCurrentDate();
    temperatureElement.textContent = `${temperature}°C`;
    weatherElement.textContent = weatherDescription;

    const appElement = document.querySelector('.app');
    appElement.classList.remove('warm');
    appElement.classList.remove('cold');

    if (temperature >= 20) {
        appElement.classList.add('warm');
    } else {
        appElement.classList.add('cold');
    }
}

function getCurrentDate() {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('en-US', options);
    return currentDate;
}