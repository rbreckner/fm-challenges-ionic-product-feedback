import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SuggestionsComponent} from './suggestions/suggestions.component';
import {SuggestionEmptyComponent} from './suggestions/suggestion-empty/suggestion-empty.component';
import {SuggestionItemComponent} from './suggestions/suggestion-item/suggestion-item.component';
import {SuggestionSortComponent} from './suggestions/suggestion-sort/suggestion-sort.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SuggestionsComponent,
    SuggestionEmptyComponent,
    SuggestionItemComponent,
    SuggestionSortComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
