import {Component, OnInit} from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {BlogService} from './blog.service';

@Component({
    selector: 'blog-detail',
    template: `
        <div *ngIf='blog'>
            <h1>{{blog.heading}}</h1>
            <div [innerHTML]='blog.description'></div>
        </div>`,
    providers: [BlogService]
})

export class BlogDetailComponent implements OnInit{
    blog;
    constructor(private blogService: BlogService,
    private route: ActivatedRoute){}
    ngOnInit(): void{
        this.route.params.forEach((param)=>{
            let id = +param['id'];
            this.blogService.getBlogWithId(--id).then((blog)=> this.blog = blog);
        })
    }
}