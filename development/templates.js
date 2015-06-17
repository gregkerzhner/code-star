(function(module) {
try { module = angular.module("code-star.templates"); }
catch(err) { module = angular.module("code-star.templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("directives/user-repos.tpl.html",
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-12\">\n" +
    "    <input class=\"form-control input-lg\" placeholder=\"Github username\" ng-model=\"userRepos.userRepos.username\" ng-change=\"userRepos.onUsernameChange(userRepos.userRepos.username)\">\n" +
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
