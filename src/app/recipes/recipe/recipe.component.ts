import { Component, OnInit } from '@angular/core';
import {Post} from './post.model';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onCreatePost = (postData: Post) => {
    for (let i = 0; i < 20; i++) {
      this.postService.createAndStorePost(postData);
    }
  }

}
