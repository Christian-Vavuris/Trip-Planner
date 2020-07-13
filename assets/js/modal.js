// open the modal
function openModal() {
  $('.modal').css('display', 'block');

  modalInfo(this);
}

// close the modal
function closeModal() {
  $('.modal').css('display', 'none');
}

// creates a new trip
function createTrip() {
  var trip = $('#create')[0].value;
  $('#create')[0].value = "";

  if(!localStorage.getItem(trip)) {
    localStorage.setItem(trip, "[]");
    var option = $('<option>')
            .text(trip)
            .attr('value', trip);
    $('#trips').prepend(option);
  }
}

// creates the html content for the modal
function modalInfo(dest) {
  if($('.modal-content')) {
    $('.modal-content').remove();
  }

  // get the selected place info
  var name = dest.children[0].textContent;
  var address = dest.children[1].textContent; 
  
  // create the modal html content
  var content = $('<div>').addClass('modal-content');
  $('.modal').append(content);

  // modal header
  var header = $('<div>').addClass('modal-header');
  var title = $('<h2>')
    .text(name)
    .attr('id', 'title');
  var close = $('<button>')
    .text('X')
    .attr('id', 'close');
  header.append(title, close);
  content.append(header);

  // create a new trip
  var createLabel = $('<label>')
  .attr('for', 'create-btn')
  .text('Create a New Trip:');
  var createInput = $('<input>')
  .attr('type', 'text')
  .attr('id', 'create')
  .attr('placeholder', 'New Trip');
  var createBtn = $('<button>')
  .attr('id', 'create-btn')
  .text('Create');
  content.append(createLabel, createInput, createBtn);

  $('#create-btn').on('click', function() {
    createTrip();
  });

  // choose a trip
  var chooseLabel = $('<label>')
  .text('Choose a trip:')
  .attr('for', 'my-trips');
  var selectTrip = $('<select>')
  .attr('name', 'my-trips')
  .attr('id', 'trips');
  content.append(chooseLabel, selectTrip);

  // get stored trips for the dropdown
  var trips = $('#trips');
  for(var i = 0; i < localStorage.length; i++) {
    var option = $('<option>')
      .text(localStorage.key(i))
      .attr('value', localStorage.key(i));
    trips.prepend(option);
  }

  // date picker
  var dateLabel = $('<label>')
    .attr('for', 'date')
    .text('Date:');
  var dateInput = $('<input>')
    .attr('type', 'text')
    .attr('id', 'date')
    .attr('placeholder', 'MM/DD/YYYY')
    .attr('autocomplete', 'off');
  content.append(dateLabel, dateInput);

  $("#date").datepicker({
    minDate: 1
  });

  // description textarea
  var descLabel = $('<label>')
    .attr('for', 'description')
    .text('Add a Description:');
  var desc = $('<textarea>')
    .attr('id', 'description');
  content.append(descLabel, desc);

  // modal footer
  var footer = $('<div>').addClass('modal-footer');
  var save = $('<button>')
    .text('Save')
    .attr('id', 'save');
  footer.append(save);
  content.append(footer);

  
  // closes the modal
  $('#close').on('click', closeModal);
  // button that calls saveTrip()
  $('#save').on('click', function(event) {
    saveTrip(name, address);
  });
}

// save the trip to local storage
function saveTrip(dest, address) {
  var tripName = $('#trips')[0].value;
  var newDate = $('#date')[0].value;
  var desc = $('#description')[0].value;

  // the new destination
  var newDest = {
    place: dest,
    address: address,
    date: newDate,
    desc: desc
  };

  // update the trip
  var tripInfo = JSON.parse(localStorage.getItem(tripName));
  tripInfo.push(newDest);
  localStorage.setItem(tripName, JSON.stringify(tripInfo));

  // close the modal
  closeModal();
}

$('#open').on('click', openModal);