// fetching the weather data
let apiKey = "651d508623e4eb736ff502f4b3410f7a";


const searchbox = document.querySelector('#searchCity');

searchbox.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    weatherData(searchbox.value);
  }
});