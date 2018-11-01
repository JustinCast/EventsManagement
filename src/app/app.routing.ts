import { Routes } from "@angular/router";
import { HomeComponent } from "./general/home/home.component";
import { LoginComponent } from "./general/login/login.component";

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: LoginComponent, pathMatch: 'full' }
];