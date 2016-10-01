"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var blog_service_1 = require('./blog.service');
var BlogListComponent = (function () {
    function BlogListComponent(blogservice, router) {
        this.blogservice = blogservice;
        this.router = router;
    }
    BlogListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogservice.getBlogs().then(function (blogs) { return _this.blogList = blogs; });
    };
    BlogListComponent.prototype.openBlog = function (id) {
        var link = ['/blog', id];
        this.router.navigate(link);
        //alert(id);
    };
    BlogListComponent = __decorate([
        core_1.Component({
            selector: 'blog-list',
            template: "\n        <ul>\n            <li *ngFor=\"let blog of blogList\" (click)=\"openBlog(blog.id)\">\n                <h2>{{blog.id}} : {{blog.heading}}</h2>\n            </li>\n        </ul>\n    ",
            providers: [blog_service_1.BlogService]
        }), 
        __metadata('design:paramtypes', [blog_service_1.BlogService, router_1.Router])
    ], BlogListComponent);
    return BlogListComponent;
}());
exports.BlogListComponent = BlogListComponent;
//# sourceMappingURL=blogList.component.js.map