import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SuggestionsComponent} from './pages/suggestions/suggestions.component';
import {SuggestionsEmptyComponent} from './pages/suggestions/suggestions-empty/suggestions-empty.component';
import {ProductRequestCardComponent} from './shared/product-request-card/product-request-card.component';
import {SuggestionsSortComponent} from './pages/suggestions/suggestions-sort/suggestions-sort.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FeedbackDetailComponent} from './pages/feedback-detail/feedback-detail.component';
import {
  FeedbackDetailCommentComponent
} from './pages/feedback-detail/feedback-detail-comment/feedback-detail-comment.component';
import {
  FeedbackDetailAddCommentCardComponent
} from './pages/feedback-detail/feedback-detail-add-comment-card/feedback-detail-add-comment-card.component';
import {FeedbackFormComponent} from './pages/feedback-form/feedback-form.component';
import {RoadmapComponent} from './pages/roadmap/roadmap.component';
import {
  SuggestionsCategoryFilterCardComponent
} from './pages/suggestions/suggestions-category-filter-card/suggestions-category-filter-card.component';
import {
  SuggestionsRoadmapCardComponent
} from './pages/suggestions/suggestions-roadmap-card/suggestions-roadmap-card.component';
import {RoadmapColumnComponent} from './pages/roadmap/roadmap-column/roadmap-column.component';
import {
  FeedbackDetailAddReplyComponent
} from './pages/feedback-detail/feedback-detail-add-reply/feedback-detail-add-reply.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductRequestCardComponent,

    SuggestionsComponent,
    SuggestionsCategoryFilterCardComponent,
    SuggestionsEmptyComponent,
    SuggestionsSortComponent,

    FeedbackDetailComponent,
    FeedbackDetailCommentComponent,
    FeedbackDetailAddCommentCardComponent,

    FeedbackFormComponent,

    RoadmapComponent,
    SuggestionsRoadmapCardComponent,
    RoadmapColumnComponent,
    FeedbackDetailAddReplyComponent
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
