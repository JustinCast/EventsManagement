import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { UiService } from "./ui.service";
import { Organization } from "../models/Organization";
import { InStorageService } from "./in-storage.service";

@Injectable({
  providedIn: "root"
})
export class EventService {
  events: Array<Organization> = [];
  constructor(private _http: HttpClient, private ui: UiService) {}

  saveEvent(event: Organization) {
    this._http
      .post(`${environment.server}saveEvent`, event)
      .subscribe(
        () => this.ui.openSnackBar("Event saved successfully", "Ok", 2000),
        (err: HttpErrorResponse) => this.handleError(err)
      );
  }

  getEvents() {
    this._http.get<Array<Organization>>(`${environment.server}getEvents`)
    .subscribe(
      (events) => this.events = events,
      (err: HttpErrorResponse) => this.handleError(err)
    );
  }

  deleteEvent(event: Organization) {
    this._http
      .delete(`${environment.server}deleteEvent/${event.id}`)
      .subscribe(
        () => this.ui.openSnackBar("Evento eliminado con éxito", "Ok", 2000),
        (err: HttpErrorResponse) => this.handleError(err)
      );
  }

  updateEvent(event: Organization) {
    this._http
      .put(`${environment.server}/updateEvent`, event)
      .subscribe(
        () => this.ui.openSnackBar("Evento actualizado con éxito", "Ok", 2000),
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
