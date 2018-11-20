import { Component, OnInit } from "@angular/core";
import * as emailjs from "emailjs-com";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UiService } from "src/app/services/ui.service";
@Component({
  selector: "app-reminder",
  templateUrl: "./reminder.component.html",
  styleUrls: ["./reminder.component.scss"]
})
export class ReminderComponent implements OnInit {
  emailGroup: FormGroup;
  constructor(private _fb: FormBuilder, private ui: UiService) {
    this.emailGroup = this._fb.group({
      to_name: ["", Validators.required],
      to_email: ["", Validators.required],
      from_name: ["CoffeCode Group Corp", Validators.required],
      message_html: ["", Validators.required]
    });
  }

  ngOnInit() {
    //emailjs.init("user_RjLHFaNOVjh9MHP1hlwz9");
  }

  sendEmail() {
    emailjs
      .send(
        "gmail",
        "template_weEmF6VN",
        {
          name: "Participation reminder",
          from_name: this.emailGroup.get("from_name").value,
          to_email: this.emailGroup.get("to_email").value,
          message: this.emailGroup.get("message_html").value,
          to: this.emailGroup.get("to_name").value
        },
        "user_RjLHFaNOVjh9MHP1hlwz9"
      )
      .then(
        (response) => {
          this.ui.openSnackBar("Email was sent successfully", 'Ok', 2000);
        },
        err => {
          this.ui.openSnackBar(`Error: ${err}`, 'Ok', 2000);
        }
      );
  }
}
