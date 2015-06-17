angular.module('code-star', [
  'ui.router',
  'ngCookies',
  'ngAnimate',
  'restangular',
  'code-star.templates',
  'code-star.config',
  'code-star.github-account-compare',
  'code-star.directives.user-repos',
  'code-star.models.user-repos'
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
.controller('UserReposController', function($timeout, $scope) {
  this.onUsernameChange = function(newVal, oldVal){
    console.log(newVal);
  }

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
.controller("GithubAccountCompareController", function(UserRepos){
  this.usersForCompare = [
    new UserRepos(), 
    new UserRepos()
  ];
})
angular.module('code-star.models.user-repos', [

])

.factory('UserRepos', function(){
  var UserRepos = function(){
    this.username = "";
    this.repos = [];
  }


  return UserRepos;
});