import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { DialogManagerService } from 'src/app/services/dialog-manager.service';

@Component({
  selector: 'app-show-activities',
  templateUrl: './show-activities.component.html',
  styleUrls: ['./show-activities.component.scss']
})
export class ShowActivitiesComponent implements OnInit {

  constructor(public _activity: ActivityService, private _dialog: DialogManagerService) { }

  ngOnInit() {
    if(this._activity.activities.length === 0)
      this._activity.getActivities();
  }

  openEditActivity(index: number) {
    this._dialog.openEditActivity(this._activity.activities[index])
    .subscribe(
      update => {if(update) this._activity.updateActivity(update)} 
    );
  }

  deleteActivity(index: number) {
    this._activity.deleteActivity(index);
  }

}
