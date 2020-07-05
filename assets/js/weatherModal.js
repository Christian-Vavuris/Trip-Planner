function callAPI(url, callBack) {
    fetch(url).then(function(response) {
        if(response.ok) {
            response.json().then(function (response) {
                callBack(response);
            });
        }
    })
}

function openWModal(place) {
    $('.weather-modal').css('display', 'block');
    // $('.modal').addClass('show-modal');

    var placeInfo = JSON.parse(localStorage.getItem(place.textContent));
    $('.modal-header').text(placeInfo.place);

    var url = `https://api.openweathermap.org/data/2.5/weather?appid=640b3bbebec045da381544940d161ab8&q=${place.location}&units=imperial`;
    callAPI(url, weatherInfo);
}

function closeWModal() {
    // close the modal
    $('.weather-modal').css('display', 'none');
    // $('.modal').removeClass('show-modal');
}

function weatherInfo(data) {
    $('#temp').text(`Temperature: ${data.main.temp}°F`);
    $('#icon').attr('src', `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    $('#temp-max').text(`High: ${data.main.temp_max}°F`)
    $('#temp-min').text(`Low: ${data.main.temp_min}°F`)
    $('#humidity').text(`Humidity: ${data.main.humidity}%`);
    $('wind').text(`Wind Speed: ${data.wind.speed} MPH`);
}

$('#weather-close').on('click', closeWModal);
$('#open').on('click', openWModal);