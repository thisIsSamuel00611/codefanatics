import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './user/default/default.component';
import { EditQuestionsComponent } from './admin/edit-questions/edit-questions.component';
import { GameAreaComponent } from './gameplay/game-area/game-area.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    EditQuestionsComponent,
    GameAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
