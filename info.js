const container = document.querySelector('.container');
const search = document.getElementById('search-button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {
  const APIkey = '9058a9a8f404887df1a9e7b2e3d12a0b'; // Replace with valid key if needed
  const city = document.getElementById('location-input').value.trim();

  if (city === '') return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
    .then(response => response.json())
    .then(json => {
      if (json.cod === '404') {
        container.classList.remove('active'); // collapse if wrong city
        weatherBox.style.opacity = '0';
        weatherDetails.style.opacity = '0';
        alert('City not found!');
        return;
      }

      // If city found, expand and show data
      container.classList.add('active');
      weatherBox.style.opacity = '1';
      weatherDetails.style.opacity = '1';

      const image = document.querySelector('.weather-box img');
      const temperature = document.querySelector('.weather-box .temperature');
      const description = document.querySelector('.weather-box .description');
      const humidity = document.querySelector('#humidity');
      const wind = document.querySelector('#wind');

      switch (json.weather[0].main) {
        case 'Clear':
          image.src = 'clear.png';
          break;
        case 'Rain':
          image.src = 'rain.png';
          break;
        case 'Snow':
          image.src = 'snow.png';
          break;
        case 'Clouds':
          image.src = 'cloud.png';
          break;
        case 'Mist':
        case 'Haze':
        case 'Fog':
          image.src = 'mist.png';
          break;
        default:
          image.src = 'cloud.png';
      }

      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = json.weather[0].description;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)} km/h`;
    })
    .catch(error => {
      console.error("Fetch error:", error);
      alert("An error occurred. Please check your API key or internet connection.");
    });
});
