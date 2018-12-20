import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-techies',
  templateUrl: './techies.component.html',
  styleUrls: ['./techies.component.css']
})
export class TechiesComponent implements OnInit {

  techies: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
    .watchQuery({
      query: gql`
      {
        techies{
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
    .valueChanges.subscribe(result => {
      this.techies = result.data && result.data['techies'];
      this.loading = result.loading;
      this.error = result.errors;
    });
  }


}
