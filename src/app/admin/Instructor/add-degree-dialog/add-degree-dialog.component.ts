import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Degree } from "src/app/models/Degree";

@Component({
  selector: "app-add-degree-dialog",
  templateUrl: "./add-degree-dialog.component.html",
  styleUrls: ["./add-degree-dialog.component.scss"]
})
export class AddDegreeDialogComponent implements OnInit {
  degreeGroup: FormGroup;
  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<AddDegreeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public id_instructor: number
  ) {
    this.degreeGroup = this._fb.group({
      name: ["", Validators.required],
      institution: ["", Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    let degree = new Degree(
      this.degreeGroup.get("name").value,
      this.degreeGroup.get("institution").value
    );
    return this.dialogRef.close(degree);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
