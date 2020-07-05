if(localStorage.length !== 0) {
    for(i = 0; i < localStorage.length; i++) {
        var trip = $('<div>')
        .addClass('trip')
        .text(localStorage.key(i));

        $('.trips').append(trip);
    }
}
else {
    var noTrips = $('<p>').text("No trips have been created yet.");
    $('.trips').append(noTrips);
    
}

$('.trip').on('click', function(event) {
    // event.stopImmediatePropagation();
    // call a function in EditPage.js
        // pass `this`
})