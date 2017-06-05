import {Injectable} from '@angular/core';
import {IBlogList, blogList} from '../blogData/blogList.data';
import {IBlogDetail, BlogDetail} from '../blogData/blogDetail.data';

@Injectable()
export class BlogService{
    getBlogs(): Promise<IBlogList[]>{
        return Promise.resolve(blogList);
    }
    getBlogWithId(id): Promise<IBlogDetail>{
        return Promise.resolve(BlogDetail[id])
    }
}