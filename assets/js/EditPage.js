console.log("what is up team");
console.log(moment().format('MMMM Do, YYYY'));
var trips = []

// These are test values for the array until I figure out how to link to Sara's storage


var testLocalStorageData = function () {
storedTrips = [
    {
        place: "Madrid",
        date: "March 7th, 2021",
        desc: "I'm going to visit the King's Palace"
    },
    {
        place: "Budapest",
        date: "March 10th, 2021",
        desc: "Lets go to the Club!"
    },
    {
        place: "Stockholm",
        date: "March 14th, 2021",
        desc: "I've always wanted to try pickled herring"
    }
]

localStorage.setItem("trips", JSON.stringify(storedTrips));

}


// Pull down the Array from local storage or create an empty one
// Parse the array 

var getTrips = function () {
    var storedTrips = localStorage.getItem("trips");
    let workingArray;
    if (storedTrips === null) {
        workingArray = []
    }
    else {
        workingArray = JSON.parse(storedTrips)
    }
    trips = workingArray
}

// Display contents of the array to a card on the HTML Page

var displayTrips = function () {
    for (i=0; i<trips.length; i++) {
    var cityCard = document.createElement("Div")
    cityCard.innerHTML = "<h2>" + trips[i].place + "</h2> <h3>" + trips[i].date + "</h3> <h3>" + trips[i].desc + "<h3/>";
    cityCard.classList.add("city-card")
    document.getElementById("grid").appendChild(cityCard);
    }
}





// Edit the dates and save them to the array

// Push back to local storage with new datees

// testLocalStorageData();

testLocalStorageData();
getTrips();
displayTrips();
console.log(trips);