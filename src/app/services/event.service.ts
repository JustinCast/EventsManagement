import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { UiService } from "./ui.service";
import { Organization } from "../models/Organization";

@Injectable({
  providedIn: "root"
})
export class EventService {
  constructor(private _http: HttpClient, private ui: UiService) {}

  saveEvent(event: Organization) {
    this._http
      .post(`${environment.server}saveEvent`, event)
      .subscribe(() =>
        this.ui.openSnackBar("Evento guardado con éxito", "Ok", 2000),
        (err: HttpErrorResponse) => this.handleError(err)
      );
  }

  handleError(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      // Error del lado del cliente
      console.log("An error occurred:", err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // Error del lado del backend
      console.log(
        `Backend returned code ${err.status}, body was: ${JSON.stringify(
          err.error
        )}`
      );
    }
  }
}
