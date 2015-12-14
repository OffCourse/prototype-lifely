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
