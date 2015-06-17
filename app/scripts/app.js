angular.module('code-star', [
  
  'ui.router',
  
  'ngCookies',
  'ngAnimate',
  'code-star.templates',
  'code-star.config',
  'code-star.foo'
])
.config(function ($locationProvider, $httpProvider) {

}) 
.run(function($timeout, $rootScope, $location){
  alert('Your angular app is initialized.  Happy hacking!')
})

