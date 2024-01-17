import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookItemsComponent } from './book-items/book-items.component';

const routes: Routes = [
  {
    path:'book',
    component: BookItemsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
