import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { JokeListComponent } from './components/jokes/joke-list/joke-list.component';
import { JokeFormComponent } from './components/jokes/joke-form/joke-form.component';
import { JokeCardComponent } from './components/jokes/joke-card/joke-card.component';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent,
    JokeListComponent,
    JokeFormComponent,
    JokeCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
