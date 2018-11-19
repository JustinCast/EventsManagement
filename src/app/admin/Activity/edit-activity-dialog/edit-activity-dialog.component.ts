import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Activity } from "../../../models/Activity";

@Component({
  selector: "app-edit-activity-dialog",
  templateUrl: "./edit-activity-dialog.component.html",
  styleUrls: ["./edit-activity-dialog.component.scss"]
})
export class EditActivityDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditActivityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public activity: Activity
  ) {}

  ngOnInit() {}

  onNoClick(): any {
    return this.dialogRef.close(false);
  }
}
