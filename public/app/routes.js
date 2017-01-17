angular.module('appRoutes', ['ngRoute'])

    .config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/templates/home.html',
        })
        .when('/signin',  {
            templateUrl:  'app/views/templates/signin.html'
        })
        .when('/signup',  {
            templateUrl:  'app/views/templates/signup.html'
        })
        .otherwise({ redirectTo: '/' });
    $locationProvider.html5Mode({
        enabled:     true,
        requireBase: false
    });
});