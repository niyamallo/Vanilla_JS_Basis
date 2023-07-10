const API_KEY = "8fbc62a6750bd7b3cb31b300ef54b5ed";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // fetch는 실제로 URL에 갈 필요 없이 JavaScript가 대신 URL을 부르게 해줌.
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}


// 사용자의 위치(geolocation)을 알려주는 함수.
// 브라우저에서 위치 좌표(WIFI, 위치, GPS 등등)을 줌.
// 2개의 argument가 필요함. 모든게 잘 되었을 때 실행 될 함수, 에러가 발생했을 때 실행 될 함수.
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);