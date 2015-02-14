angular.module('nbaRoutes')
  .directive('nbaTeamData', function () {
    return {
      scope: {
        teamData: '='
      },
      templateUrl: 'js/home/teamDirectiveTemplate.html',
      restrict: 'E'
    }
  });