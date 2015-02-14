var app = angular.module('nbaRoutes');

app.controller('HomeController', function($scope, homeService){
  $scope.test = "Home Controller";
});