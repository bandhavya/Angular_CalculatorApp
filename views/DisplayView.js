angularModule.directive('displayView', function() {
    // return {
    //        restrict: 'E',
    //        scope:{
    //          value : "@",
    //          widthValue : "@"
    //        },
    //        template: '<input type="text" style={{widthValue}} value={{value}}>',
    //        link:function(scope,element,attrs){

    //        }
    //    }

    return {
        restrict: 'E',
        replace: true,
        // scope:{
        //      value : "@",
        //      style : "@"
        //     },
        // template: '<input type="text" style={{style}} value={{value}}>',
        template: '<input type="text">',

        link: function(scope, element, attrs) {}
    }

})
