function TodoCtrl($scope, $http) {
	$scope.title = "Todo";
	$scope.cityList = [{
			name : 'Barrie',
			country : 'ca'
		}, {
			name : 'Toronto',
			country : 'ca'
		}, {
			name : 'London',
			country : 'ca'
		}

	]
	$scope.check_city = '';
	$scope.city_weather = function () {
		console.log(this);
		$scope.check_city = this.check_city;
		
		$http.get('http://api.openweathermap.org/data/2.5/weather?q=' + $scope.check_city+"&units=metric").success(function (data) {
			$scope.weather = data.main;
			$scope.wind = data.wind;
		});
	}

}
