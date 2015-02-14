var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

  $routeProvider
    .when('/', {
      templateUrl: 'js/home/homeTmpl.html',
      controller: 'HomeController',
      resolve: {
        allTeamData: function ($q, teamService) {
          var promises = [];
          var teams = ['utahjazz', 'miamiheat', 'losangeleslakers'];

          teams.forEach(function (teamName) {
            promises.push(teamService.getTeamData(teamName));
          });

          return $q.all(promises)
        }
      }
    })
    .when('/teams/:team', {
      templateUrl: 'js/teams/teamTmpl.html',
      controller: 'TeamController',
      resolve: {
        teamData: function ($route, teamService) {
          return teamService.getTeamData($route.current.params.team);
        }
      }
    })
    .otherwise({
      redirectTo: '/'
    });
});