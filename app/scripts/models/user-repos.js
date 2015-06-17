angular.module('code-star.models.user-repos', [

])

.factory('UserRepos', function(Restangular, $q, $timeout){
  var UserRepos = function(){
    this.username = "";
    this.reset();
  }

  UserRepos.prototype.reset = function(){
    this.repos = [];
    this.stats = {sum: 0, mean: 0};
    this.status = "undetermined";
  }

  UserRepos.prototype.fetchGithubData = function(){
    var _this = this;
    var deferred = $q.defer();

    if(this.username && this.username != ""){
      var url = 'users/'+this.username + '/repos';
      Restangular.all(url).getList()
      .then(function(repos) {
        _this.repos = repos;
        _this.calculateStats();
        deferred.resolve(_this.repos);
      }, function(err){
        _this.reset();
        deferred.reject(err);
      })
    }
    else {
      this.reset();
      $timeout(function(){
        deferred.resolve(_this.repos);
      })
    }
    return deferred.promise;
  }

  UserRepos.prototype.calculateStats = function(){
    this.stats = {sum: 0, mean: 0};
    if(this.repos && this.repos.length > 0){
      var _this = this;
      _.each(this.repos, function(repo){
        _this.stats.sum += repo.stargazers_count;
      })
      this.stats.mean = _this.stats.sum/this.repos.length;
    }
  }

  return UserRepos;
});