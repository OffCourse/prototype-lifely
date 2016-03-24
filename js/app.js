var app = angular.module('codingthehumanities-prototype', [
    'ngRoute',
    'ui.router',
    'ng-fastclick',
    // 'ngAnimate',
]);
;
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
;
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
;
app.constant('GoalsConstant', [
    {
        tags: ['data'],
        color: '#75C7B3',
        colorName: 'cthblue',
        title: 'Learn Basic Programming to Develop Your First Research Tool',
        author: 'Timothy Hanson',
        avatar: 'c'
    },
    {
        tags: ['coding'],
        color: '#E5CF39',
        colorName: 'cthyellow',
        title: 'From Object to Data',
        author: 'Gregory Cook',
        avatar: 'a'
    },
    {
        tags: ['coding', 'research'],
        color: '#E34D2F',
        colorName: 'cthred',
        title: 'The Web as Publication Platform',
        author: 'Gregory Cook',
        avatar: 'a'
    },
    {
        tags: ['coding'],
        color: '#A5CC45',
        colorName: 'cthgreen',
        title: 'Visualizing Data',
        author: 'Diane West',
        avatar: 'b'
    },
    {
        tags: ['coding'],
        color: '#c0c4c1',
        colorName: 'cthgray',
        title: 'Putting the Big Back in Data',
        author: 'Gregory Cook',
        avatar: 'a'
    },
    {
        tags: ['art', 'data'],
        color: '#75C7B3',
        colorName: 'cthblue',
        title: 'Augmenting Masterpieces',
        author: 'Timothy Hanson',
        avatar: 'c'
    },
    {
        tags: ['coding', 'research'],
        color: '#E34D2F',
        colorName: 'cthred',
        title: 'The Human Body as Big Data',
        author: 'Gregory Cook',
        avatar: 'a'
    },
    {
        tags: ['architecture', 'art'],
        color: '#A5CC45',
        colorName: 'cthgreen',
        title: 'The City as Interface',
        author: 'Diane West',
        avatar: 'b'
    },
    {
        tags: ['coding'],
        color: '#E5CF39',
        colorName: 'cthyellow',
        title: 'HTML for Humanists',
        author: 'Gregory Cook',
        avatar: 'a'
    },
    {
        tags: ['data'],
        color: '#75C7B3',
        colorName: 'cthblue',
        title: 'Rocking Recommendation Systems',
        author: 'Timothy Hanson',
        avatar: 'c'
    },
    {
        tags: ['coding', 'research'],
        color: '#E34D2F',
        colorName: 'cthred',
        title: 'Git for Research',
        author: 'Gregory Cook',
        avatar: 'a'
    },
    {
        tags: ['coding'],
        color: '#c0c4c1',
        colorName: 'cthgray',
        title: 'Open Sourcing the Academy',
        author: 'Diane West',
        avatar: 'b'
    },

    /* repeat below */

    {
        tags: ['data'],
        color: '#75C7B3',
        colorName: 'cthblue',
        title: 'Learn Basic Programming to Develop Your First Research Tool',
        author: 'Timothy Hanson',
        avatar: 'c'
    },
    {
        tags: ['coding'],
        color: '#E5CF39',
        colorName: 'cthyellow',
        title: 'From Object to Data',
        author: 'Gregory Cook',
        avatar: 'a'
    },
    {
        tags: ['coding', 'research'],
        color: '#E34D2F',
        colorName: 'cthred',
        title: 'The Web as Publication Platform',
        author: 'Gregory Cook',
        avatar: 'a'
    },
    {
        tags: ['coding'],
        color: '#A5CC45',
        colorName: 'cthgreen',
        title: 'Visualizing Data',
        author: 'Diane West',
        avatar: 'b'
    },
    {
        tags: ['coding'],
        color: '#c0c4c1',
        colorName: 'cthgray',
        title: 'Putting the Big Back in Data',
        author: 'Gregory Cook',
        avatar: 'a'
    },
    {
        tags: ['art', 'data'],
        color: '#75C7B3',
        colorName: 'cthblue',
        title: 'Augmenting Masterpieces',
        author: 'Timothy Hanson',
        avatar: 'c'
    }
]);
;
app.controller('AppController', function($scope, $rootScope, $state, $window) {
    $scope.sidebarExpanded = false;
    $scope.bottombarExpanded = false;

    $scope.buttonChange = false;

    $scope.back = function() {
        $window.history.back();
    };

    $scope.changeState = function() {
        $scope.buttonChange = true;
        $state.go('app.submit');
    };

    $rootScope.$on('$stateChangeSuccess', function() {
        $scope.sidebarExpanded = false;
        $scope.bottombarExpanded = false;
    });

    $scope.currentTask = null;
    $scope.tasks = [
        {
            title: 'Be happy while being stupid',
            submitted: false,
            in_progress: true,
            date: moment().add(1, 'days').toDate(),
            type: 'read'
        },
        {
            title: 'Build your first website',
            submitted: false,
            in_progress: false,
            date: moment().add(2, 'days').toDate(),
            type: 'read'
        },
        {
            title: 'Make an interactive website',
            submitted: false,
            in_progress: false,
            date: moment().add(3, 'days').toDate(),
            type: 'read'
        },
        {
            title: 'Be a builder',
            submitted: false,
            in_progress: false,
            date: moment().add(3, 'days').toDate(),
            type: 'read'
        },
        {
            title: 'Play around with JavaScript',
            submitted: false,
            in_progress: false,
            date: moment().add(5, 'days').toDate(),
            type: 'read'
        },
        {
            title: 'Empower JavaScript with jQuery',
            submitted: false,
            in_progress: false,
            date: moment().add(6, 'days').toDate(),
            type: 'read'
        },
        {
            title: 'Build your first tool',
            submitted: true,
            in_progress: true,
            date: moment().add(7, 'days').toDate(),
            type: 'submit'
        }
    ];

    var now = new Date();
    $scope.tasks.forEach(function(task, index) {
        var timeDiff = task.date.getTime() - now.getTime();

        if (timeDiff <= 0) {
            if (task.submitted) {
                // on time
                task.iconClass = 'cth-icon-done';

                var dateString = moment(task.date).format('MMMM Do YYYY [at] h:mm A');
                task.dateAppearance = 'Done ' + dateString;
            } else {
                // too late
                task.iconClass = false;
                task.dateAppearance = 'Due date passed';
            }
        } else {
            // in future

            if (task.in_progress) {
                // currently in progress
                task.iconClass = 'cth-icon-done-dot';
            }

            var dateString = moment(task.date).fromNow();
            task.dateAppearance = 'Due ' + dateString;
        }

        task.link = function() {
            $scope.currentTask = index;
            var stateGoalParams = {goal: $state.params.goal};

            $scope.bottombarExpanded = false;
            if (task.type === 'submit') {
                $state.go('app.task', stateGoalParams);
            } else if (task.type === 'read') {
                $state.go('app.task-read', stateGoalParams);
            }
        };
    });
});


