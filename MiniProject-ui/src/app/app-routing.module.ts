import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatecontactComponent } from './create-contact/create-contact.component';
import { ContacteditComponent } from './contact-edit/contact-edit.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full' },
  { path: 'create-contact', component: CreatecontactComponent },
  { path: 'edit/id', component: ContacteditComponent },
  { path: 'contacts', component: ContactListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
