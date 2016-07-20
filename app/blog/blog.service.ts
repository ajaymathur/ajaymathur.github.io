import { Injectable } from 'angular2/core';
import {blogs} from '../data/blog.data'

@Injectable()
export class BlogService{
    getBlogs(){
        return Promise.resolve(blogs);
    }
}