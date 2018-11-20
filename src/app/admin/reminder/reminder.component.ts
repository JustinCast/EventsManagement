import { Component, OnInit } from "@angular/core";
import * as emailjs from "emailjs-com";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-reminder",
  templateUrl: "./reminder.component.html",
  styleUrls: ["./reminder.component.scss"]
})
export class ReminderComponent implements OnInit {
  emailGroup: FormGroup;
  constructor(private _fb: FormBuilder) {
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
        response => {
          console.log("SUCCESS!", response.status, response.text);
        },
        err => {
          console.log("FAILED...", err);
        }
      );
  }
}
