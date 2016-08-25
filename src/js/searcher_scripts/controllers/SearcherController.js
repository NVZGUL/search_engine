search_app.controller('SearcherController',['$scope', function ($scope) {
    $scope.currencyVal;

    //clean up text in input tag
    $scope.clean = function () {
        $scope.inputText = "";
    };
}]);

search_app.controller('SearcherController1',['$scope', function ($scope) {
    $scope.currencyVal1;

    //clean up text in input tag
    $scope.clean = function () {
        $scope.inputText1 = "";
    };
}]);