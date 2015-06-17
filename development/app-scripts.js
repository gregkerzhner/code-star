angular.module('code-star', [
  'ui.router',
  'ngCookies',
  'ngAnimate',
  'restangular',
  'code-star.templates',
  'code-star.config',
  'code-star.repo-compare'
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
angular.module('code-star.repo-compare', [

])
.config(function ($locationProvider, $httpProvider, $stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('code-star.repo-compare', {
      url: "",
       views: {      
        'content': {
          templateUrl: 'repo-compare/repo-compare.tpl.html',
          controller: "RepoCompareController"
        }        
      }
    })
  ;

})

.controller("RepoCompareController", function($scope,$timeout){
  
})