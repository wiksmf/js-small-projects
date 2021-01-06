'use strict';

const city = document.querySelector('#cityInput');
const displayCity = document.querySelector('.city');
const displayTemperature = document.querySelector('.temperature');
const displayWeather = document.querySelector('.weather-description');
const btnSubmit = document.querySelector('button');

const apiKey = config.MY_KEY;

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayTemperature.textContent = data.main.temp;
      displayWeather.textContent = data.weather[0].description;
    });

  document.querySelector('.weather-info').classList.remove('hidden');
});
