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