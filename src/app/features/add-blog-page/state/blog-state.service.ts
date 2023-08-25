import { Injectable } from '@angular/core';
import { BlogDataService, CreatedBlog } from '../../../core/blog-data.service';
import { Router } from '@angular/router';
import { LoadingService } from '../../../core/loading-service';
import { BehaviorSubject } from 'rxjs';

type BlogState = {
  error?: string;
};

@Injectable({
  providedIn: 'root',
})
export class BlogStateService {
  #state = new BehaviorSubject<BlogState>({ error: undefined });
  state$ = this.#state.asObservable();

  constructor(
    private blogService: BlogDataService,
    private router: Router,
    private loadingState: LoadingService
  ) {}

  async addBlog(blog: CreatedBlog) {
    this.#state.next({ error: undefined });
    this.loadingState.setLoadingState(true);
    try {
      await this.blogService.addblog(blog);
      this.router.navigate(['/overview']);
    } catch (e) {
      this.#state.next({
        error: (e as Error).message,
      });
    } finally {
      this.loadingState.setLoadingState(false);
    }
  }
}
