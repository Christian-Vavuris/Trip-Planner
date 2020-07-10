// delete a trip
function deleteTrip() {
    var trip = this.previousElementSibling.textContent;
    localStorage.removeItem(trip);
    $(this)[0].parentElement.remove();
}

// removes replaced_stats and searchHistory from local storage
function removeStorage(key) {
    if(localStorage.getItem(key)) {
        localStorage.removeItem(key);
    }
}

// creates HTML trip elements
function createTrips() {
    if(localStorage.length !== 0) {
        removeStorage('replaced_stats');
        removeStorage('searchHistory');
    
        for(i = 0; i < localStorage.length; i++) {
            var trip = $('<div>')
            .addClass('trip');
    
            var tripName = $('<p>')
                .text(localStorage.key(i));
            var btn = $('<button>')
                .text('Delete')
                .on('click', deleteTrip);
            trip.append(tripName, btn)
    
            $('.trips').append(trip);
        }
    }
    else {
        var noTrips = $('<p>').text("No trips have been created yet.");
        $('.trips').append(noTrips);
        
    }
}

createTrips();

// redirect to the edit page
$('p').on('click', function() {
    window.location.href = "./EditPage.html?" + this.textContent;
})
