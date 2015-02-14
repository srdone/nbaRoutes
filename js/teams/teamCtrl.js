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
    $scope.newGame.homeTeam = $routeParams.team;
    teamService.addNewGame($scope.newGame).then(function (response) {
      debugger;
      teamService.getTeamData($routeParams.team).then(function (newTeamData) {
        debugger;
        $scope.teamData = newTeamData;
        $scope.newGame = {};
        $scope.showNewGameForm = false;
      })
    });
  };

  console.log($scope);

});