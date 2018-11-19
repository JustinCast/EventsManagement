import { Component, OnInit } from "@angular/core";
import { ReservationService } from "src/app/services/recervation.service";
import { ActivityService } from "src/app/services/activity.service";
import { InStorageService } from "src/app/services/in-storage.service";

@Component({
  selector: "app-reservations-dialog",
  templateUrl: "./reservations-dialog.component.html",
  styleUrls: ["./reservations-dialog.component.scss"]
})

export class ReservationsDialogComponent implements OnInit {
  step = 0;
  constructor(
    private _reservation: ReservationService,
    private _activity: ActivityService,
    private _in: InStorageService
  ) {}

  ngOnInit() {
    this._activity.reservedActivities = [];
    console.log(this._in.getUser().id);
    this._reservation.getReservationsByUser(this._in.getUser().id);
  }

  setStep(index: number) {
    this.step = index;
  }

  delete(i: number){

    let body = {
      id_activity: this._activity.reservedActivities[i].id,
      id_user: this._in.getUser().id
    }
    this._activity.deleteReservationActivity(body,i);
  }
}
