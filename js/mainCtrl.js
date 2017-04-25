angular.module('app').controller('mainCtrl', function ($scope, dataService) {
    // $scope.qadd = 'Nothing';
    // $scope.aadd = 'Anonymous';
    $scope.quotes = dataService.getQuotes();
    $scope.delete = dataService.delete;
    $scope.add = dataService.add;
})