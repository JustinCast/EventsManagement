import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginGroup: FormGroup;
  constructor(private _fb: FormBuilder) { 
    this.loginGroup = this._fb.group({
      
    })
  }

  ngOnInit() {
  }

}
