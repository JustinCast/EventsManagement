import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditEventDialogComponent } from '../admin/Event/edit-event-dialog/edit-event-dialog.component';
import { Organization } from '../models/Organization';
import { environment } from "src/environments/environment";
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { UiService } from './ui.service';
import { Reservation } from '../models/Reservation';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
    constructor(private _http: HttpClient, private ui: UiService ) {}

    saveReservation(reservation: Reservation) {
      this._http
        .post(`${environment.server}createReservation`, reservation)
        .subscribe(
          () => this.ui.openSnackBar("Activity reserved successfully", "Ok", 2000),
          (err: HttpErrorResponse) => this.handleError(err)
        );
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
