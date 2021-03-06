import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { NgrxCacheModule, apolloReducer } from 'apollo-angular-cache-ngrx';

import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { UpvoterComponent } from './upvoter.component';

// Apollo
import { GraphQLModule } from './graphql.module';

@NgModule({
  imports: [
    BrowserModule, 
    // Apollo
    GraphQLModule,
    StoreModule.forRoot({
      apollo: apolloReducer,
    }),
    NgrxCacheModule
  ],
  declarations: [
    AppComponent,
    ListComponent,
    UpvoterComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
