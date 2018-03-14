//Scope https://docs.angularjs.org/guide/scope

var myApp = angular.module('scopeExample', [])
.controller('GreetController',['$scope', function($scope) {
  $scope.name = 'World';
}])
.controller('ListController',['$scope', function($scope) {
  $scope.names = ['Igor', 'Misko', 'Votja'];
  $scope.department = 'department';
}]);
