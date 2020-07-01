// template Yelp API response data
var data = [
    {
      "name": "Gary Danko",
      "location": {
        "address1": "800 N Point St",
        "address2": "",
        "address3": "",
        "city": "San Francisco",
        "state": "CA",
        "zip_code": "94109",
        "country": "US"
      },
      "coordinates": {
        "latitude": 37.80587,
        "longitude": -122.42058
      },
      "phone": "+14157492060",
      "id": "WavvLdfdP6g8aZTtbBQHTw",
      "alias": "gary-danko-san-francisco"
    },
    {
      "name": "Good Grub Vending",
      "location": {
        "address1": "758 N Point St",
        "address2": "",
        "address3": "",
        "city": "San Francisco",
        "state": "CA",
        "zip_code": "94109",
        "country": "US"
      },
      "coordinates": {
        "latitude": 37.8061104,
        "longitude": -122.4195633
      },
      "phone": "+14157492060",
      "id": "fshpjHrtIlysFm0CnyUjbA",
      "alias": "good-grub-vending-san-francisco"
    }
];

// test local storage
var storage = [
    {key: "1",
    value: "[{name: '1', date: '1' }, {name: '2', date: '2' }, {name: '3', date: '3' }]"},
    {key: "2",
    value: "[{name: '1', date: '1' }, {name: '2', date: '2' }, {name: '3', date: '3' }]"},
    {key: "3",
    value: "[{name: '1', date: '1' }, {name: '2', date: '2' }, {name: '3', date: '3' }]"}
]

function openModal() {
    // open the modal
    // use this.title to call the Yelp API
    modalInfo();
}

function closeModal() {
    // close the modal
}

function createTrip() {
    // creates a new trip
}

function modalInfo() {
    // callback from the Yelp API
    // set the business info

    $('#title').text(data[1].name);
    $('#address').text(`${data[1].location.address1}, ${data[1].location.city}, ${data[1].location.state} ${data[1].location.zip_code}`);
    $('#phone').text(data[1].phone);
    var trips = $('#trips');
    for(var i = 0; i < storage.length; i++) {
        var option = $('<option>')
            .text(storage[i].key)
            .attr('value', storage[i].key);
        trips.prepend(option);
    }

    // add date picker stuff
    
    // button close closes the modal
    $('#close').on('click', closeModal);
    // button save calls saveTrip()
    $('#save').on('click', saveTrip);
}

function saveTrip() {
    // save to local storage
        // format: { key: "My Trip Name", value: { [place: "Yelp Name", date: "MM/DD/YYYY"], etc } }
        var newDest = [];
        var tripName = $('#trips').value;
        // update the trip
        if(localStorage.getItem(tripName)) {
            var itinerary = localStorage.getItem(tripName).json();
            itinerary.push(newDest);
            localStorage.setItem(tripName, itinerary);
        }
        // or
        // create a new trip and save
        else {
            var itinerary = {};
            itinerary.push(newDest);
            localStorage.setItem($('#trip-name').value, itinerary);
        }

    // close modal
}

openModal();