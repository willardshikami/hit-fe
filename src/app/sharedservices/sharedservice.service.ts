import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  url = 'https://humansintech.herokuapp.com/';

  constructor(
    apollo: Apollo,
    httpLink: HttpLink,
  ) {
    apollo.create({
      link: httpLink.create({uri: this.url}),
      cache: new InMemoryCache
    });
   }
}
