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
var blogList_data_1 = require('../blogData/blogList.data');
var blogDetail_data_1 = require('../blogData/blogDetail.data');
var BlogService = (function () {
    function BlogService() {
    }
    BlogService.prototype.getBlogs = function () {
        return Promise.resolve(blogList_data_1.blogList);
    };
    BlogService.prototype.getBlogWithId = function (id) {
        return Promise.resolve(blogDetail_data_1.BlogDetail[id]);
    };
    BlogService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BlogService);
    return BlogService;
}());
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map