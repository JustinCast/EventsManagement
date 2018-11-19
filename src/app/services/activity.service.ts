import { Injectable } from "@angular/core";
import { Activity } from "../models/Activity";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { UiService } from "./ui.service";
import { InStorageService } from "./in-storage.service";
@Injectable({
  providedIn: "root"
})
export class ActivityService {
  activities: Array<Activity> = [];
  reservedActivities: Array<Activity> = [];
  constructor(
    public _http: HttpClient,
    private ui: UiService,
    private _in: InStorageService
  ) {}

  getActivities() {
    this._http
      .get<Array<Activity>>(
        `${environment.server}readActivity/${this._in.getActualEvent().id}`
      )
      .subscribe(
        activities => {
          this.activities = activities;
          console.log(this.activities);
        },
        (err: HttpErrorResponse) => this.handleError(err)
      );
  }

  getActivity(activity_id: number) {
    this._http
      .get<Activity>(`${environment.server}getActivity/${activity_id}`)
      .subscribe(
        a => {
          this.reservedActivities.push(a);
        },
        (err: HttpErrorResponse) => this.handleError(err)
      );
  }

  saveActivity(activity: Activity) {
    this._http
      .post(`${environment.server}createActivity`, activity)
      .subscribe(
        () => this.ui.openSnackBar("Activity saved succesfully", "Ok", 2000),
        (err: HttpErrorResponse) => this.handleError(err)
      );
  }

  deleteActivity(index: number) {
    this._http
      .delete(
        `${environment.server}deleteActivity/${
          this.activities[index].id
        }`
      )
      .subscribe(
        () => {
          this.ui.openSnackBar("Activity deleted succesfully", "Ok", 2000);
          this.activities.splice(index, 1);
        },
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
