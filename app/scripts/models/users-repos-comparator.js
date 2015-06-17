angular.module('code-star.models.users-repos-comparator', [

])

.service('usersReposComparator', function(APP_CONSTANTS){
  this.compare = function(usersRepos){
    _.each(usersRepos, function(userRepos){
      userRepos.status = APP_CONSTANTS.REPO_STATE.UNDETERMINED;
    })

    var max = _.max(usersRepos, function(userRepo){
        return userRepo.stats.sum
    });

    var winners = _.filter(usersRepos, function(userRepo){
        return (userRepo.stats.sum == max.stats.sum && userRepo.username != "" && userRepo.repos.length > 0)
    });

    if(winners.length > 1){
      _.each(winners, function(winner){
        winner.status = APP_CONSTANTS.REPO_STATE.DRAW;
      })
    }
    else if(winners.length == 1){
      winners[0].status = APP_CONSTANTS.REPO_STATE.WIN;
    }
  }
});