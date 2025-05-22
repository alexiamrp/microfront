import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
