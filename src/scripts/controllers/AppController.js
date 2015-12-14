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


