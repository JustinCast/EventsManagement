import { Component, OnInit } from "@angular/core";
import { ActivityService } from "src/app/services/activity.service";
import { ReservationService } from "src/app/services/recervation.service";
import { Reservation } from "src/app/models/Reservation";
import { InStorageService } from "src/app/services/in-storage.service";
import { Instructor } from "src/app/models/instructor";
import { InstructorService } from "src/app/services/instructor.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  load: boolean = true;
  step = 0;
  actualInstructor: Instructor = new Instructor();
  constructor(
    public act: ActivityService,
    public res: ReservationService,
    private _in: InStorageService,
    private _instructor: InstructorService
  ) {
    this.act.activities = [];
    if (!_in.getActualEvent() !== null) {
      this.act.getActivities();
      this._instructor.getInstructors();
    } else this.load = false;
  }

  setStep(index: number) {
    this.step = index;
    this.displayInstructor(index);
  }

  displayInstructor(index: number) {
    this.actualInstructor = this._instructor.instructors[
      this._instructor.instructors.findIndex(
        i => i.id_activity === this.act.activities[index].id
      )
    ];
  }

  ngOnInit() {}

  reservation(i: number) {
    console.log(this._in.getUser());
    let body: Reservation = {
      id_activity: this.act.activities[i].id,
      id_user: this._in.getUser().id,
      confirmation: false
    };
    console.log(body);
    this.res.saveReservation(body);
  }
}
