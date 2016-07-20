System.register(['angular2/core', './home.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, home_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_service_1_1) {
                home_service_1 = home_service_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(courseService) {
                    this.courseService = courseService;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this.getCourses();
                };
                HomeComponent.prototype.getCourses = function () {
                    var _this = this;
                    this.courseService.getCourses().then(function (courses) { _this.coursesList = courses; });
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "\n        <h2>Heading in courses</h2>\n        <div class=\"search\">\n            <input type=\"search\"/>\n        </div>\n        <div class=\"course-list\">\n            <div class=\"course-list-item\" *ngFor=\"#course of coursesList\">\n                <div class=\"course-list-item-image\">\n                    <img src=\"../../styles/images/home/1.png\"/>\n                </div>\n                <div class=\"course-list-item-description\">\n                    <h3>{{course.heading}}</h3>\n                    <div>{{course.hint}}</div>\n                    <div class=\"course-list-item-description-tags\">\n                        <ul>\n                            <li *ngFor=\"#tag of course.tags\">{{tag}}</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
                        providers: [home_service_1.HomeService]
                    }), 
                    __metadata('design:paramtypes', [home_service_1.HomeService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map