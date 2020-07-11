// console.log("what is up team");
// console.log(moment().format('MMMM Do, YYYY'));
var trips = []

// These are test values for the array until I figure out how to link to Sara's storage

var testLocalStorageData = function () {
storedTrips = []

localStorage.setItem("trips", JSON.stringify(storedTrips));

}

// local storage key
var dest = "";

function getTripName() {
    var path = window.location.href;
    var tripName = path.split('?')[1];
    dest = tripName.replace('%20', ' ');
    console.log(tripName);
    getTrips();
}

// Pull down the Array from local storage or create an empty one
// Parse the array 


function getTrips () {
    var storedTrips = localStorage.getItem(dest);
    let workingArray;
    if (storedTrips === null) {
        workingArray = []
    }
    else {
        workingArray = JSON.parse(storedTrips)
    }
    trips = workingArray
    displayTrips();
}

// Display contents of the array to a card on the HTML Page

var displayTrips = function () {
    console.log("display")
    for (i=0; i<trips.length; i++) {
        var cityCard = document.createElement("Div");
        cityCard.className = "city-card";
        cityCard.innerHTML = "<h2>" + trips[i].place + "</h2> <input class='date-button' placeholder=" + trips[i].date + "></input> <button class='edit-btn'>Save</button> <h3>" + trips[i].desc + "<h3/><button class='open'>"+ trips[i].address + "</button>";

        
        cityCard.classList.add("city-card")
        document.getElementById("grid").appendChild(cityCard);
    }
    
    $(".date-button").datepicker({
        minDate: 1
    });

    $(".open").on("click", function(){
        openModal(this.textContent);
    })
}


// Edit the dates and save them to the array
var changeDate = function() {
    var itinerary = JSON.parse(localStorage.getItem(dest));
    var place = this.previousElementSibling.previousElementSibling;

    for(var i = 0; i < itinerary.length; i++) {
        if(itinerary[i].place == place.textContent) {
            itinerary[i].date = this.previousElementSibling.value;
            place.placeholder = this.previousElementSibling.value
            break;
        }
    }
    
    localStorage.setItem(dest, JSON.stringify(itinerary));
}

// Push back to local storage with new datees

// testLocalStorageData();

testLocalStorageData();

getTripName();
$(".edit-btn").on('click', changeDate);
