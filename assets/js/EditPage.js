console.log("what is up team");
console.log(moment().format('MMMM Do, YYYY'));

// These are test values for the array until I figure out how to link to Sara's storage


var testLocalStorageData = function () {
storedTrips = [
    {
        place: "Madrid",
        date: "March 7th, 2021",
        desc: "I'm going to visit the King's Palace"

    }
]

localStorage.setItem("trips", JSON.stringify(storedTrips));

}


// Pull down the Array from local storage or create an empty one
// Parse the array 

var displayTrips = function () {
    var storedTrips = localStorage.getItem("trips");
    let workingArray;
    if (storedTrips === null) {
        workingArray = []
    }
    else {
        workingArray = JSON.parse(storedTrips)
    }
    workingArray.push(storedTrips)
    console.log(workingArray);
}

// Display to a card on the HTML Page



// Edit the dates and save them to the array

// Push back to local storage with new datees

// testLocalStorageData();
displayTrips();