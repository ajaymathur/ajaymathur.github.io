System.register(['../../data/home/courseList.data'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var courseList_data_1;
    var HomeService;
    return {
        setters:[
            function (courseList_data_1_1) {
                courseList_data_1 = courseList_data_1_1;
            }],
        execute: function() {
            HomeService = (function () {
                function HomeService() {
                }
                HomeService.prototype.getCourses = function () {
                    return Promise.resolve(courseList_data_1.coursesList);
                };
                return HomeService;
            }());
            exports_1("HomeService", HomeService);
        }
    }
});
//# sourceMappingURL=home.service.js.map