var pwsApp = angular.module('pwsApp', ['ngRoute']);

pwsApp.config(function($routeProvider, $locationProvider) {

    $routeProvider
    .when('/', {
        templateUrl : 'views/home.html',
        controller : 'homeCtrl',
        title : 'Página Inicial'
    })
    .when('/sobre', {
        templateUrl : 'views/sobre.html',
        controller : 'sobreCtrl',
        title : 'Sobre'
    })
    .when('/trabalhos', {
        templateUrl : 'views/trabalhos.html',
        controller : 'trabalhosCtrl',
        title : 'Trabalhos'
    });
    $locationProvider.html5Mode(true);
});