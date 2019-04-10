import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { GLOBAL } from './global';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Injectable()
export class PostsService {
  public url: string;
  

  constructor(
    private _http: HttpClient
  ){
    this.url = GLOBAL.url;
  }

  getPosts(): Observable<Post[]>{
    return this._http.get<Post[]>(this.url + 'posts')
                    .pipe(map((data: any) => data));
  }

  getPost(id){
    return this._http.get(this.url + 'posts/' + id)
                    .pipe(map((data: any) => data));
  }
}