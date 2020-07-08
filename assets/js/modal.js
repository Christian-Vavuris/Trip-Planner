// test local storage
var storage = [
  {
    place: "tripName",
    date: "newDate",
    desc: "desc"
  },
  {
    place: "tripName",
    date: "newDate",
    desc: "desc"
  },
  {
    place: "tripName",
    date: "newDate",
    desc: "desc"
  }
];

function openModal() {
  console.log(this.children);
  // open the modal
  $('.modal').css('display', 'block');

  modalInfo(this);
}

function closeModal() {
  // close the modal
  $('.modal').css('display', 'none');
}

function createTrip() {
  var trip = $('#create')[0].value;
  console.log(trip)
  if(!localStorage.getItem(trip)) {
    // creates a new trip
    localStorage.setItem(trip, "[]");
    var option = $('<option>')
            .text(trip)
            .attr('value', trip);
    $('#trips').prepend(option);
  }
}

function modalInfo(dest) {
  // trip is a html element
    // parse into needed info
    var name = dest.children[0].textContent;
    var address = dest.children[2].textContent;
    console.log(address)

  // set the business info

  $('#title').text(name);
  $('#create-btn').on('click', function() {
    createTrip();
  });
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
  $('#save').on('click', function(event) {
    saveTrip(name, address);
  });
}

function saveTrip(dest, address) {
  console.log("test")
  // save to local storage
  var tripName = $('#trips')[0].value;
  var newDate = $('#date')[0].value;
  var desc = $('#description')[0].value;

  // add lat and lon
  var newDest = {
    place: dest,
    address: address,
    date: newDate,
    desc: desc
  };

  // update the trip
  var tripInfo = JSON.parse(localStorage.getItem(tripName));
  console.log(tripInfo)
  tripInfo.push(newDest);
  localStorage.setItem(tripName, JSON.stringify(tripInfo));

  // close modal
  closeModal();

  $('#date')[0].value = "";
  $('#description')[0].value = "";
}

$('#open').on('click', openModal);