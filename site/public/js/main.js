var myLatitude, myLongitude;
var myLocation;
//var cameras;

function get_location() {
  if (Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(load_video, handle_error);
  } else {
    // no native support; maybe try a fallback?
  }
}

function load_video(position) {
  myLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
  }
  closest = closestLocation(myLocation, cameras);
  $('#location').html('Closest is ' + closest.name);
  $('#camera').attr('src', closest.video)
}

function handle_error(err) {
	alert(err.code);
  if (err.code == 1) {
    // user said no!
  }
}

function closestLocation(targetLocation, locationData) {
    function vectorDistance(dx, dy) {
        return Math.sqrt(dx * dx + dy * dy);
    }
 
    function locationDistance(location1, location2) {
        var dx = location1.lat - location2.lat,
            dy = location1.lng - location2.lng;
        return vectorDistance(dx, dy);
    }
 
    return locationData.reduce(function(prev, curr) {
        var prevDistance = locationDistance(targetLocation , prev),
            currDistance = locationDistance(targetLocation , curr);
        return (prevDistance < currDistance) ? prev : curr;
    });
}


$(function() {

  $.getJSON("js/cameras.json")
    .done(function( data ) {
      cameras = data;
      get_location();
    });


});


