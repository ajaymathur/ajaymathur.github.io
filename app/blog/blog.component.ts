import {Component, OnInit} from 'angular2/core'
import {BlogService} from './blog.service'
@Component({
    template:`
        <h2>Blogs</h2>
        <div *ngIf="startProduction">
            <div *ngFor="#blog of blogs">
                <h3>{{blog.heading}}</h3>
                <p>{{blog.intro}}</p>
                <p (click)=pullBlog(blog.id)>(read more)</p>
            </div>
        </div>
        <div *ngIf="!startProduction">
            Under Development
        </div>
    `,
    providers:[BlogService]
})

export class BlogComponent{
    blogs: any;
    constructor(private blogservice : BlogService){
        
    }
    ngOnInit(){
        this.getBlogs();
    }
    getBlogs(){
        this.blogservice.getBlogs().then(blogs => {console.log(blogs); this.blogs = blogs})
    }
    pullBlog(id){
        console.log(id);
    }
}