import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { TechiesComponent } from './techies/techies.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GraphqlModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SubmissionsComponent,
    TechiesComponent,
    PagenotfoundComponent
  ],
  imports: [
    GraphqlModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
