import { Injectable } from '@angular/core';
import { Activity } from '../models/Activity';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { UiService } from './ui.service';
@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  activities: Array<Activity> = [];
  constructor(public _http: HttpClient,private ui: UiService) { }

  getActivities() {
    this._http.get<Array<Activity>>(`${environment.server}readActivity`)
    .subscribe(
      (activities) => {this.activities = activities; console.log(this.activities)},
      (err: HttpErrorResponse) => this.handleError(err)
    );
  }

  saveActivity() {
    this.post
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
