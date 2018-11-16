import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { User } from "../models/User";
import { environment } from "src/environments/environment";
import { UiService } from "./ui.service";
import { InStorageService } from "./in-storage.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private _http: HttpClient, private ui: UiService, private _in: InStorageService) {}

  login(user: User) {
    this._http
      .post<number>(`${environment.server}loginUser`, {
        dni: user.dni,
        password: user.passport
      })
      .subscribe(
        id => {
          user.id = id;
          this._in.login(user);
          this.ui.openSnackBar("Loggued succesfully", "Ok", 2000);
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

  getUsers() {}

  saveUser() {}

  updateUser() {}
}
