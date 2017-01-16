console.log('Angular app.js is here');
let app = angular.module('appRoutes', ['ngRoute'])

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "views/index.html",

        })
        .when('/home', {
            templateUrl: "users/templates/home.html",
            controller: "homeController",
            controllerAs: "home"
        })
});

app.controller('homeController', function ($scope) {
    let vm = $scope;
    console.log('Home controller is here');
    vm.title = 'Welcome to the home page'
})