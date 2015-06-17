angular.module('code-star.directives.repo', [

])
.directive("repo", function() {
  return {
    controller: 'RepoController',
    templateUrl: 'directives/repo.tpl.html',
    controllerAs: 'repo',
    scope: {
      user: "="
    }
  }
})
.controller('RepoController', function($timeout, $scope) {
  this.onUsernameChange = function(newVal, oldVal){
    console.log(newVal);
  }

  $scope.$watch('this.user.username', this.onUsernameChange);
})    