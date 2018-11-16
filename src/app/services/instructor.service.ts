import { Injectable } from "@angular/core";
import { Instructor } from "../models/Instructor";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { UiService } from "./ui.service";

@Injectable({
  providedIn: "root"
})
export class InstructorService {
  instructors: Array<Instructor> = [];
  loading: boolean = false;
  constructor(private _http: HttpClient, private ui: UiService) {}

  saveInstructor(instructor: Instructor) {
    this._http
      .post(`${environment.server}/createInstructor`, instructor)
      .subscribe(
        () => {this.ui.openSnackBar("Instructor guardado con éxito", "Ok", 2000); this.loading = false},
        (err: HttpErrorResponse) => this.handleError(err)
      );
  }

  getInstructors() {
    this._http
      .get<Array<Instructor>>(`${environment.server}/getInstructors`)
      .subscribe(
        instructors => {(this.instructors = instructors); this.loading = false;},
        (err: HttpErrorResponse) => this.handleError(err)
      );
  }

  updateInstructor(instructor: Instructor) {
    this._http
      .put(`${environment.server}/updateInstructor`, instructor)
      .subscribe(
        () =>
          {this.ui.openSnackBar("Instructor actualizado con éxito", "Ok", 2000); this.loading = false},
        (err: HttpErrorResponse) => this.handleError(err)
      );
  }

  handleError(err: HttpErrorResponse) {
    this.loading = false;
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
