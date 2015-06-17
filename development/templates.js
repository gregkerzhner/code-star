(function(module) {
try { module = angular.module("code-star.templates"); }
catch(err) { module = angular.module("code-star.templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("repo-compare/repo-compare.tpl.html",
    "");
}]);
})();
