import {AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../recipe/post.model';
import {NgProgress, NgProgressComponent, NgProgressRef} from 'ngx-progressbar';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements AfterViewInit {

  isFetching = false;
  error: string;
  loadedPosts: Post[];

  @ViewChild(NgProgressComponent) progressBar: NgProgressComponent;

  constructor(private postService: PostService) {

  }

  onFetchPosts = () => {
    this.isFetching = true;
    this.progressBar.start();
    this.postService.fetchPosts().subscribe(posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
        this.progressBar.complete();
      }, error => {
        this.isFetching = false;
        this.error = error.message;
        this.progressBar.complete();
        console.log(error);
      }
    );
  }

  onClearPosts = () => {
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  ngAfterViewInit(): void {
    if (this.progressBar) {
      this.progressBar.color = 'red';
      this.progressBar.thick = true;
    }
  }

}
