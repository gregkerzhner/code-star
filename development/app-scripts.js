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
  'angular-spinner',
  'code-star.models.users-repos-comparator'
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
      user: "=",
      onReposChange: '&'
    },
    bindToController: true
  }
})
.controller('UserReposController', function($timeout, $scope, spinner) {
  this.spinnerName = "userRepoSpinner"+$scope.$id;
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
.controller("GithubAccountCompareController", function(UserRepos, usersReposComparator){
  this.usersForCompare = [
    new UserRepos(), 
    new UserRepos()
  ];

  this.onReposChange = function(){
    usersReposComparator.compare(this.usersForCompare);
  }
})
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
angular.module('code-star.models.users-repos-comparator', [

])

.service('usersReposComparator', function(){
  this.compare = function(usersRepos){
    debugger
    _.each(usersRepos, function(userRepos){
      userRepos.status = "undetermined";
    })

    var max = _.max(usersRepos, function(userRepo){
        return userRepo.stats.sum
    });

    var winners = _.filter(usersRepos, function(userRepo){
        return (userRepo.stats.sum == max.stats.sum && userRepo.username != "")
    });

    if(winners.length > 1){
      _.each(winners, function(winner){
        winner.status = "draw";
      })
    }
    else if(winners.length == 1){
      winners[0].status = "winner";
    }
  }
});