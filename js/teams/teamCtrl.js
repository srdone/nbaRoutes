var app = angular.module('nbaRoutes');

app.controller('TeamController', function($scope, $routeParams, teamService, teamData) {

  $scope.teamData = teamData;

  $scope.newGame = {};
  $scope.showNewGameForm = false;

  $scope.toggleNewGameForm = function () {
    $scope.showNewGameForm = !$scope.showNewGameForm;
  };

  $scope.logoPath = teamService.teamDetails[$routeParams.team].logo;
  $scope.homeTeam = teamService.teamDetails[$routeParams.team].teamName;

  $scope.submitGame = function() {
    teamService.addNewGame($scope.newGame).then(function () {
      teamService.getTeamData($routeParams.team).then(function (newTeamData) {
        $scope.teamData = newTeamData;
        $scope.newGame = {};
        $scope.showNewGameForm = false;
      })
    });
  };

  console.log($scope);

});