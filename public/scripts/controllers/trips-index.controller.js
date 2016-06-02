TripsIndexController.$inject = ["$http"]; // minification protection
function TripsIndexController ($http) {
  var vm = this;
  vm.trips = [];
  vm.map = {
    center: {
      latitude:  37.78,
      longitude: -122.44
    },
    zoom: 12
  };
  vm.oneAtATime = true;


  query(); // fetch all the trips (index)



  ////
  function isCentered() {
    console.log("CLICKED");
    console.log("trip",trip);
    vm.map.center.latitude = trip.geometry.location.lat;
    vm.map.center.longitude = trip.geometry.location.lng;
  }

  function query() {
    $http
      .get('/api/trips')
      .then(function onSuccess(response) {
        vm.trips = response.data;
        console.log(response.data);
      });
  }


}
