angularModule.controller("ButtonController", function($scope) {

    $scope.onButtonClick = function() {
        alert('button click...');
    }

    this.addAlert = function() {
        alert("alert in ButtonController..");
    };

});
