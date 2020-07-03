// test local storage
var storage = [
  {
    place: "tripName",
    location: "address",
    date: "newDate",
    desc: "desc"
  },
  {
    place: "tripName",
    location: "address",
    date: "newDate",
    desc: "desc"
  },
  {
    place: "tripName",
    location: "address",
    date: "newDate",
    desc: "desc"
  }
];

function openModal() {
    // open the modal
    $('.modal').css('display', 'block');
    // $('.modal').addClass('show-modal');

    modalInfo(this);
}

function closeModal() {
  // close the modal
  $('.modal').css('display', 'none');
  // $('.modal').removeClass('show-modal');
}

function createTrip() {
  if(!localStorage.getItem(name)) {
    // creates a new trip
    localStorage.setItem(name, "[]");
    var option = $('<option>')
            .text(name)
            .attr('value', name);
    $('#trips').prepend(option);
  }
}

function modalInfo(dest) {
  // trip is a html element
    // parse into needed info
    // var name = yelp place name
    // var address = address of the place, saved as city, state

  // set the business info

  $('#title').text(name);
  $('#create-btn').on('click', createTrip(name));

  var trips = $('#trips');
  for(var i = 0; i < localStorage.length; i++) {
    var option = $('<option>')
        .text(localStorage.key(i))
        .attr('value', localStorage.key(i));
    trips.prepend(option);
  }

  $("#date").datepicker({
    minDate: 1
  });
  
  // button close closes the modal
  $('#close').on('click', closeModal);
  // button save calls saveTrip()
  $('#save').on('click', saveTrip(name, address));
}

function saveTrip(dest, address) {
  // save to local storage
    // format: { key: "My Trip Name", value: { [place: "Yelp Name", date: "MM/DD/YYYY"], etc } }
    var tripName = $('#trips')[0].value;
    var newDate = $('#date')[0].value;
    var desc = $('#description')[0].value;

    // add lat and lon
    var newDest = {
      place: dest,
      location: address,
      date: newDate,
      desc: desc
    };

    // update the trip
    var tripInfo = JSON.parse(localStorage.getItem(tripName));
    var itinerary = tripInfo.json();
    itinerary.push(newDest);
    localStorage.setItem(tripName, JSON.stringify(itinerary));

    // close modal
    closeModal();
}

$('#open').on('click', openModal);