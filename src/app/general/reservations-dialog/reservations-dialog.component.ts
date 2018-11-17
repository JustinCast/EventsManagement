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
    this._reservation.getReservationsByUser(this._in.getUser().id);
  }

  setStep(index: number) {
    this.step = index;
  }
}
