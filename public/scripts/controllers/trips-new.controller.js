TripsNewController.$inject = ["$location", "$http"]; // minification protection
function TripsNewController ($location, $http) {
  var vm = this;
  vm.create = create;
  vm.trip = {}; // form data

  ////

  function create() {
    $http
      .trip('/api/trips', vm.trip)
      .then(onCreateSuccess, onCreateError);

    function onCreateSuccess(response){
      $location.path('/trips/' + response.data._id);
    }

    function onCreateError(response){
      console.error("Failed to create trip", response);
    }
  }
}
