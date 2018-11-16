import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddActivityComponent } from "./Activity/add-activity/add-activity.component";
import { AdminRouting } from "./admin.routing";
import { ShowActivitiesComponent } from "./Activity/show-activities/show-activities.component";
import { AddEventComponent } from "./Event/add-event/add-event.component";
import { ShowEventsComponent } from "./Event/show-events/show-events.component";
import { AdminRootComponent } from "./admin-root.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    AddActivityComponent,
    ShowActivitiesComponent,
    AddEventComponent,
    ShowEventsComponent,
    AdminRootComponent
  ],
  imports: [CommonModule, AdminRouting, SharedModule],
  exports: [
    AdminRootComponent
  ]
})
export class AdminModule {}
