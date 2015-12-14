app.directive('sidebar', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/components/sidebar.html',
        scope: false,
        link: function(scope, element, attributes) {
            $(element).on('click', function(event) {
                // $(element).removeClass('state-expanded');
            })
        }
    };
});
