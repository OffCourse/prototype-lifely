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
