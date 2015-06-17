angular.module('code-star.models.user-repos', [

])

.factory('UserRepos', function(){
  var UserRepos = function(){
    this.username = "";
    this.repos = [];
  }


  return UserRepos;
});