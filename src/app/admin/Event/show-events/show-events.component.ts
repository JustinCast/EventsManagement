import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.scss']
})
export class ShowEventsComponent implements OnInit {

  constructor(private _activityService: ActivityService) { }

  ngOnInit() {
  }

  editActivity(index: number) {

  }

  deleteActivity(index: number) {

  }
}
