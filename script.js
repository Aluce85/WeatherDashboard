let apiKey= "0e06341abdb059d8c70e1e1c71bad8f5"
let button = document.querySelector("searchButton")
let searchInput = document.querySelector("#searchInput")
let storage = JSON.parse(localStorage.getItem("citySearchHistory"))

function handleFormSubmit(event) {
    event.preventDefault()
    let userInput = searchInput.value.trim()
    getWeatherdata(userInput)
    storage.push(userInput)
    localStorage.setItem("citySearchHistory",JSON.stringify(storage))
    let listEl = document.createItem("li")
    listEl.textContent = userInput
    listEl.setAttribute("id", "searchHistory")
    let showHistory = document.getElementById("showHistory")
    showHistory.appendChild(listEl)
    let liButton = document.getElementById("searchHistory")
    liButton.onclick = searchHistorySearch

}