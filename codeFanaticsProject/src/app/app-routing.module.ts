import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './user/default/default.component';
import { EditQuestionsComponent } from './admin/edit-questions/edit-questions.component';

const routes: Routes = [
  { path: '/', component: DefaultComponent },
  { path: '/admin', component: EditQuestionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
