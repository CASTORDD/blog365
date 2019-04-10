import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'; 

// import { GLOBAL } from '../../services/global';
import { PostsService } from '../../services/post.services';
import { Post } from '../../models/post';

@Component({
  selector: 'post',
  templateUrl: 'post.component.html',
  providers: [ PostsService ]
})

export class PostComponent implements OnInit {

  public post: Post;
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location,
    private _postsService: PostsService
  ){}

  ngOnInit(){
    this.getPost();
  }

  getPost(){
    this._route.params.forEach(( params: Params ) => {
      let id = params['id'];

      this._postsService.getPost( id )
                        .subscribe( data => this.post = data );
    });
  }

}