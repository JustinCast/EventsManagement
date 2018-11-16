import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatRippleModule,
  MatIconModule,
  MatSidenavModule
 } from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    MatSidenavModule
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    MatSidenavModule
  ],
  declarations: []
})
export class SharedModule { }
