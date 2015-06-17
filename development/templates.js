(function(module) {
try { module = angular.module("code-star.templates"); }
catch(err) { module = angular.module("code-star.templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("directives/repo.tpl.html",
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-12\">\n" +
    "    <input class=\"form-control input-lg\" placeholder=\"Github username\" ng-model=\"user.username\">\n" +
    "  </div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("code-star.templates"); }
catch(err) { module = angular.module("code-star.templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("repo-compare/repo-compare.tpl.html",
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-10 col-md-offset-1\">\n" +
    "    <h3>Hello</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div ng-repeat=\"user in repoCompareController.usersForCompare\" class=\"col-md-6\">\n" +
    "        <repo user=\"user\"></repo>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);
})();
