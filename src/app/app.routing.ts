import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Compoenents
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PostListComponent
  },
  {
    path: 'post/:id',
    component: PostComponent
  }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
