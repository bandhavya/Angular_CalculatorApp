// angularModule.directive("numberButtonview",function(){

// 	return{
// 		//restrict:"E",
// 		require:"buttonview",

// 		//template:'<button></button>'

// 		link : function(scope,element,attrs,btnController){
// 			btnController.addAlert();
// 		}
// 	}
// });

angularModule.directive("numberButtonview", function() {
    return {
        restrict: "E",
        template: '<input type="button" value={{value}} class={{className}}></input>',
        link: function(scope, element, attrs) {
            scope.value = attrs.value;
            scope.className = attrs.class;
            element.bind('click', function(event) {
                console.log(event + '..event..');
            });
        }
    }
});
