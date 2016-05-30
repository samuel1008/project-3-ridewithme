angular
  .module('RideWithMe', [
    'ngRoute',
    'satellizer',
    'uiGmapgoogle-maps',
    'ngAnimate',
    'ui.bootstrap'
  ])
  .controller('MainController', MainController)
  .controller('TripsIndexController', TripsIndexController)
  .controller('TripsNewController', TripsNewController)
  .controller('TripsShowController', TripsShowController)
  .controller('TripsEditController', TripsEditController)
  .controller('LoginController', LoginController)
  .controller('SignupController', SignupController)
  .controller('LogoutController', LogoutController)
  .controller('ProfileController', ProfileController)
  .service('UserService', UserService)
  .config(configRoutes)
  ;
