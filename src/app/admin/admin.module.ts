import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddActivityComponent } from "./Activity/add-activity/add-activity.component";
import { AdminRouting } from "./admin.routing";
import { ShowActivitiesComponent } from "./Activity/show-activities/show-activities.component";
import { AddEventComponent } from "./Event/add-event/add-event.component";
import { ShowEventsComponent } from "./Event/show-events/show-events.component";
import { AdminRootComponent } from "./admin-root.component";
import { SharedModule } from "../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { EditEventDialogComponent } from './Event/edit-event-dialog/edit-event-dialog.component';
import { AddInstructorComponent } from './Instructor/add-instructor/add-instructor.component';
import { ShowInstructorsComponent } from './Instructor/show-instructors/show-instructors.component';
import { AddDegreeDialogComponent } from "./Instructor/add-degree-dialog/add-degree-dialog.component";

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
    AddDegreeDialogComponent
  ],
  entryComponents: [
    EditEventDialogComponent,
    AddDegreeDialogComponent
  ],
  imports: [CommonModule, AdminRouting, SharedModule, HttpClientModule],
  exports: [AdminRootComponent, EditEventDialogComponent, AddDegreeDialogComponent]
})
export class AdminModule {}
