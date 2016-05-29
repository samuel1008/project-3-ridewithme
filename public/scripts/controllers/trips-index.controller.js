TripsIndexController.$inject = ["$http"]; // minification protection
function TripsIndexController ($http) {
  var vm = this;
  vm.trips = [];
  vm.map = { center: { latitude:  37.78, longitude: -122.44 }, zoom: 10 };

  query(); // fetch all the trips (index)

  ////

  function query() {
    $http
      .get('/api/trips')
      .then(function onSuccess(response) {
        vm.trips = response.data;
        console.log(response.data);
      });
  }


}
