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
      'to_name': ['', Validators.required],
      'from_name': ['CoffeCode Group Corp', Validators.required],
      'message_html': ['', Validators.required],
    })
  }

  ngOnInit() {
    //emailjs.init("user_RjLHFaNOVjh9MHP1hlwz9");
  }

  sendEmail() {
    let templateParams = {
      name: this.emailGroup.get('to_name').value,
      message_html: this.emailGroup.get('message_html').value,
      from_name: this.emailGroup.get('from_name').value
  };
    emailjs
      .send(
        "gmail",
        "template_weEmF6VN",
        {name: "James", notes: "Check this out!"},
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
