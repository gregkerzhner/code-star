describe('User Repos', function(){   
  beforeEach(function(){
    module('code-star');
  });

  var _UserRepos;
  var _$httpBackend;
  var _$rootScope;
  describe('Successful fetch', function(){
    var _userRepos;
    beforeEach(inject(function(UserRepos, $httpBackend, $rootScope){
      _UserRepos = UserRepos;
      _$httpBackend = $httpBackend;
      _$rootScope = $rootScope;
      var response = [{name: 'testy', stargazers_count: 10}, {name: 'zesty', stargazers_count: 30}];
      var handler = _$httpBackend.when('GET', 'https://api.github.com/users/foo/repos').respond(response);
      _$httpBackend.expectGET('https://api.github.com/users/foo/repos');

      _userRepos = new _UserRepos();
      _userRepos.username = "foo";
      _userRepos.fetchGithubData();

      _$httpBackend.flush();
      _$rootScope.$digest();
    }));

    it('Fetches repos', function(){
      expect(_userRepos.repos.length).toEqual(2);
      expect(_userRepos.repos[0].name).toEqual('testy');
      expect(_userRepos.repos[1].name).toEqual('zesty');
    }) 


    it('Calculates stats on response', function(){
      expect(_userRepos.stats.sum).toEqual(40);
      expect(_userRepos.stats.mean).toEqual(20);
    }) 
  })
})
