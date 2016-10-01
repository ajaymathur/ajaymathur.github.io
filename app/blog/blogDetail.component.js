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
var BlogDetailComponent = (function () {
    function BlogDetailComponent(blogService, route) {
        this.blogService = blogService;
        this.route = route;
    }
    BlogDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (param) {
            var id = +param['id'];
            _this.blogService.getBlogWithId(--id).then(function (blog) { return _this.blog = blog; });
        });
    };
    BlogDetailComponent = __decorate([
        core_1.Component({
            selector: 'blog-detail',
            template: "\n        <div *ngIf='blog'>\n            <h1>{{blog.heading}}</h1>\n            <div [innerHTML]='blog.description'></div>\n        </div>",
            providers: [blog_service_1.BlogService]
        }), 
        __metadata('design:paramtypes', [blog_service_1.BlogService, router_1.ActivatedRoute])
    ], BlogDetailComponent);
    return BlogDetailComponent;
}());
exports.BlogDetailComponent = BlogDetailComponent;
//# sourceMappingURL=blogDetail.component.js.map