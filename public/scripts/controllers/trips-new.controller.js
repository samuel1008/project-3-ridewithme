TripsNewController.$inject = ["$location", "$http"]; // minification protection
function TripsNewController ($location, $http) {
  var vm = this;
  vm.create = create;
  vm.users = [];
  vm.trip = {}; // form data
  vm.group = [];

  query();

  // Add a Item to the list
  // function group() {
  //   var group= [];
  //    var invite = vm.group.push({
  //     name: vm.users.displayName,
  //   });
  //   vm.trip.push(invite);
  // }
    // remove an item
  function remove(index) {
   vm.users.splice(index, 1);
 }


  function create() {
    vm.trip.group = vm.group;
    $http
      .post('/api/trips', vm.trip)
      .then(onCreateSuccess, onCreateError);
    function onCreateSuccess(response){
      console.log(response.data._id);
      $location.path('/trips/' + response.data._id);
    }
    function onCreateError(response){
      console.error("Failed to create trip", response);
    }
  }

  function query() {
    $http
      .get('/api/users')
      .then(function onSuccess(response) {
        vm.users = response.data;
        console.log(response.data);
      });
  }
}
