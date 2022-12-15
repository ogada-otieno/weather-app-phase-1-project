// fetching the weather data
let apiKey = "651d508623e4eb736ff502f4b3410f7a";


const searchbox = document.querySelector('#searchCity');

searchbox.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    weatherData(searchbox.value);
  }
});

function weatherData(city) {
  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=metric&appid="+ apiKey +"";

  fetch(url)
    .then((resp) => resp.json()) // converts to json format
    .then(insertDetails)
}


// define destinations and send data to the destinations
function insertDetails(data) {
  document.getElementById(
    "city"
  ).innerText = `${data.name}, ${data.sys.country}`;
  document.getElementById("date").innerText = "Wednesday, December 14, 2022";

  let temperature = Math.round(data.main.temp);
  document.getElementById("temp").innerText = `${temperature} °C`;

  document.getElementById("description").innerText =
    data.weather[0].description;

  let minTemp = Math.round(data.main.temp_min);
  let maxTemp = Math.round(data.main.temp_max);
  document.getElementById("minMax").innerText = `${minTemp} °C / ${maxTemp} °C`;
}
