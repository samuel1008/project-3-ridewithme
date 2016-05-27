TripsEditController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function TripsEditController ($location, $http, $routeParams) {
  var vm = this;
  vm.update = update;
  vm.destroy = destroy;
  vm.trip = {}; // form data

  var id = $routeParams.id;
  get(); // fetch one trip (show)

  ////

  function update() {
    $http
      .put('/api/trips/' + id, vm.trip)
      .then(onUpdateSuccess, onUpdateError);

    function onUpdateSuccess(response){
      $location.path("/trips/" + id);
    }

    function onUpdateError(response){
      console.error("Failed to update trip", response);
    }
  }

  function destroy() {
    $http
      .delete('/api/trips/' + id)
      .then(onDeleteSuccess, onDeleteError);

    function onDeleteSuccess(response){
      $location.path("/");
    }

    function onDeleteError(response){
      console.error("Failed to delete trip", response);
    }
  }

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
