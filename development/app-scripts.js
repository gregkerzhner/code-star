angular.module('code-star', [
  'ui.router',
  'ngCookies',
  'ngAnimate',
  'restangular',
  'code-star.templates',
  'code-star.config',
  'code-star.github-account-compare',
  'code-star.directives.user-repos',
  'code-star.models.user-repos',
  'angular-spinner'
])
.config(function ($locationProvider, $httpProvider, $stateProvider) {
  $stateProvider
    .state('code-star', {
      abstract: true,
      url: '',
      views: {        
        'content': {
          template: '<div ui-view="content"></div>'
        }
      }
    });

}) 
.run(function($timeout, $rootScope, $location, Restangular){
  Restangular.setBaseUrl('https://api.github.com');
})


angular.module("code-star.config", [])

.constant("ENV", {})

;
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
angular.module('code-star.github-account-compare', [

])
.config(function ($locationProvider, $httpProvider, $stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('code-star.github-account-compare', {
      url: "",
       views: {      
        'content': {
          templateUrl: 'github-account-compare/github-account-compare.tpl.html',
          controller: "GithubAccountCompareController",
          controllerAs: 'githubAccountCompare'
        }        
      }
    });
})
.controller("GithubAccountCompareController", function(UserRepos){
  this.usersForCompare = [
    new UserRepos(), 
    new UserRepos()
  ];
})