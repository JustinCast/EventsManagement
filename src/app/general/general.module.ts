import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [HomeComponent, LoginComponent, SignUpComponent],
  exports: [
    HomeComponent,
    LoginComponent,
    SignUpComponent
  ],
  entryComponents: [
  ]
})
export class GeneralModule { }
