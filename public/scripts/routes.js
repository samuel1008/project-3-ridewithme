configRoutes.$inject = ["$routeProvider", "$locationProvider"]; // minification protection
function configRoutes($routeProvider, $locationProvider) {

  //this allows us to use routes without hash params!
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider
    .when('/', {
      templateUrl: 'templates/trips/index.html',
      controller: 'TripsIndexController',
      controllerAs: 'tripsIndexCtrl'
    })
    .when('/signup', {
      templateUrl: 'templates/user/signup.html',
      controller: 'SignupController',
      controllerAs: 'sc',
      resolve: {
        skipIfLoggedIn: skipIfLoggedIn
      }
    })
    .when('/login', {
      templateUrl: 'templates/auth/login.html',
      controller: 'LoginController',
      controllerAs: 'lc',
      resolve: {
        skipIfLoggedIn: skipIfLoggedIn
      }
    })
    .when('/logout', {
      template: null,
      controller: 'LogoutController',
      resolve: {
        loginRequired: loginRequired
      }
    })
    .when('/profile', {
      templateUrl: 'templates/user/profile.html',
      controller: 'ProfileController',
      controllerAs: 'profileCtrl',
      resolve: {
        loginRequired: loginRequired
      }
    })
    .when('/trips', {
      templateUrl: 'templates/trips/index.html',
      controller: 'TripsIndexController',
      controllerAs: 'tripsIndexCtrl'
    })
    .when('/trips/new', {
      templateUrl: 'templates/trips/new.html',
      controller: 'TripsNewController',
      controllerAs: 'tripsNewCtrl',
      resolve: {
        loginRequired: loginRequired
      }
    })
    .when('/trips/:id', {
      templateUrl: 'templates/trips/show.html',
      controller: 'TripsShowController',
      controllerAs: 'tripsShowCtrl'
    })
    .when('/trips/:id/edit', {
      templateUrl: 'templates/trips/edit.html',
      controller: 'TripsEditController',
      controllerAs: 'tripsEditCtrl',
      resolve: {
        loginRequired: loginRequired
      }
    })
    .otherwise({redirectTo: '/'});


    function skipIfLoggedIn($location, $auth) {
      if ($auth.isAuthenticated()) {
        $location.path('/');
      }
    }

    function loginRequired($location, $auth) {
      if (!$auth.isAuthenticated()) {
        $location.path('/login');
      }
    }

}
