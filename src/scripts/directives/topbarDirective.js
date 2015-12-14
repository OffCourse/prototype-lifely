app.directive('topbar', function($http, $rootScope, $compile, $state, $timeout) {
    return {
        restrict: 'E',
        templateUrl: 'views/components/topbar.html',
        replace: true,
        link: function(scope, elm, attrs) {

            scope.$state = $state;

            var refreshNav = function(state) {
                var name = state.name.split('.')[state.name.split('.').length - 1];
                if(!state.topbar) {
                    elm.html('');
                    return;
                }
                $http.get('views/navigation/topbar/' + name + '.html').then(function(response) {
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
            if($state.current.topbar) refreshNav($state.current);
        }
    };
});
