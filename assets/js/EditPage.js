// console.log("what is up team");
// console.log(moment().format('MMMM Do, YYYY'));
var trips = []

// These are test values for the array until I figure out how to link to Sara's storage

var testLocalStorageData = function () {
storedTrips = [
    {
        place: "Madrid",
        date: "07/25/2021",
        desc: "I'm going to visit the King's Palace",
        address: "Novato"
    },
    {
        place: "Budapest",
        date: "07/25/2021",
        desc: "Lets go to the Club!",
        address: "San Francisco"
    },
    {
        place: "Stockholm",
        date: "07/25/2021",
        desc: "I've always wanted to try pickled herring",
        address: "New York"
    }
]

localStorage.setItem("trips", JSON.stringify(storedTrips));

}

function getTripName() {
    var path = window.location.href;
    var tripName = path.split('?')[1];
    tripName = tripName.replace('%20', ' ');
    console.log(tripName);
    getTrips(tripName);
}

// Pull down the Array from local storage or create an empty one
// Parse the array 


function getTrips (dest) {
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
        var cityCard = document.createElement("Div")
        cityCard.innerHTML = "<h2>" + trips[i].place + "</h2> <input class='date-button' placeholder="+ trips[i].date + "></input> <h3>" + trips[i].desc + "<h3/><button class='open'>"+ trips[i].address + "</button>";

        
        cityCard.classList.add("city-card")
        document.getElementById("grid").appendChild(cityCard);
    }
    
    $(".open").on("click", function(){
        openModal(this.textContent);
    })
}


// Edit the dates and save them to the array

var changeDate = function() {
    $(".date-button").datepicker();
    // console.log("foo");
}

// Push back to local storage with new datees

// testLocalStorageData();

testLocalStorageData();

getTripName();
$(".date-button").on('click', changeDate);
