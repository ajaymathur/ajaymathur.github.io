System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ConnectComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ConnectComponent = (function () {
                function ConnectComponent() {
                }
                ConnectComponent = __decorate([
                    core_1.Component({
                        template: "\n        <div id=\"page-about-me\">\n        <header>\n            <img id=\"cover-pic\" src=\"../../styles/images/about/cover.jpg\" alt=\"cover image of ajay narain mathur\"/>\n            <div id=\"social-link\">\n                <a href=\"https://github.com/ajaymathur\"><img alt=\"link ajay narain mathur's github profile\" src=\"../../styles/images/about/github.png\">\n                </a><a href=\"https://www.facebook.com/ajay.narainmathur\"><img alt=\"link ajay narain mathur's github profile\" src=\"../../styles/images/about/facebook.png\">\n                </a><a href=\"https://plus.google.com/+ajaynarainmathur/posts\"><img alt=\"link ajay narain mathur's github profile\" src=\"../../styles/images/about/google-plus.png\">\n                </a><a href=\"https://twitter.com/ajaynarainmath\"><img alt=\"link ajay narain mathur's github profile\" src=\"../../styles/images/about/twitter.png\">\n                </a>\n            </div>\n        </header>\n        <article>\n            <h1>About Me</h1>\n            <p>Friends call me AJ, so can you.</p>\n            <p>I love working on UI technology. The first web application that I built was using JSP and was for a friend as his college project.\n            I have worked with a lot of javascript frameworks. The first javascript framework that I used was Backbone JS, using which I built an\n            application to run on Motorola <a href=\"http://blog.barcoding.com/tag/home-depot-first-phone/\">first phone</a> \n            to be used by HOME DEPOT employees.</p>\n            <p>A friend of mine suggested me Angular JS. I tried it and loved it.</p>\n        </article>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConnectComponent);
                return ConnectComponent;
            }());
            exports_1("ConnectComponent", ConnectComponent);
        }
    }
});
//# sourceMappingURL=connect.component.js.map