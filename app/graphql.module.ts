import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Apollo
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { NgrxCache } from 'apollo-angular-cache-ngrx';

const uri = 'https://graphql-voter-app.herokuapp.com/';

@NgModule({
  exports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ]
})
export class GraphQLModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink,
    ngrxCache: NgrxCache
  ) {
    // create Apollo
    apollo.create({
      link: httpLink.create({ uri }),
      cache: ngrxCache.create(),
    });
  }
}
