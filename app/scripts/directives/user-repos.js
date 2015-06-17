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
.controller('UserReposController', function($timeout, $scope, spinner) {
  this.spinnerName = "userRepoSpinner"+$scope.$id;
  this.message ="Please type a user above.";
  this.onUsernameChange = function(newVal, oldVal){
    var _this = this;
    spinner.start(this.spinnerName);
    this.message ="";
    this.user.fetchGithubData().then(function(){
      spinner.stop(_this.spinnerName);
    }, function(err){
      if(err.status = 404){
        _this.message = "Could not find github user "+_this.user.username;
      }
      spinner.stop(_this.spinnerName);
    })
  }
})    