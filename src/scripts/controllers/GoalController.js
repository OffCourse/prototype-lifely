app.controller('GoalController', function($scope, GoalsConstant, $state) {
    $scope.expanded = false;
    $scope.cardActive = true;

    var currentGoalIndex = parseInt($state.params.goal);
    $scope.goal = GoalsConstant[currentGoalIndex];

    $scope.toggleCard = function() {
        $scope.cardActive = !$scope.cardActive;
    }
});
