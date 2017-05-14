pwsApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html",
        controller : "homeCtrl",
        title : "Página Inicial"
    })
    .when("/about", {
        templateUrl : "views/about.html",
        controller : "aboutCtrl",
        title : "Sobre"
    })
    .when("/work", {
        templateUrl : "views/work.html",
        controller : "workCtrl",
        title : "Trabalhos"
    });
    $locationProvider.html5Mode(true);
});