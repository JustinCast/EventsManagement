import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material";
import { EditEventDialogComponent } from "../admin/Event/edit-event-dialog/edit-event-dialog.component";
import { Organization } from "../models/Organization";
import { environment } from "src/environments/environment";
import { HttpErrorResponse, HttpClient } from "@angular/common/http";
import { UiService } from "./ui.service";
import { Reservation } from "../models/Reservation";
import { ActivityService } from "./activity.service";
@Injectable({
  providedIn: "root"
})
export class ReservationService {
  reservationsByUser: Array<Reservation>;
  constructor(
    private _http: HttpClient,
    private ui: UiService,
    private _activity: ActivityService
  ) {}

  saveReservation(reservation: Reservation) {
    this._http
      .post(`${environment.server}createReservation`, reservation)
      .subscribe(
        () =>
          this.ui.openSnackBar("Activity reserved successfully", "Ok", 2000),
        (err: HttpErrorResponse) => this.handleError(err)
      );
  }

  

  getReservationsByUser(user_id: number) {
    this.reservationsByUser = [];
    this._http
      .get<Reservation[]>(
        `${environment.server}getReservationsByUser/${user_id}`
      )
      .subscribe(
        reservations => {this.reservationsByUser = reservations;this.getReservedActivities(this.reservationsByUser)},
        (err: HttpErrorResponse) => this.handleError(err)
      );
  }

  getReservedActivities(reservations: Array<Reservation>) {
    this._activity.reservedActivities = [];
    reservations.forEach(r => {
      this._activity.getActivity(r.id_activity);
    });
  }

  handleError(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      // Error del lado del cliente
      this.ui.openSnackBar(
        `An error occurred: ${err.error.message}`,
        "Ok",
        5000
      );
    } else {
      // The backend returned an unsuccessful response code.
      // Error del lado del backend
      this.ui.openSnackBar(
        `Backend returned code ${err.status}, body was: ${JSON.stringify(
          err.error
        )}`,
        "Ok",
        5000
      );
    }
  }
}
