app.run(function($state, $rootScope, GoalsConstant) {
    var routeStates = [
        {
            name: 'login',
            topbar: false,
            bottombar:false,
            className: 'cth-page--login'
        },{
            name: 'discover',
            topbar: true,
            bottombar:false,
            className: 'cth-page--discover'
        },{
            name: 'profile',
            topbar: false,
            bottombar:false,
            className: 'cth-page--profile'
        },{
            name: 'dashboard',
            topbar: true,
            bottombar:false,
            className: 'cth-page--dashboard'
        },{
            name: 'goal',
            topbar: true,
            bottombar:true,
            className: 'cth-page--goal'
        },{
            name: 'task',
            topbar: true,
            bottombar:true,
            className: 'cth-page--task'
        },{
            name: 'task-read',
            topbar: true,
            bottombar:true,
            className: 'cth-page--task-read'
        },{
            name: 'submit',
            topbar: false,
            bottombar:false,
            className: 'cth-page--submit'
        },{
            name: 'submitted',
            topbar: false,
            bottombar:false,
            className: 'cth-page--submitted'
        }
    ];

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParam) {
        var stateArr = toState.name.split('.');
        var stateOptions = _.find(routeStates, {name: stateArr[ stateArr.length - 1 ]});
        $rootScope.barOptions = stateOptions;
        $rootScope.pageClass = stateOptions.className;

        if (['app.goal', 'app.task', 'app.task-read'].indexOf(toState.name) > -1 && toParams.goal) {
            var goalIndex = parseInt(toParams.goal);
            var goal = GoalsConstant[goalIndex];

            var type = toState.name.replace('app.', '');
            $rootScope.pageClass += ' cth-page--' + type + '-' + goal.colorName;
        }
    });
});
