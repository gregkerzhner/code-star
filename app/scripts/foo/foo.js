angular.module('code-star.foo', [

])
.config(function ($locationProvider, $httpProvider) {

})

.controller('CodeStarController', function($scope) {
  $scope.foo;
  $scope.fooBar = function(){
    $scope.foo = 'bar';
  }
})  