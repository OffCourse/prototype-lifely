app.controller('SubmittedController', function($scope) {
    $scope.liked = false;

    $scope.likeToggle = function() {
        $scope.liked = !$scope.liked
    };

    $scope.likeCount = function(liked) {
        return liked ? '8' : '7';
    };
});
