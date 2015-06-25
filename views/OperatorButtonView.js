angularModule.directive("operatorButtonview", function() {

    return {
        restrict: "E",
        scope: {
            value: "@",
            class: "@"
        },
        template: '<input type="button" value={{value}} class={{class}}></input>',
        link: function(scope, element, attrs) {
            // scope.value = attrs.value;
            // scope.classname = attrs.class;
            console.log(scope);

            element.bind('click', function(event) {
                console.log(element.scope());
                //alert('op click');
                element.scope().onOperatorButtonClick(event.target.value);
                scope.$apply();
            });
        }

    }
});
