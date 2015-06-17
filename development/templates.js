(function(module) {
try { module = angular.module("code-star.templates"); }
catch(err) { module = angular.module("code-star.templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("directives/user-repos.tpl.html",
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-12\">\n" +
    "    <input class=\"form-control input-lg\" placeholder=\"Github username\" ng-model=\"userRepos.user.username\" ng-change=\"userRepos.onUsernameChange()\" ng-model-options='{ debounce: 500 }'>\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-striped\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th class=\"col-md-2\"></th>\n" +
    "            <th class=\"col-md-8\">Repo</th>\n" +
    "            <th class=\"col-md-2\">Stars</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "    <div spinner spinner-name=\"userRepos.spinnerName\" background-class=\"opaque\">\n" +
    "      <div class=\"bodycontainer scrollable\">\n" +
    "        <table class=\"table table-hover table-striped table-condensed table-scrollable\">\n" +
    "          <tbody>\n" +
    "            <tr ng-repeat=\"repo in userRepos.user.repos | orderBy : '-stargazers_count'\">\n" +
    "              <th scope=\"row\" class=\"col-md-2\">{{$index+1}}</th>\n" +
    "              <td class=\"col-md-8\"><a ng-href=\"{{repo.url}}\" target=\"_blank\">{{repo.name}}</a></td>\n" +
    "              <td class=\"col-md-2\">{{repo.stargazers_count}}</td>\n" +
    "            </tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "      </div>\n" +
    "      <div class=\"row padding-top-10\" ng-show=\"userRepos.user.repos.length > 0\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "              <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span> Average stars: {{userRepos.user.stats.mean | number: 1}}\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "              <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span> Total stars: {{userRepos.user.stats.sum}}\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row padding-top-10\" ng-show=\"userRepos.user.status != 'undetermined'\">\n" +
    "      <div class=\"col-md-12\">\n" +
    "        <div class=\"alert\" role=\"alert\" ng-class=\"{'alert-success': userRepos.user.status == 'winner', 'alert-info': userRepos.user.status == 'draw'}\">{{userRepos.user.status == 'winner' ? 'Winner' : 'Its a draw!'}}</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-12\">\n" +
    "        <h5 class=\"text-center\">{{userRepos.message}}</h5>\n" +
    "      </div>\n" +
    "    </div>\n" +
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
    "    <h3 class=\"text-center\">Code Star</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div ng-repeat=\"userRepos in githubAccountCompare.usersForCompare\" class=\"col-md-6\">\n" +
    "        <user-repos user=\"userRepos\" on-repos-change=\"githubAccountCompare.onReposChange()\"></user-repos>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);
})();
