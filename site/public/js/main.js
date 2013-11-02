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

  get_location();

});


cameras = [
    {
        "id": "cam22",
        "name": "2nd Ave and Browne St",
        "flow": "No Data",
        "averagespeed": "No Data",
        "objectname": "c965d25f821a4ae8819a3e3c92945af3",
        "image": "http://198.1.38.5/video.jpg?source=7632&framerate=0",
        "video": "http://198.1.38.5/video.jpg?source=7632&framerate=10&timeout=900",
        "direction": "No Data",
        "status": "Online",
        "lat": 47.65454219999999,
        "lng": -117.4133973
    },
    {
        "id": "cam24",
        "name": "2nd Ave and Monroe St",
        "flow": "No Data",
        "averagespeed": "No Data",
        "objectname": "6d46f5d8d1c348a99ff8e9f5b0936c2e",
        "image": "http://198.1.38.5/video.jpg?source=7642&framerate=0",
        "video": "http://198.1.38.5/video.jpg?source=7642&framerate=10&timeout=900",
        "direction": "No Data",
        "status": "Online",
        "lat": 47.6544718,
        "lng": -117.4264946
    },
    {
        "id": "cam75",
        "name": "2nd Ave and Stevens St",
        "flow": "No Data",
        "averagespeed": "No Data",
        "objectname": "d7a92379f2f247bda546e52c659f1d37",
        "image": "http://198.1.38.4/video.jpg?source=9711&framerate=0",
        "video": "http://198.1.38.4/video.jpg?source=9711&framerate=10&timeout=900",
        "direction": "No Data",
        "status": "Online",
        "lat": 47.654512,
        "lng": -117.4194808
    },
    {
        "id": "cam73",
        "name": "2nd Ave and Walnut St",
        "flow": "No Data",
        "averagespeed": "No Data",
        "objectname": "e32fc7061688490bb7051c3233947640",
        "image": "http://198.1.38.4/video.jpg?source=9631&framerate=0",
        "video": "http://198.1.38.4/video.jpg?source=9631&framerate=10&timeout=900",
        "direction": "No Data",
        "status": "Online",
        "lat": 47.654452,
        "lng": -117.4340066
    },
    {
        "id": "cam74",
        "name": "3rd Ave and Lincoln St",
        "flow": "No Data",
        "averagespeed": "No Data",
        "objectname": "4ef30cdc85024dd99b24e81ccea0d020",
        "image": "http://198.1.38.4/video.jpg?source=9641&framerate=0",
        "video": "http://198.1.38.4/video.jpg?source=9641&framerate=10&timeout=900",
        "direction": "No Data",
        "status": "Online",
        "lat": 47.6534486,
        "lng": -117.4249757
    },
    {
        "id": "cam26",
        "name": "3rd Ave and Maple St",
        "flow": "No Data",
        "averagespeed": "No Data",
        "objectname": "d336abaa14ce4901a9e1f873b7f55f68",
        "image": "http://198.1.38.5/video.jpg?source=7722&framerate=0",
        "video": "http://198.1.38.5/video.jpg?source=7722&framerate=10&timeout=900",
        "direction": "No Data",
        "status": "Online",
        "lat": 47.6535615,
        "lng": -117.4355568
    },
    {
        "id": "cam23",
        "name": "3rd Ave and Washington St",
        "flow": "No Data",
        "averagespeed": "No Data",
        "objectname": "b2ed04de886541c3acc0098d970d56cb",
        "image": "http://198.1.38.5/video.jpg?source=7712&framerate=0",
        "video": "http://198.1.38.5/video.jpg?source=7712&framerate=10&timeout=900",
        "direction": "No Data",
        "status": "Online",
        "lat": 47.65347490000001,
        "lng": -117.4179545
    },
    {
        "id": "cam72",
        "name": "6th Ave and Stevens St",
        "flow": "No Data",
        "averagespeed": "No Data",
        "objectname": "5a098bc49bef4306a0d386d6409429c7",
        "image": "http://198.1.38.4/video.jpg?source=9621&framerate=0",
        "video": "http://198.1.38.4/video.jpg?source=9621&framerate=10&timeout=900",
        "direction": "No Data",
        "status": "Online",
        "lat": 47.6503917,
        "lng": -117.4194333
    },
    {
        "id": "cam71",
        "name": "6th Ave and Washington St",
        "flow": "No Data",
        "averagespeed": "No Data",
        "objectname": "28ccef1720814a80ba6adb94926de1b0",
        "image": "http://198.1.38.4/video.jpg?source=9611&framerate=0",
        "video": "http://198.1.38.4/video.jpg?source=9611&framerate=10&timeout=900",
        "direction": "No Data",
        "status": "Online",
        "lat": 47.6504039,
        "lng": -117.4179175
    },
    {
        "id": "cam52",
        "name": "Ash St and 5 Mile Rd",
        "flow": "No Data",
        "averagespeed": "No Data",
        "objectname": "4a455a8c28514c5c98dffc2eb8b09a56",
        "image": "http://198.1.38.5/video.jpg?source=9542&framerate=0",
        "video": "http://198.1.38.5/video.jpg?source=9542&framerate=10&timeout=900",
        "direction": "No Data",
        "status": "Online",
        "lat": 47.7170319,
        "lng": -117.4363841
    },
    {
        "id": "cam34",
        "name": "Ash St and Boone Ave",
        "flow": "No Data",
        "averagespeed": "No Data",
        "objectname": "31c2c53cada84b3288fb5eca42fc494b",
        "image": "http://198.1.38.5/video.jpg?source=9222&framerate=0",
        "video": "http://198.1.38.5/video.jpg?source=9222&framerate=10&timeout=900",
        "direction": "No Data",
        "status": "Online",
        "lat": 47.66800800000001,
        "lng": -117.4369676
    },
    {
        "id": "cam49",
        "name": "Ash St and Francis Ave",
        "flow": "No Data",
        "averagespeed": "No Data",
        "objectname": "d40fb08081704e76bb0647a38fd39c9c",
        "image": "http://198.1.38.5/video.jpg?source=9522&framerate=0",
        "video": "http://198.1.38.5/video.jpg?source=9522&framerate=10&timeout=900",
        "direction": "No Data",
        "status": "Online",
        "lat": 47.7153998,
        "lng": -117.4363954
    },
    {
        "id": "cam44",
        "name": "Ash St and Garland Ave",
        "flow": "No Data",
        "averagespeed": "No Data",
        "objectname": "7022179504b2420f9dc2789f30b27e65",
        "image": "http://198.1.38.5/video.jpg?source=9422&framerate=0",
        "video": "http://198.1.38.5/video.jpg?source=9422&framerate=10&timeout=900",
        "direction": "No Data",
        "status": "Online",
        "lat": 47.6935007,
        "lng": -117.4364162
    },
    {
        "id": "cam39",
        "name": "Ash St and Indiana Ave",
        "flow": "No Data",
        "averagespeed": "No Data",
        "objectname": "fa01747c821c4972948c33c76c85ebef",
        "image": "http://198.1.38.5/video.jpg?source=9322&framerate=0",
        "video": "http://198.1.38.5/video.jpg?source=9322&framerate=10&timeout=900",
        "direction": "No Data",
        "status": "Online",
        "lat": 47.6749231,
        "lng": -117.4370025
    },
    {
        "id": "cam37",
        "name": "Ash St and Maxwell Ave",
        "flow": "No Data",
        "averagespeed": "No Data",
        "objectname": "4151c48e74204e748ca4790f2bd6692c",
        "image": "http://198.1.38.5/video.jpg?source=9242&framerate=0",
        "video": "http://198.1.38.5/video.jpg?source=9242&framerate=10&timeout=900",
        "direction": "No Data",
        "status": "Online",
        "lat": 47.67082500000001,
        "lng": -117.4369766
    },
    {
        "id": "cam42",
        "name": "Ash St and Northwest Blvd",
        "flow": "No Data",
        "averagespeed": "No Data",
        "objectname": "0e729112e6d647489843629309dc1504",
        "image": "http://198.1.38.5/video.jpg?source=9342&framerate=0",
        "video": "http://198.1.38.5/video.jpg?source=9342&framerate=10&timeout=900",
        "direction": "No Data",
        "status": "Online",
        "lat": 47.6796863,
        "lng": -117.437019
    },
    {
        "id": "cam47",
        "name": "Ash St and Wellesley Ave",
        "flow": "No Data",
        "averagespeed": "No Data",
        "objectname": "d8a0bfb63c5c44198b6405b2a69a357c",
        "image": "http://198.1.38.5/video.jpg?source=9442&framerate=0",
        "video": "http://198.1.38.5/video.jpg?source=9442&framerate=10&timeout=900",
        "direction": "No Data",
        "status": "Online",
        "lat": 47.7007649,
        "lng": -117.4364314
    },
    {
        "id": "cam88",
        "name": "Division St and Bridgeport Ave",
        "flow": "No Data",
        "averagespeed": "No Data",
        "objectname": "cd5ade38ea454a68a99956e33ce6eec7",
        "image": "http://198.1.38.4/video.jpg?source=8331&framerate=0",
        "video": "http://198.1.38.4/video.jpg?source=8331&framerate=10&timeout=900",
        "direction": "No Data",
        "status": "Online",
        "lat": 47.688494,
        "lng": -117.4112632
    },
    {
        "id": "cam79",
        "name": "Division St and Buckeye Ave",
        "flow": "No Data",
        "averagespeed": "No Data",
        "objectname": "a929fa82cad24b0f893e6bcbbc93ce82",
        "image": "http://198.1.38.4/video.jpg?source=9941&framerate=0",
        "video": "http://198.1.38.4/video.jpg?source=9941&framerate=10&timeout=900",
        "direction": "No Data",
        "status": "Online",
        "lat": 47.6827727,
        "lng": -117.4111601
    },
    {
        "id": "cam87",
        "name": "Division St and Country Homes Blvd",
        "flow": "No Data",
        "averagespeed": "No Data",
        "objectname": "1914c555b7ac4305b374d4c2807effde",
        "image": "http://198.1.38.4/video.jpg?source=8341&framerate=0",
        "video": "http://198.1.38.4/video.jpg?source=8341&framerate=10&timeout=900",
        "direction": "No Data",
        "status": "Online",
        "lat": 47.74086699999999,
        "lng": -117.411393
    }
];
