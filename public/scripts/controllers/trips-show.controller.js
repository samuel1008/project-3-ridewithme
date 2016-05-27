TripsShowController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function TripsShowController ($location, $http, $routeParams) {
  var vm = this;
  vm.trip = {};

  var id = $routeParams.id;
  get(); // fetch one trip (show)

  ////

  function get() {
    $http
      .get('/api/trips/' + id)
      .then(onGetSuccess, onGetError);

    function onGetSuccess(response){
      vm.trip = response.data;
    }

    function onGetError(response){
      console.error("Failed to get trip", response);
      $location.path("/");
    }
  }
}
