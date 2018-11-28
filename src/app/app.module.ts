import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { TechiesComponent } from './techies/techies.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SubmissionsComponent,
    TechiesComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink,
  ) {
    apollo.create({
      link: httpLink.create({uri: ''}),
      cache: new InMemoryCache
    });
   }
}
