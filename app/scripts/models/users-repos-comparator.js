angular.module('code-star.models.users-repos-comparator', [

])

.service('usersReposComparator', function(){
  this.compare = function(usersRepos){
    debugger
    _.each(usersRepos, function(userRepos){
      userRepos.status = "undetermined";
    })

    var max = _.max(usersRepos, function(userRepo){
        return userRepo.stats.sum
    });

    var winners = _.filter(usersRepos, function(userRepo){
        return (userRepo.stats.sum == max.stats.sum && userRepo.username != "")
    });

    if(winners.length > 1){
      _.each(winners, function(winner){
        winner.status = "draw";
      })
    }
    else if(winners.length == 1){
      winners[0].status = "winner";
    }
  }
});