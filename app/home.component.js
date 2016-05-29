System.register(['angular2/core', './home.service', './auto-grow.directive'], function(exports_1, context_1) {
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
    var core_1, home_service_1, auto_grow_directive_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_service_1_1) {
                home_service_1 = home_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(couseService) {
                    this.coursesList = couseService.getCourses();
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "\n        <h3>Heading in courses</h3>\n        <input type=\"text\" autoGrow />\n        <ul>\n            <li *ngFor=\"#course of coursesList\">\n                {{course}}\n            </li>\n        </ul>\n    ",
                        providers: [home_service_1.HomeService],
                        directives: [auto_grow_directive_1.AutoGrow]
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