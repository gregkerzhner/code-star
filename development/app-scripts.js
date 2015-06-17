angular.module('code-star', [
  'ui.router',
  'ngCookies',
  'ngAnimate',
  'restangular',
  'code-star.templates',
  'code-star.config',
  'code-star.repo-compare',
  'code-star.directives.repo'
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
angular.module('code-star.repo-compare', [

])
.config(function ($locationProvider, $httpProvider, $stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('code-star.repo-compare', {
      url: "",
       views: {      
        'content': {
          templateUrl: 'repo-compare/repo-compare.tpl.html',
          controller: "RepoCompareController",
          controllerAs: 'repoCompareController'
        }        
      }
    });
})
.controller("RepoCompareController", function($scope, $timeout){
  this.usersForCompare = [
    {
      username: "",
      repos: []
    },
    {
      username: "",
      repos: []
    }
  ];
})