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

// let's build the date to display in an appealing format:
// day, date, month, year


function createDate(date) {
  // array for days of the week from Sunday (day-0) to saturday (day-6)
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  // months of the year from January (month-0) to December (month-11)
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  // JS methods for getDay, getDate, getMonth and getFullYear
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}