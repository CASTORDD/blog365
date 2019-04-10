import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../services/global';
import { PostsService } from '../../services/post.services';


@Component({
  selector: 'post-list',
  templateUrl: 'post-list.component.html',
  providers: [ PostsService ]
})

export class PostListComponent implements OnInit {

  public posts = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _postsService: PostsService
  ){
    
  }

  ngOnInit(){
    this._postsService.getPosts()
                      .subscribe( data => this.posts = data );
  }
}