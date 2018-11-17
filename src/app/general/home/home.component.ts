import { Component, OnInit } from "@angular/core";
import { ActivityService } from "src/app/services/activity.service";
import { ReservationService } from "src/app/services/recervation.service";
import { Reservation } from "src/app/models/Reservation";
import { InStorageService } from "src/app/services/in-storage.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  load: boolean = true;
  constructor(
    public act: ActivityService,
    public res: ReservationService,
    private _in: InStorageService
  ) {
    if(!_in.getActualEvent() !== null)
      this.act.getActivities();
    else this.load = false;
  }

  ngOnInit() {}

  reservation(i: number) {
    let body: Reservation = {
      id_activity: this.act.activities[i].id,
      id_user: this._in.getUser().id, // FALTA,
      confirmation: false
    };

    this.res.saveReservation(body);
  }
}
