import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ReservationsDialogComponent } from "./reservations-dialog/reservations-dialog.component";

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ReservationsDialogComponent
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ReservationsDialogComponent
  ],
  entryComponents: [ReservationsDialogComponent]
})
export class GeneralModule {}
