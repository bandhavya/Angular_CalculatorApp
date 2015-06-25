angularModule.controller("NumberButtonController",function($scope, $rootScope , NumberButtonModel ){
console.log(NumberButtonModel.data);
	$scope.NumberButtonModelData = NumberButtonModel;

	$scope.onNumberButtonClick = function(val){
		$rootScope.$emit("myEvent",val);

	}

	this.numberAddAlert = function(){
		alert("alert in number ButtonController..");
	};



});