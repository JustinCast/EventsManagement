import { Routes } from "@angular/router";
import { HomeComponent } from "./general/home/home.component";
import { LoginComponent } from "./general/login/login.component";
import { SignUpComponent } from "./general/sign-up/sign-up.component";

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'signup', component: SignUpComponent },
    { path: '', component: LoginComponent, pathMatch: 'full' }
];