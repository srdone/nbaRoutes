var app = angular.module('nbaRoutes');

app.controller('HomeController', function($scope, allTeamData, teamService) {

  $scope.allTeamData = [];

  allTeamData.forEach(function (teamGames) {
    var teamData = {};
    teamData.logoPath = teamService.teamDetails[teamGames[0].homeTeam].logo;
    teamData.homeTeam = teamService.teamDetails[teamGames[0].homeTeam].teamName;
    teamData.games = teamGames;

    $scope.allTeamData.push(teamData);
  });

  console.log(allTeamData);

});