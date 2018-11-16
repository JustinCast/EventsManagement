import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddActivityComponent } from './Activity/add-activity/add-activity.component';
import { AdminRouting } from './admin.routing';
import { ShowActivitiesComponent } from './Activity/show-activities/show-activities.component';

@NgModule({
  declarations: [AddActivityComponent, ShowActivitiesComponent],
  imports: [
    CommonModule,
    AdminRouting
  ]
})
export class AdminModule { }
