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

