import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormComponent } from './form/form.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatIconModule,
    NavbarComponent,
    SidebarComponent,
    FormComponent,
    ModalComponent,
    MatButtonModule,
    MatDialogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
