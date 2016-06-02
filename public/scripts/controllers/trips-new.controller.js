TripsNewController.$inject = ["$location", "$http", "UserService"]; // minification protection
function TripsNewController ($location, $http, UserService) {
  var vm = this;
  vm.create = create;
  vm.users = [];
  vm.trip = {}; // form data
  vm.group = [];
  vm.isCollapsed = isCollapsed;
  vm.driver = {};

  query();

  vm.numbers = [1,2,3,4,5,6];
  vm.selectedNumber = vm.numbers[0];

  function isCollapsed() {
    vm.isCollapsed = false;
  }

  vm.addDriver = function(e){
    vm.driver = UserService.user;
  };


  function create() {
    vm.trip.group = vm.group;
    vm.trip.driver = vm.driver;
    vm.trip.driver.passengers = vm.selectedNumber;
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
