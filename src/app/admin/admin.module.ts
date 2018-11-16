import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddActivityComponent } from './Activity/add-activity/add-activity.component';
import { AdminRouting } from './admin.routing';
import { ShowActivitiesComponent } from './Activity/show-activities/show-activities.component';
import { AddEventComponent } from './Event/add-event/add-event.component';
import { ShowEventsComponent } from './Event/show-events/show-events.component';

@NgModule({
  declarations: [AddActivityComponent, ShowActivitiesComponent, AddEventComponent, ShowEventsComponent],
  imports: [
    CommonModule,
    AdminRouting
  ]
})
export class AdminModule { }
