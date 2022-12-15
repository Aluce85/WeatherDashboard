let apiKey = "0e06341abdb059d8c70e1e1c71bad8f5";
let button = document.querySelector("searchButton");
let searchInput = document.querySelector("#searchInput");
let storage = JSON.parse(localStorage.getItem("citySearchHistory"));

function handleFormSubmit(event) {
  event.preventDefault();
  let userInput = searchInput.value.trim();
  getWeatherdata(userInput);
  storage.push(userInput);
  localStorage.setItem("citySearchHistory", JSON.stringify(storage));
  let listEl = document.createItem("li");
  listEl.textContent = userInput;
  listEl.setAttribute("id", "searchHistory");
  let showHistory = document.getElementById("showHistory");
  showHistory.appendChild(listEl);
  let liButton = document.getElementById("searchHistory");
  liButton.onclick = searchHistorySearch;
}

function SearchHistorySearch() {
  if (storage.length > 0) {
    getWeatherdata(storage[storage.length - 1]);
  }
}

button.addEventListener("click", handleFormSubmit);

function getWeatherdata(userInput) {

    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${userInput}&appid=${apiKey}`)
        .then(function (response) {
            return response.json()

        })
        .then(function (cityData) {

            console.log(cityData[0].lat);
            console.log(cityData[0].lon);
            return { lat: cityData[0].lat, lon: cityData[0].lon }

        })

        .then(function (latLonData) {
            return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                const weatherArray = []
                const weatherInfo = data
                for (le3t i = 0; i < weatherInfo.list[i])
            })
        })
