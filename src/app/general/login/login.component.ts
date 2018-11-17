import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/User";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginGroup: FormGroup;
  constructor(private _fb: FormBuilder, private _user: UserService) {
    this.loginGroup = this._fb.group({
      dni: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit() {}

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
