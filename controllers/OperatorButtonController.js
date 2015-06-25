angularModule.controller("OperatorButtonController",function($scope ,$rootScope, OperatorButtonModel ){
console.log(OperatorButtonModel.data);
	$scope.OperatorButtonModelData = OperatorButtonModel;

	$scope.onOperatorButtonClick = function(val){
		$rootScope.$emit("myEvent",val);
	}

	this.operatorAddAlert = function(){
		alert("alert in operator ButtonController..");
	};

});