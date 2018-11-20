import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';
import { 
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatRippleModule,
  MatIconModule,
  MatSidenavModule,
  MatExpansionModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatDialogModule,
  MatListModule
 } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from "ngx-pagination";
@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressBarModule,
    NgxPaginationModule,
    MatDialogModule,
    MatListModule,
    QRCodeModule
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressBarModule,
    NgxPaginationModule,
    MatDialogModule,
    MatListModule,
    QRCodeModule
  ],
  declarations: []
})
export class SharedModule { }
