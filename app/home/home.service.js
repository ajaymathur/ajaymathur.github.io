System.register(['../../data/home/courseList.data', '../../data/home/courseDetail.data'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var courseList_data_1, courseDetail_data_1;
    var HomeService;
    return {
        setters:[
            function (courseList_data_1_1) {
                courseList_data_1 = courseList_data_1_1;
            },
            function (courseDetail_data_1_1) {
                courseDetail_data_1 = courseDetail_data_1_1;
            }],
        execute: function() {
            HomeService = (function () {
                function HomeService() {
                }
                HomeService.prototype.getCourses = function () {
                    return Promise.resolve(courseList_data_1.coursesList);
                };
                HomeService.prototype.getCourseDetail = function (courseId) {
                    return Promise.resolve(courseDetail_data_1.courseListDetail.filter(function (course) {
                        return course.id == courseId;
                    })[0]);
                };
                return HomeService;
            }());
            exports_1("HomeService", HomeService);
        }
    }
});
//# sourceMappingURL=home.service.js.map