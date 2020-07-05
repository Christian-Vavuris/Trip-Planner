function openWModal(place) {
    $('.modal').css('display', 'block');
    // $('.modal').addClass('show-modal');

    var placeInfo = JSON.parse(localStorage.getItem(place.innerHTML));
    $('.modal-header').text(placeInfo.place);

    // create the API URL using placeInfo.location
    // call the API
        // callback weatherInfo
}

function closeWModal() {
    // close the modal
    $('.weather-modal').css('display', 'none');
    // $('.modal').removeClass('show-modal');
}

function weatherInfo() {
    
}

$('#weather-close').on('click', closeWModal);