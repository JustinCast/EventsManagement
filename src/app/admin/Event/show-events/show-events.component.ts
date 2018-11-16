import { Component, OnInit } from "@angular/core";
import { ActivityService } from "src/app/services/activity.service";
import { DialogManagerService } from "src/app/services/dialog-manager.service";

@Component({
  selector: "app-show-events",
  templateUrl: "./show-events.component.html",
  styleUrls: ["./show-events.component.scss"]
})
export class ShowEventsComponent implements OnInit {
  constructor(
    private _activityService: ActivityService,
    private _dialog: DialogManagerService
  ) {}

  ngOnInit() {}

  editActivity(index: number) {
    this._dialog.openEditEvent(this._activityService.activities[index]);
  }

  deleteActivity(index: number) {}
}
