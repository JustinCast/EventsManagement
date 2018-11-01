import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatRippleModule
 } from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule
  ],
  declarations: []
})
export class SharedModule { }
