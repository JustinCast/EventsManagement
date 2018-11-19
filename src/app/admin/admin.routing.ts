import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AdminRootComponent } from "./admin-root.component";
import { AddActivityComponent } from "./activity/add-activity/add-activity.component";
import { ShowActivitiesComponent } from "./activity/show-activities/show-activities.component";
import { AddEventComponent } from "./event/add-event/add-event.component";
import { ShowEventsComponent } from "./event/show-events/show-events.component";
import { AddInstructorComponent } from "./instructor/add-instructor/add-instructor.component";
import { ShowInstructorsComponent } from "./instructor/show-instructors/show-instructors.component";
import { ReminderComponent } from "./reminder/reminder.component";

const ROUTES: Routes = [
  {
    path: "admin",
    component: AdminRootComponent,
    children: [
      { path: "add-event", component: AddEventComponent },
      { path: "show-events", component: ShowEventsComponent },
      { path: "add-activity", component: AddActivityComponent },
      { path: "show-activities", component: ShowActivitiesComponent },
      { path: "add-instructor", component: AddInstructorComponent },
      { path: "show-instructors", component: ShowInstructorsComponent },
      { path: "reminder", component: ReminderComponent }
    ]
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
  declarations: []
})
export class AdminRouting {}
