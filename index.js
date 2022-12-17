// fetching the weather data
let apiKey = "651d508623e4eb736ff502f4b3410f7a";

const searchboxOne = document.querySelector("#searchCityOne");
const searchboxTwo = document.querySelector("#searchCityTwo");

//targets enter as a keypress event
searchboxOne.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    weatherData(searchboxOne.value);
  }
  
});

searchboxTwo.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    weatherData(searchboxTwo.value);
  }
});

function weatherData(city) {
  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=metric&appid=" +
    apiKey +
    "";

  fetch(url)
    .then((resp) => resp.json())
    .then(insertDetails);
}

// define destinations and send data to the destinations
function insertDetails(data) {
  document.getElementById("city").innerText = `${data.name}, ${data.sys.country}`;

  let presentDate = new Date();
  let dateDiv = document.getElementById("date");
  dateDiv.innerText = createDate(presentDate);

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

function createDate(dateValue) {
  // array for days of the week from Sunday (day-0) to saturday (day-6)
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
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
    "December",
  ];

  // JS methods for getDay, getDate, getMonth and getFullYear
  let day = days[dateValue.getDay()];
  let date = dateValue.getDate();
  let month = months[dateValue.getMonth()];
  let year = dateValue.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

// hide and display login section when required

const signInBtn = document.getElementById("showSignIn");
const loginSection = document.getElementById("login");

signInBtn.addEventListener("click", () => {
  loginSection.classList.toggle('log-in')
});

// working on the fake login page
//username: user
// password: 1234

loginBtn = document.getElementById('loginBtn')
loginForm = document.getElementById('loginForm')

loginBtn.addEventListener('click', (e) => {
  e.preventDefault()

  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === 'user' && password === '1234') {
    alert('You have successfully logged in')
    location.reload();
  } else {
    alert('Invalid credentials')
  }

})