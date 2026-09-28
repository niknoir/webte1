const map = L.map("map").setView([48.151965, 17.072995], 4);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// 1. Одесса
const marker1 = L.marker([46.4843, 30.7381]).addTo(map);
const url1 = "https://api.open-meteo.com/v1/forecast?latitude=46.4843&longitude=30.7381&current=temperature_2m,wind_speed_10m,relative_humidity_2m&timezone=auto";

fetch(url1)
    .then(response => response.json())
    .then(data => {
        const temperature = data.current.temperature_2m;
        const wind = data.current.wind_speed_10m;
        const humidity = data.current.relative_humidity_2m;

        document.getElementById("weather").innerHTML =
            "Teplota: " + temperature + " °C<br>" +
            "Vietor: " + wind + " km/h<br>" +
            "Vlhkosť: " + humidity + " %";

        marker1.bindPopup(
            "McDonald's (Odesa)<br>" +
            "Teplota: " + temperature + " °C<br>" +
            "Vietor: " + wind + " km/h"
        ).openPopup();
    });

// 2. Братислава (FEI STU)
const marker2 = L.marker([48.151965, 17.072995]).addTo(map);
const url2 = "https://api.open-meteo.com/v1/forecast?latitude=48.151965&longitude=17.072995&current=temperature_2m,wind_speed_10m,relative_humidity_2m&timezone=auto";

fetch(url2)
    .then(response => response.json())
    .then(data => {
        const temperature = data.current.temperature_2m;
        const wind = data.current.wind_speed_10m;

        marker2.bindPopup(
            "FEI STU Bratislava<br>" +
            "Teplota: " + temperature + " °C<br>" +
            "Vietor: " + wind + " km/h"
        );
    });

// 3. Амстердам
const marker3 = L.marker([52.359998, 4.885218]).addTo(map);
const url3 = "https://api.open-meteo.com/v1/forecast?latitude=52.359998&longitude=4.885218&current=temperature_2m,wind_speed_10m,relative_humidity_2m&timezone=auto";

fetch(url3)
    .then(response => response.json())
    .then(data => {
        const temperature = data.current.temperature_2m;
        const wind = data.current.wind_speed_10m;

        marker3.bindPopup(
            "Rijksmuseum (Amsterdam)<br>" +
            "Teplota: " + temperature + " °C<br>" +
            "Vietor: " + wind + " km/h"
        );
    });