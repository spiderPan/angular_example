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
		var _city = $scope.add_city.trim();
		if(_city.length>0){
			if(_city.lastIndexOf(',')>-1){
				var _position = _city.lastIndexOf(',');
				var _cityName = _city.substring(0, _position).trim(); 
				var _country = _city.substr(_position+1).trim(); 
				
				$scope.cityList.push({name:_cityName, country:_country});
			}else{
				$scope.cityList.push({name:_city,country:'ca'});
			}
		$scope.add_city = '';
		
		
		
		}
		
	}
}
