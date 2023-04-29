import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {SuggestionsComponent} from './pages/suggestions/suggestions.component';
import {FeedbackDetailComponent} from './pages/feedback-detail/feedback-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SuggestionsComponent
  },
  {
    path: 'feedback-detail/:id',
    component: FeedbackDetailComponent
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