;
app.controller('DashboardController', function($scope, GoalsConstant) {
    $scope.goals = GoalsConstant;
});
;
app.controller('DiscoverController', function($scope, GoalsConstant) {
    $scope.goals = GoalsConstant;
});
;
app.controller('GoalController', function($scope, GoalsConstant, $state) {
    $scope.expanded = false;
    $scope.cardActive = true;

    var currentGoalIndex = parseInt($state.params.goal);
    $scope.goal = GoalsConstant[currentGoalIndex];

    $scope.toggleCard = function() {
        $scope.cardActive = !$scope.cardActive;
    }
});
;
app.controller('LoginController', function() {

});
;
app.controller('ProfileController', function() {

});
;
app.controller('SubmitController', function($scope, $rootScope, $window) {
    $scope.left = true;
    $scope.right = false;

    $scope.githubLink = 'http://';

    $scope.clickAspect = function(index) {
        $scope.currentAspect = index;
    };

    $scope.currentAspect = 0;
    $scope.aspects = [
        'Content',
        'Design',
        'UX',
        'Execution',
        'Architecture',
        'Concept'
    ];

    $scope.clickContributor = function(index) {
        var contributorIndexInArray = $scope.currentContributors.indexOf(index);
        var isNotInCurrentContributorsArray = contributorIndexInArray === -1;

        if (isNotInCurrentContributorsArray) {
            $scope.currentContributors.push(index);
        } else {
            $scope.currentContributors[contributorIndexInArray] = undefined;
        }
    };

    $scope.currentContributors = [];
    $scope.contributors = [
        'Jeremy Hunt',
        'Mary Davids',
        'Sara Stone',
        'Sean Jordan'
    ];

    $scope.clickSubmit = function (){
        $rootScope.isSubmitted = true;
        $window.history.back();
    }
});
;
app.controller('SubmittedController', function($scope) {
    $scope.liked = false;

    $scope.likeToggle = function() {
        $scope.liked = !$scope.liked
    };

    $scope.likeCount = function(liked) {
        return liked ? '8' : '7';
    };
});
;
app.controller('TaskController', function($scope, $state) {
    $scope.expanded = false;
    $scope.currentTask = 0;
    $scope.currentCounter = 0;

    var defaultCounters = {
        1: 12,
        2: 8
    };

    function initResources() {
        $scope.primaryResource = 1;
        $scope.alternativeResources = [2];
        $scope.currentCounter = defaultCounters[1];
    }

    $scope.$parent.$watch('currentTask', function(value) {
        value = value || 0;
        var task = $scope.$parent.tasks[value];
        if (task) {
            $scope.currentTask = value;
            $scope.title = task.title;
            initResources();
        }
    });

    $scope.selectAlternative = function(resource) {
        var index = $scope.alternativeResources.indexOf(resource);
        $scope.alternativeResources.splice(index, 1);
        $scope.alternativeResources.push($scope.primaryResource);
        $scope.primaryResource = resource;

        $scope.currentCounter = defaultCounters[resource]
    }

    initResources();

});
;
app.controller('TaskReadController', function($scope) {
    $scope.expanded = false;
    $scope.currentTask = 0;
    $scope.currentCounter = 0;

    var defaultCounters = {
        1: 16,
        2: 8,
        3: 4
    };

    function initResources() {
        $scope.primaryResource = 1;
        $scope.alternativeResources = [2, 3];
        $scope.currentCounter = defaultCounters[1];
    }

    $scope.$parent.$watch('currentTask', function(value) {
        value = value || 0;
        var task = $scope.$parent.tasks[value];
        if (task) {
            $scope.currentTask = value;
            $scope.title = task.title;
            initResources();
        }
    });

    $scope.selectAlternative = function(resource) {
        var index = $scope.alternativeResources.indexOf(resource);
        $scope.alternativeResources.splice(index, 1);
        $scope.alternativeResources.push($scope.primaryResource);
        $scope.primaryResource = resource;

        $scope.currentCounter = defaultCounters[resource]
    }

    initResources();

    $scope.doneCount = function(isDone) {
        if (isDone) {
            $scope.currentCounter = defaultCounters[$scope.primaryResource] + 1;
        } else {
            $scope.currentCounter = defaultCounters[$scope.primaryResource];
        };
        return $scope.currentCounter;
    };
});
;
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
;
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
;
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
;
app.directive('toggleButton', function() {
    return {
        restrict: 'A',
        scope: false,
        link: function(scope, element, attributes) {
            var elm = $(element);
            var outsideToggleTarget;
            var target;
            var buttonClickHandler = function(e) {
                target = document.querySelector("[toggle-target=" + attributes.toggleButton + "]");
                $(target).toggleClass(attributes.toggleClass);
            };
            elm.on('click', buttonClickHandler);

            scope.$on('$destroy', function() {
                elm.off('click', clickHandler);
                if (outsideToggleTarget) document.documentElement.removeEventListener('click', outsideClickHandler);
            })
        }
    }
});
;
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
