describe('Users Repos', function(){   
  beforeEach(function(){
    module('code-star');
  });

  var _usersReposComparator;
  var _UserRepos;
  var _APP_CONSTANTS;
  beforeEach(inject(function(usersReposComparator, UserRepos, APP_CONSTANTS) {
    _usersReposComparator = usersReposComparator;
    _UserRepos = UserRepos;
    _APP_CONSTANTS = APP_CONSTANTS;
  }));

  it('Declares a winner', function(){
    ur1 = new _UserRepos();
    ur1.stats.sum = 10;
    ur1.username = "foo";
    ur1.repos = ["foo"];
    ur2 = new _UserRepos();
    ur2.stats.sum = 1;
    ur2.username = "bar";
    ur2.repos = ["bar"];

    _usersReposComparator.compare([ur1, ur2]);
    expect(ur1.status).toEqual(_APP_CONSTANTS.REPO_STATE.WIN);
    expect(ur2.status).toEqual(_APP_CONSTANTS.REPO_STATE.UNDETERMINED);
  }) 

  it('Declares a draw', function(){
    ur1 = new _UserRepos();
    ur1.stats.sum = 3;
    ur1.username = "foo";
    ur1.repos = ["foo"];
    ur2 = new _UserRepos();
    ur2.stats.sum = 3;
    ur2.username = "bar";
    ur2.repos = ["bar"];

    _usersReposComparator.compare([ur1, ur2]);
    expect(ur1.status).toEqual(_APP_CONSTANTS.REPO_STATE.DRAW);
    expect(ur1.status).toEqual(_APP_CONSTANTS.REPO_STATE.DRAW);
  }) 
})
