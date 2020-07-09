function openModal() {
  // open the modal
  $('.modal').css('display', 'block');

  modalInfo(this);
}

function closeModal() {
  // close the modal
  $('.modal').css('display', 'none');
}

// creates a new trip
function createTrip() {
  var trip = $('#create')[0].value;
  console.log(trip)
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

  var name = dest.children[0].textContent;
  var address = dest.children[2].textContent;
  var content = $('<div>').addClass('modal-content');
  $('.modal').append(content);
  var header = $('<div>').addClass('modal-header');
  var title = $('<h2>')
    .text(name)
    .attr('id', 'title');
  var close = $('<button>')
    .text('X')
    .attr('id', 'close');
  header.append(title);
  header.append(close);
  content.append(header);

  var chooseLabel = $('<label>')
    .text('Choose a trip:')
    .attr('for', 'my-trips');
  var selectTrip = $('<select>')
    .attr('name', 'my-trips')
    .attr('id', 'trips');
  content.append(chooseLabel);
  content.append(selectTrip);

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
  content.append(createLabel);
  content.append(createInput);
  content.append(createBtn);

  var dateLabel = $('<label>')
    .attr('for', 'date')
    .text('Date:');
  var dateInput = $('<input>')
    .attr('type', 'text')
    .attr('id', 'date')
    .attr('placeholder', 'MM/DD/YYYY')
    .attr('autocomplete', 'off');
  content.append(dateLabel);
  content.append(dateInput);

  var descLabel = $('<label>')
    .attr('for', 'description')
    .text('Add a Description:');
  var desc = $('<textarea>')
    .attr('id', 'description');
  content.append(descLabel);
  content.append(desc);

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

  var footer = $('<div>').addClass('modal-footer');
  var save = $('<button>')
    .text('Save')
    .attr('id', 'save');
  footer.append(save);
  content.append(footer);

  $("#date").datepicker({
    minDate: 1
  });
  
  // closes the modal
  $('#close').on('click', closeModal);
  // button that calls saveTrip()
  $('#save').on('click', function(event) {
    saveTrip(name, address);
  });
}

function saveTrip(dest, address) {
  // save to local storage
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
  console.log(tripInfo)
  tripInfo.push(newDest);
  localStorage.setItem(tripName, JSON.stringify(tripInfo));

  // close the modal
  closeModal();
}

if(localStorage.replaced_stats) {
  localStorage.clear();
}

$('#open').on('click', openModal);