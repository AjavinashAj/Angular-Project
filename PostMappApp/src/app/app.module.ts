import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { ContactService } from './contact.service';
import { Contact1Component } from './contact1/contact1.component';
@NgModule({
  declarations: [
    AppComponent,
    Contact1Component
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
