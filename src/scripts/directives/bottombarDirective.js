app.directive('bottombar', function($http, $rootScope, $compile, $state, $timeout) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/components/bottombar.html',
        scope:false,
        link: function(scope, elm, attrs) {
            scope.$state = $state;

            var refreshNav = function(state) {
                var name = state.name.split('.')[state.name.split('.').length - 1];
                if(!state.bottombar) {
                    elm.html('');
                    return;
                }
                $http.get('views/navigation/bottombar/' + name + '.html').then(function(response) {
                    var navElm = angular.element(response.data);
                    var compiledNavElm = $compile(navElm)(scope);
                    elm.html(compiledNavElm);
                });
            };

            // Refresh nav on route change
            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParam) {
                if(toState) {
                    refreshNav(toState);
                }
            });

            // Refresh nav once
            if($state.current.bottombar) refreshNav($state.current);
        }
    };
});
