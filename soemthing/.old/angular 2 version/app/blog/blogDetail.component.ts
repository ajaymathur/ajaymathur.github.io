import {Component, OnInit} from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {BlogService} from './blog.service';

@Component({
    selector: 'blog-detail',
    template: `
        <div *ngIf='blog'>
            <h1>{{blog.heading}}</h1>
             <div [innerHTML]='blog.description'></div>
        </div>`,
    providers: [BlogService],
    styles: ["*{padding: 10px;line-height: 2.3rem}","p{font-size: 2rem}"]
})

export class BlogDetailComponent implements OnInit{
    blog:any = {
        description: ""
    };
    constructor(private blogService: BlogService,
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer){}
    ngOnInit(): void{
        this.route.params.forEach((param)=>{
            let id = +param['id'];
            this.blogService.getBlogWithId(--id).then((blog)=> {
                console.log(blog);
                this.blog.description = this.domSanitizer.bypassSecurityTrustHtml(blog.description);
                this.blog.heading = blog.heading;
            });
        })
    }
}