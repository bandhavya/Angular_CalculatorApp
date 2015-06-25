angularModule.directive('buttonview',function(){
	return {
        restrict: 'E',
        controller : "ButtonController",
        template: '<button></button>'
    }
})