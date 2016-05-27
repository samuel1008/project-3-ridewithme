TripsIndexController.$inject = ["$http"]; // minification protection
function TripsIndexController ($http) {
  var vm = this;
  vm.trips = [];

  query(); // fetch all the trips (index)

  ////

  function query() {
    $http
      .get('/api/trips')
      .then(function onSuccess(response) {
        vm.trips = response.data;
      });
  }
}
