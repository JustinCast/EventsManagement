import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/User";
import { Router } from "@angular/router";
import { InStorageService } from "src/app/services/in-storage.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginGroup: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _user: UserService,
    private router: Router,
    private _in: InStorageService
  ) {
    this.loginGroup = this._fb.group({
      dni: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit() {
    if(this._in.getUser() !== null)
      this.router.navigate(['/home'])
  }

  onSubmit() {
    let u = new User(
      "",
      "",
      this.loginGroup.get("password").value,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      this.loginGroup.get("dni").value
    );
    this._user.login(u);
  }
}
