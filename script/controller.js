function TodoCtrl($scope, $http) {
	$scope.localStorageSupport = false;
	if(typeof(Storage)!=="undefined"){
		$scope.localStorageSupport = true;
		
	}
	$scope.title = "Ontario Weather";
	$scope.cityList = [
		{
			name : 'Shanghai',
			country : 'cn'
		}, 
		{
			name : 'Toronto',
			country : 'ca'
		}, 
		{
			name : 'London',
			country : 'ca'
		}

	]
	
	$scope.check_city = '';
	$scope.city_weather = function () {
		
		$scope.check_city = this.check_city;
		
		$http.get('http://api.openweathermap.org/data/2.5/weather?q=' + $scope.check_city+"&units=metric").success(function (data) {
			$scope.weather = data.main;
			$scope.wind = data.wind;
		});
	}
	$scope.add_city_to_list = function(){
		if($scope.add_city.length>0){
			$scope.cityList.push({name:$scope.add_city,country:'ca'});
		$scope.add_city = '';
		
		
		
		}
		
	}
}
