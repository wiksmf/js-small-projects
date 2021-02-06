'use strict';

const cityName = document.querySelector('#city-name');
const weatherInfo = document.querySelector('.weather-info');
const btnSubmit = document.querySelector('.btn');

const url = 'https://api.openweathermap.org/data/2.5/weather';
const imgUrl = 'http://openweathermap.org/img/wn/';
const apiKey = config.MY_KEY;

btnSubmit.addEventListener('click', e => {
  e.preventDefault();
  getWeather();
  cityName.value = '';
  cityName.focus();
});

async function getWeather() {
  try {
    const res = await fetch(
      `${url}?q=${cityName.value}&appid=${apiKey}&units=metric`,
    );
    if (!res.ok)
      throw new Error(`Whoops.. something went wrong! Check the city name! 💥`);

    const weatherData = await res.json();
    displayWeather(weatherData);
  } catch (err) {
    alert(err);
  }
}

function displayWeather(weatherData) {
  weatherInfo.innerHTML = `
    <p>Current weather in <span class="city-info">${weatherData.name}</span></p>
    <div class="weather display-flex">
      <div>
        <img src=${imgUrl + weatherData.weather[0].icon}@4x.png >
        <p class="description">${weatherData.weather[0].description}</p>
      </div>
      <div class="temperature">
        <p>${weatherData.main.temp}°<span class="metric">C</span></p>
      </div>
    </div>
  `;
}
