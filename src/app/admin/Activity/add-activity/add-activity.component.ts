import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivityService } from "src/app/services/activity.service";
import { Activity } from "src/app/models/Activity";
import { InStorageService } from "src/app/services/in-storage.service";

@Component({
  selector: "app-add-activity",
  templateUrl: "./add-activity.component.html",
  styleUrls: ["./add-activity.component.scss"]
})
export class AddActivityComponent implements OnInit {
  activityGroup: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _activityService: ActivityService,
    private _in: InStorageService
  ) {
    this.activityGroup = this._fb.group({
      name: ["", Validators.required],
      duration: ["", Validators.required],
      activity_date: ["", Validators.required],
      place: ["", Validators.required],
      saloon: ["", Validators.required],
      entry: ["", Validators.required],
      requirements: ["", Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    this._activityService.saveActivity(
      new Activity(
        this.activityGroup.get("name").value,
        this.activityGroup.get("duration").value,
        this.activityGroup.get("activity_date").value,
        this.activityGroup.get("place").value,
        this.activityGroup.get("saloon").value,
        this.activityGroup.get("entry").value,
        this.activityGroup.get("requirements").value,
        0,
        this._in.getActualEvent().id
      )
    );
  }
}
