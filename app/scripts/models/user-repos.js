angular.module('code-star.models.user-repos', [

])

.factory('UserRepos', function(Restangular, $q, $timeout){
  var UserRepos = function(){
    this.username = "";
    this.repos = [];
  }


  UserRepos.prototype.fetchGithubData = function(){
    var _this = this;
    var deferred = $q.defer();

    if(this.username && this.username != ""){
      var url = 'users/'+this.username + '/repos';
      Restangular.all(url).getList()
      .then(function(repos) {
        console.log(repos);
        _this.repos = repos;
        deferred.resolve(_this.repos);
      }, function(err){
        deferred.reject(err);
      })
    }
    else {
      _this.repos = [];
      $timeout(function(){
        deferred.resolve(_this.repos);
      })
    }
    return deferred.promise;
  }

  UserRepos.prototype.stats = function(){
    var stats = {};
    if(this.repos && this.repos.length > 0){
      stats.mean = _.reduce(this.repos, function(sum, repo) {
        sum + repo.stargazers_count
      }, 0) / this.repos.length
    }
  }

  return UserRepos;
});