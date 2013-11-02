
function get_location() {
  if (Modernizr.geolocation) {
  	alert('getting location');
    navigator.geolocation.getCurrentPosition(show_map, handle_error);
  } else {
    // no native support; maybe try a fallback?
  }
}

function show_map(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  $('#location').text = 'Your location is ' + latitude + ', ' + longitude;
}

$(function() {
  get_location();
});

function handle_error(err) {
	alert(err.code);
  if (err.code == 1) {
    // user said no!
  }
}