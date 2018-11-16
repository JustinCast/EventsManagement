import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AdminRootComponent } from "./admin-root.component";
import { AddActivityComponent } from "./Activity/add-activity/add-activity.component";
import { ShowActivitiesComponent } from "./Activity/show-activities/show-activities.component";
import { AddEventComponent } from "./Event/add-event/add-event.component";
import { ShowEventsComponent } from "./Event/show-events/show-events.component";

const ROUTES: Routes = [
  {
    path: "admin",
    component: AdminRootComponent,
    children: [
      { path: "add-event", component: AddEventComponent },
      { path: "show-events", component: ShowEventsComponent },
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
