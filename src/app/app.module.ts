import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SuggestionsComponent} from './pages/suggestions/suggestions.component';
import {SuggestionEmptyComponent} from './pages/suggestions/suggestion-empty/suggestion-empty.component';
import {ProductRequestCardComponent} from './shared/product-request-card/product-request-card.component';
import {SuggestionSortComponent} from './pages/suggestions/suggestion-sort/suggestion-sort.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FeedbackDetailComponent} from './pages/feedback-detail/feedback-detail.component';
import {
  FeedbackDetailCommentComponent
} from './pages/feedback-detail/feedback-detail-comment/feedback-detail-comment.component';
import {
  FeedbackDetailAddCommentCardComponent
} from './pages/feedback-detail/feedback-detail-add-comment-card/feedback-detail-add-comment-card.component';
import {FeedbackFormComponent} from './pages/feedback-form/feedback-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductRequestCardComponent,

    SuggestionsComponent,
    SuggestionEmptyComponent,
    SuggestionSortComponent,

    FeedbackDetailComponent,
    FeedbackDetailCommentComponent,
    FeedbackDetailAddCommentCardComponent,

    FeedbackFormComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
