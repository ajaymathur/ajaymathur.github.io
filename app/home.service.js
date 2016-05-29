System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HomeService;
    return {
        setters:[],
        execute: function() {
            HomeService = (function () {
                function HomeService() {
                }
                HomeService.prototype.getCourses = function () {
                    return ["course1", "course2", "course3"];
                };
                return HomeService;
            }());
            exports_1("HomeService", HomeService);
        }
    }
});
//# sourceMappingURL=home.service.js.map