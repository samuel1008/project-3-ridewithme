TripsNewController.$inject = ["$location", "$http"]; // minification protection
function TripsNewController ($location, $http) {
  var vm = this;
  vm.create = create;
  vm.trip = {}; // form data

  // query();

  function create() {
    debugger
    $http
      .post('/api/trips', vm.trip)
      .then(onCreateSuccess, onCreateError);

    function onCreateSuccess(response){
      debugger
      console.log(response.data._id);
      $location.path('/trips/' + response.data._id);
    }

    function onCreateError(response){
      console.error("Failed to create trip", response);
    }
  }

  // function query() {
  //   $http
  //     .get('/api/users')
  //     .then(function onSuccess(response) {
  //       vm.users = response.data;
  //       console.log(response.data);
  //     });
  // }
}
