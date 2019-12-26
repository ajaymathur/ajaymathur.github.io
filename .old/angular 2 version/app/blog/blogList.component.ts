import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {BlogService} from './blog.service';

@Component({
    selector: 'blog-list',
    template: `
        <ul>
            <li *ngFor="let blog of blogList" (click)="openBlog(blog.id)">
                <h2>{{blog.id}} : {{blog.heading}}</h2>
            </li>
        </ul>
    `,
    providers: [BlogService]
})

export class BlogListComponent implements OnInit{
    blogList;
    constructor(private blogservice: BlogService,
    private router: Router){}
    ngOnInit(){
        this.blogservice.getBlogs().then(blogs => this.blogList = blogs);
    }
    openBlog(id){
        let link = ['/blog',id]
        this.router.navigate(link)
        //alert(id);
    }
}