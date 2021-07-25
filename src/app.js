function displayTemperature(response) {
let temperatureElement = document.querySelector("#temperature");
 let cityElement = document.querySelector("#city");
 let descriptionElement= document.querySelector("#description");
 let humidityElement= document.querySelector("#humidity");
 let windElement = document.querySelector("#wind");
temperatureElement.innerHTML = Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = Math.round(response.data.main.humidity);
windElement.innerHTML = Math.round(response.data.main.wind.speed);
}

let apiKey ="ca6b966e1f2662438b430bcd9db95a1c";
let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=Miami&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);