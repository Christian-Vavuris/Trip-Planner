function deleteTrip() {
    var trip = this.previousElementSibling.textContent;
    localStorage.removeItem(trip);
    $(this)[0].parentElement.remove();
}

if(localStorage.length !== 0) {
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


$('p').on('click', function() {
    window.location.href = "./EditPage.html?" + this.textContent;
})