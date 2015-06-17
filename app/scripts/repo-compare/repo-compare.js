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