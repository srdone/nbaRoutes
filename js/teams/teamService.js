var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){

  this.addNewGame = function (gameObj) {
    var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;

    if (+gameObj.homeTeamScore > +gameObj.opponentScore) {
      gameObj.won = true;
    } else if (+gameObj.homeTeamScore <= +gameObj.opponentScore) {
      gameObj.won = false;
    }

    return $http.post(url, gameObj);
  };

  this.getTeamData = function (team) {
    var deferred = $q.defer();
    var url = 'https://api.parse.com/1/classes/' + team;

    $http.get(url)
      .success(function (response) {

        var results = response.results;

        var wins = 0;
        var losses = 0;

        results.forEach(function (game) {
          if(game.won === true) {
            wins++;
          } else if(game.won === false) {
            losses++;
          }
        });

        results.wins = wins;
        results.losses = losses;

        deferred.resolve(results);
      })
      .error(function (err) {
        deferred.reject(err);
      });

    return deferred.promise;
  }

  this.teamDetails = {
    utahjazz: {
      teamName: 'Utah Jazz',
      logo: './images/jazz-logo.png'
    },
    losangeleslakers: {
      teamName: 'Los Angeles Lakers',
      logo: './images/lakers-logo.png'
    },
    miamiheat: {
      teamName: 'Miami Heat',
      logo: './images/heat-logo.png'
    }
  };

});