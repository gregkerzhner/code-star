// ---SPECS-------------------------

describe('code-star', function () {
  var scope,
    controller;
  
  beforeEach(function () {
    module('code-star');
  });

  describe('CodeStarController', function () {
    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller('CodeStarController', {
        '$scope': scope
      });
    }));
        
    it('sets the name', function () {
      scope.fooBar();
      expect(scope.foo).toBe('bar');
    });
  });
    
});
