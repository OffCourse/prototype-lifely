//
//  Routing config
//
app.config(function($urlRouterProvider, $stateProvider) {

    // Default routes
    $urlRouterProvider
        .when('/', '/app')
        .when('/app', '/app/dashboard')
        .otherwise('/');

    // Routes
    $stateProvider
        .state('app', {
            url: '/app',
            templateUrl: 'views/app.html',
            controller: 'AppController'
        })
        .state('app.discover', {
            url: '/discover',
            templateUrl: 'views/pages/discover.html',
            controller: 'DiscoverController',
            topbar: true
        })
        .state('app.profile', {
            url: '/profile',
            templateUrl: 'views/pages/profile.html',
            controller: 'ProfileController',
        })
        .state('app.dashboard', {
            url: '/dashboard',
            templateUrl: 'views/pages/dashboard.html',
            controller: 'DashboardController',
            topbar: true
        })
        .state('app.goal', {
            url: '/goal/:goal',
            templateUrl: 'views/pages/goal.html',
            controller: 'GoalController',
            topbar: true,
            bottombar: true
        })
        .state('app.task', {
            url: '/task/:goal',
            templateUrl: 'views/pages/task.html',
            controller: 'TaskController',
            topbar: true,
            bottombar: true
        })
        .state('app.task-read', {
            url: '/task-read/:goal',
            templateUrl: 'views/pages/task-read.html',
            controller: 'TaskReadController',
            topbar: true,
            bottombar: true
        })
        .state('app.submit', {
            url: '/submit',
            templateUrl: 'views/pages/submit.html',
            controller: 'SubmitController'
        })
        .state('app.submitted', {
            url: '/submitted',
            templateUrl: 'views/pages/submitted.html',
            controller: 'SubmittedController'
        })
});
