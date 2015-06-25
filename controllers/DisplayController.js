angularModule.controller("DisplayController", function($scope, $rootScope) {
    $rootScope.model = DisplayModel;
    $scope.model = DisplayModel;

    this.setInputValue = function(value) {
        alert('into set input' + value);
        console.log($scope.model.value);
        $scope.$apply(function() {
            $rootScope.model.value = value;
            $scope.model.value = value;
        })
    }

    $rootScope.$on("myEvent", function(event, arg) {
        $rootScope.$emit("calculate", arg);

        // if(arg == '='){
        // 	$scope.model.value = eval($scope.model.value);
        // }else if(arg== 'c'){
        // 	$scope.model.value = '';
        // }else{
        // 		$scope.model.value =  $scope.model.value + arg;

        // }
    });

});
