import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReservationDialogComponent } from './reservation-dialog/reservation-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [HomeComponent, LoginComponent, SignUpComponent, ReservationDialogComponent],
  exports: [
    HomeComponent,
    LoginComponent,
    SignUpComponent
  ]
})
export class GeneralModule { }
