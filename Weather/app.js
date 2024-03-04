const ApiKey = "2deabc3b1dbb32db8f1a6d4ed95a8f0b";
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInp = document.querySelector("#search-inp");
const searchBtn = document.querySelector("#search-btn");
const icon = document.querySelector("#weather-logo");

async function checkWeather (city) {
    const response = await fetch(URL + city + `&appid=${ApiKey}`);
    
    if(response.status == 404) {
        document.querySelector('.err404').style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        const data = await response.json();

        document.querySelector("#temp").innerText = Math.round(data.main.temp) + "°C";
        document.querySelector("#city").innerText = data.name;
        document.querySelector("#humidity").innerText = data.main.humidity + "%";
        document.querySelector("#wind").innerText = data.wind.speed + "km/h";

        changeImage(data.weather[0].main);
       
        document.querySelector('.err404').style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }

}

function changeImage(weather) {
    if (weather == "Clear") {
        icon.src = "images/Clear.png";
    }
    else if (weather == "Clouds") {
        icon.src = "images/Clouds.png";
    }
    else if (weather == "Drizzle") {
        icon.src = "images/Drizzle.png";
    }
    else if (weather == "Mist") {
        icon.src = "images/Mist.png";
    }
    else if (weather == "Rain") {
        icon.src = "images/Rain.png";
    }
    else if (weather == "Snow") {
        icon.src = "images/Snow.png";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchInp.value);
});