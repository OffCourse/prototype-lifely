app.directive('backButton', function($state) {
    return {
        restrict: 'A',
        scope: false,
        link: function(scope, element, attributes) {
            scope.previous = 'Dashboard';
            var clickHandler = function(e) {
                console.log($state)
                window.history.back();

            };

            $(element).on('click', clickHandler);

            scope.$on('$destroy', function() {
                $(element).off('click', clickHandler);

            })
        }
    }
})
