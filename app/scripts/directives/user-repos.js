angular.module('code-star.directives.user-repos', [

])
.directive("userRepos", function() {
  return {
    controller: 'UserReposController',
    templateUrl: 'directives/user-repos.tpl.html',
    controllerAs: 'userRepos',
    scope: {
      user: "="
    },
    bindToController: true
  }
})
.controller('UserReposController', function($timeout, $scope) {
  this.onUsernameChange = function(newVal, oldVal){
    this.user.fetchGithubData();
  }

})    