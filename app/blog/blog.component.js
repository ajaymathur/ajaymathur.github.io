System.register(['angular2/core', './blog.service'], function(exports_1, context_1) {
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
    var core_1, blog_service_1;
    var BlogComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (blog_service_1_1) {
                blog_service_1 = blog_service_1_1;
            }],
        execute: function() {
            BlogComponent = (function () {
                function BlogComponent(blogservice) {
                    this.blogservice = blogservice;
                }
                BlogComponent.prototype.ngOnInit = function () {
                    this.getBlogs();
                };
                BlogComponent.prototype.getBlogs = function () {
                    var _this = this;
                    this.blogservice.getBlogs().then(function (blogs) { console.log(blogs); _this.blogs = blogs; });
                };
                BlogComponent.prototype.pullBlog = function (id) {
                    console.log(id);
                };
                BlogComponent = __decorate([
                    core_1.Component({
                        template: "\n        <h2>Blogs</h2>\n        <div *ngIf=\"startProduction\">\n            <div *ngFor=\"#blog of blogs\">\n                <h3>{{blog.heading}}</h3>\n                <p>{{blog.intro}}</p>\n                <p (click)=pullBlog(blog.id)>(read more)</p>\n            </div>\n        </div>\n        <div *ngIf=\"!startProduction\">\n            Under Development\n        </div>\n    ",
                        providers: [blog_service_1.BlogService]
                    }), 
                    __metadata('design:paramtypes', [blog_service_1.BlogService])
                ], BlogComponent);
                return BlogComponent;
            }());
            exports_1("BlogComponent", BlogComponent);
        }
    }
});
//# sourceMappingURL=blog.component.js.map