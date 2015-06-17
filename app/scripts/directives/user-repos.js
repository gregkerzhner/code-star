angular.module('code-star.directives.user-repos', [

])
.directive("userRepos", function() {
  return {
    controller: 'UserReposController',
    templateUrl: 'directives/user-repos.tpl.html',
    controllerAs: 'userRepos',
    scope: {
      user: "=",
      onReposChange: '&'
    },
    bindToController: true
  }
})
.controller('UserReposController', function($timeout, $scope, spinner, APP_CONSTANTS) {
  this.spinnerName = "userRepoSpinner"+$scope.$id;
  this.APP_CONSTANTS = APP_CONSTANTS;
  this.onUsernameChange = function(){
    var _this = this;
    spinner.start(this.spinnerName);
    this.message = "";
    this.user.fetchGithubData().then(function(results){
        if(_this.user.username == ""){
          _this.setDefaultMessage();
        }
        else if(results.length == 0){
          _this.message = "User has no repos"
        }
        _this.onReposChange();    
        spinner.stop(_this.spinnerName);    
      }, function(err){
        if(err.status = 404){
          _this.message = "Could not find github user "+_this.user.username;
        }
        _this.onReposChange(); 
        spinner.stop(_this.spinnerName);
      }
    );
  }

  this.setDefaultMessage = function(){
    this.message ="Please type a user above";
  }

  this.setDefaultMessage();
})    