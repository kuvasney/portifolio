pwsApp.controller('homeCtrl', function($scope, $window) {
	$window.scrollTo(0, 0);
	console.log("home-ctrl");	
	$scope.message = "Scope is home"
});