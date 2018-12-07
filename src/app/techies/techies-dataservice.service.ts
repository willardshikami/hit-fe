import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';

import { Techie } from '../interface/techie';
import { Techies } from '../interface/techies';


@Injectable({
  providedIn: 'root'
})
export class TechiesDataserviceService {

  techielist: Observable<Techie[]>;

  constructor(private apollo: Apollo) { }

  techiesList() {
    this.techielist = this.apollo.watchQuery<Techies>({
      query: gql`
        query allTechies{
          techies {
            id
            name
            bio
            about
            img
            stack
            current_role
            years_in_tech
            twitter
            instagram
            linkedin
            github
            website
          }
        }
      `
    })
    .valueChanges
    .pipe(
      map(results => results.data.techiesList)
    );
  }
}
