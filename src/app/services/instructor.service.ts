import { Injectable } from "@angular/core";
import { Instructor } from "../models/instructor";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { UiService } from "./ui.service";
import { Degree } from "../models/Degree";

@Injectable({
  providedIn: "root"
})
export class InstructorService {
  instructors: Array<Instructor> = [];
  loading: boolean = false;
  actualInstructorID: number;
  constructor(private _http: HttpClient, public ui: UiService) {}

  saveInstructor(instructor: Instructor) {
    return this._http
      .post<number>(`${environment.server}createInstructor`, instructor);
  }

  getInstructors() {
    this._http
      .get<Array<Instructor>>(`${environment.server}getInstructors`)
      .subscribe(
        instructors => {(this.instructors = instructors); this.loading = false;},
        (err: HttpErrorResponse) => this.handleError(err)
      );
  }

  updateInstructor(instructor: Instructor) {
    this._http
      .put(`${environment.server}updateInstructor`, instructor)
      .subscribe(
        () =>
          {this.ui.openSnackBar("Instructor actualizado con éxito", "Ok", 2000); this.loading = false},
        (err: HttpErrorResponse) => this.handleError(err)
      );
  }

  saveGrade(degree: Degree) {
    this._http.post(`${environment.server}createGrade`, degree)
    .subscribe(
      () =>
        {this.ui.openSnackBar("Grade saved succesfully", "Ok", 2000); },
      (err: HttpErrorResponse) => this.handleError(err)
    );
  }

  getGrades(id_instructor: number) {
    
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
