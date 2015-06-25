// var angularModule = angular.module("calApp", []);

angularModule.controller('CalculatorController', function($scope, $rootScope) {
    console.log("in calculator ctrl");

    $rootScope.$on("calculate", function(event, arg) {
        if (arg == '=') {
            $rootScope.model.value = eval($rootScope.model.value);
        } else if (arg == 'c') {
            $scope.model.value = '';
        } else {
            $rootScope.model.value = $rootScope.model.value + arg;

        }
    })

})
