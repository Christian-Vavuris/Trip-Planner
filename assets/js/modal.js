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
  // if($('.modal-content').innerHTML !== "") {
  //   $('.modal-content').innerHTML = "";
  // }
  var name = dest.children[0].textContent;
  var address = dest.children[2].textContent;
  // var content = $('.modal-content');
  // var header = $('<div>').addClass('modal-header');
  // var title = $('<h2>')
  //   .text(name)
  //   .attr('id', 'title');
  // var close = $('<button>')
  //   .text('&times;')
  //   .attr('id', 'close');
  // header.append(title);
  // header.append(close);
  // content.append(header);

  // var chooseLabel = $('<label>')
  //   .text('Choose a trip:')
  //   .attr('for', 'my-trips');
  // var selectTrip = $('<select>')
  //   .attr('name', 'my-trips')
  //   .attr('id', 'trips');
  // content.append(chooseLabel);
  // content.append(selectTrip);

  // var createLabel = $('<label>')
  //   .attr('for', 'create-btn')
  //   .text('Create a New Trip:');
  // var createInput = $('<input>')
  //   .attr('type', 'text')
  //   .attr('id', 'create')
  //   .attr('placeholder', 'New Trip');
  // var createBtn = $('<button>')
  //   .attr('id', 'create-btn')
  //   .text('Create');
  // content.append(createLabel);
  // content.append(createInput);
  // content.append(createBtn);

  // var dateLabel = $('<label>')
  //   .attr('for', 'date')
  //   .text('Date:');
  // var dateInput = $('<input>')
  //   .attr('type', 'text')
  //   .attr('id', 'date')
  //   .attr('placeholder', 'MM/DD/YYYY')
  //   .attr('autocomplete', 'off');
  // content.append(dateLabel);
  // content.append(dateInput);

  // var descLabel = $('<label>')
  //   .attr('for', 'description')
  //   .text('Add a Description:');
  // var desc = $('<textarea>')
  //   .attr('id', 'description');
  // content.append(descLabel);
  // content.append(desc);

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

  // var save = $('<button>')
  //   .text('Save')
  //   .attr('id', 'save');
  // content.append(save);

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