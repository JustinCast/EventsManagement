import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddActivityComponent } from "./activity/add-activity/add-activity.component";
import { AdminRouting } from "./admin.routing";
import { ShowActivitiesComponent } from "./activity/show-activities/show-activities.component";
import { AddEventComponent } from "./event/add-event/add-event.component";
import { ShowEventsComponent } from "./event/show-events/show-events.component";
import { AdminRootComponent } from "./admin-root.component";
import { SharedModule } from "../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { EditEventDialogComponent } from "./event/edit-event-dialog/edit-event-dialog.component";
import { AddInstructorComponent } from "./instructor/add-instructor/add-instructor.component";
import { ShowInstructorsComponent } from "./instructor/show-instructors/show-instructors.component";
import { AddDegreeDialogComponent } from "./instructor/add-degree-dialog/add-degree-dialog.component";
import { ReminderComponent } from "./reminder/reminder.component";
import { EditActivityDialogComponent } from "./activity/edit-activity-dialog/edit-activity-dialog.component";

@NgModule({
  declarations: [
    AddActivityComponent,
    ShowActivitiesComponent,
    AddEventComponent,
    ShowEventsComponent,
    AdminRootComponent,
    EditEventDialogComponent,
    AddInstructorComponent,
    ShowInstructorsComponent,
    AddDegreeDialogComponent,
    ReminderComponent,
    EditActivityDialogComponent
  ],
  entryComponents: [
    EditEventDialogComponent,
    EditActivityDialogComponent,
    AddDegreeDialogComponent,
  ],
  imports: [CommonModule, AdminRouting, SharedModule, HttpClientModule],
  exports: [
    AdminRootComponent,
    EditEventDialogComponent,
    AddDegreeDialogComponent
  ]
})
export class AdminModule {}
