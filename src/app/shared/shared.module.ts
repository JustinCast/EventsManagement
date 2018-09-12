import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatInputModule,
  MatCardModule,
  MatButtonModule
 } from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: []
})
export class SharedModule { }
