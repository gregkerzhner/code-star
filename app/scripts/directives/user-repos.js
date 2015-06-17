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
  this.onUsernameChange = function(){
    var _this = this;
    spinner.start(this.spinnerName);
    this.message ="";
    this.user.fetchGithubData().then(function(results){
        spinner.stop(_this.spinnerName);
        if(_this.user.username == ""){
          _this.setDefaultMessage();
        }
        else if(results.length == 0){
          _this.message = "User has no repos"
        }
        
      }, function(err){
        if(err.status = 404){
          _this.message = "Could not find github user "+_this.user.username;
        }
        spinner.stop(_this.spinnerName);
      }
    );
  }

  this.setDefaultMessage = function(){
    this.message ="Please type a user above";
  }

  this.setDefaultMessage();
})    