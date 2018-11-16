import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AdminRootComponent } from "./admin-root.component";
import { AddActivityComponent } from "./Activity/add-activity/add-activity.component";
import { ShowActivitiesComponent } from "./Activity/show-activities/show-activities.component";

const ROUTES: Routes = [
  {
    path: "admin",
    component: AdminRootComponent,
    children: [
      { path: "add-activity", component: AddActivityComponent },
      { path: "show-activities", component: ShowActivitiesComponent },
    ]
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
  declarations: []
})
export class AdminRouting {}
