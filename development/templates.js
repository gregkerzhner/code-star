(function(module) {
try { module = angular.module("code-star.templates"); }
catch(err) { module = angular.module("code-star.templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("directives/user-repos.tpl.html",
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-12\">\n" +
    "    <input class=\"form-control input-lg\" placeholder=\"Github username\" ng-model=\"userRepos.user.username\" ng-change=\"userRepos.onUsernameChange()\">\n" +
    "    <table class=\"table table-striped\">\n" +
    "      <thead>\n" +
    "        <tr>\n" +
    "          <th>#</th>\n" +
    "          <th>Repo</th>\n" +
    "          <th>Stars</th>\n" +
    "        </tr>\n" +
    "      </thead>\n" +
    "      <tbody>\n" +
    "        <tr ng-repeat=\"repo in userRepos.user.repos\">\n" +
    "          <th scope=\"row\">{{$index+1}}</th>\n" +
    "          <td><a ng-href=\"{{repo.url}}\" target=\"_blank\">{{repo.name}}</a></td>\n" +
    "          <td>{{repo.stargazers_count}}</td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "    </table>\n" +
    "  </div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("code-star.templates"); }
catch(err) { module = angular.module("code-star.templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("github-account-compare/github-account-compare.tpl.html",
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-10 col-md-offset-1\">\n" +
    "    <h3>Hello</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div ng-repeat=\"userRepos in githubAccountCompare.usersForCompare\" class=\"col-md-6\">\n" +
    "        <user-repos user=\"userRepos\"></user-repos>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);
})();
