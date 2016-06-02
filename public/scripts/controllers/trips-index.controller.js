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
  vm.isCentered = isCentered;


  query(); // fetch all the trips (index)


  ////
  function isCentered(trip) {
    console.log("CLICKED");
    console.log("trip",trip);
    vm.map.center.latitude = trip.where.geometry.location.lat;
    vm.map.center.longitude = trip.where.geometry.location.lng;
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
