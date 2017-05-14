pwsApp.controller('trabalhosCtrl', function($scope, $window, $http) {
	$window.scrollTo(0, 0);
	// console.log("work-ctrl");
	
	$http({
		url: "js/work.json",
		method: "GET"
	})
	.then(
		function successCallback(response){
			$scope.works = response.data;
			console.log(response.data)
			// $scope.agendafiltro = $filter('filter')($scope.agendaLista, {Esporte: meuEsporte}); //filtra o array de acordo com o esporte recebido
			// preloader.style.display = "none";
		},
		function errorCallback(response){
			console.log("erro -> "+response);
			// preloader.style.display = "none";
			alert("Erro: O servidor se comportou de maneira inesperada");
		}
	)
});