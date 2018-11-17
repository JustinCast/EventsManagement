import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {
  activityGroup: FormGroup;
  constructor(private _fb: FormBuilder, private _activityService: ActivityService) { 
    this.activityGroup = this._fb.group({
      'name': ['', Validators.required],
      'duration': ['', Validators.required],
      'activity_date': ['', Validators.required],
      'place': ['', Validators.required],
      'saloon': ['', Validators.required],
      'entry': ['', Validators.required],
      'requirements': ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    
  }
}
