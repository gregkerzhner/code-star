angular.module('code-star.models.user-repos', [

])

.factory('UserRepos', function(Restangular, $q){
  var UserRepos = function(){
    this.username = "";
    this.repos = [];
  }


  UserRepos.prototype.fetchGithubData = function(){
    var url = 'users/'+this.username + '/repos';
    var _this = this;
    var deferred = $q.defer();

    Restangular.all(url).getList()  // GET: /users
    .then(function(repos) {
      console.log(repos);
      _this.repos = repos;
      deferred.resolve({});
    }, function(err){
      deferred.reject(err);
    })

    return deferred.promise;
  }

  return UserRepos;
});