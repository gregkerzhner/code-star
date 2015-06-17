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
.constant("APP_CONSTANTS", {
  REPO_STATE: {
    WIN: "win",
    DRAW: "draw",
    UNDETERMINED: "undetermined"
  }
})
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

