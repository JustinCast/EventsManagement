import { Component, OnInit } from '@angular/core';
import { InStorageService } from './services/in-storage.service';
import { EventService } from './services/event.service';
import { ActivityService } from './services/activity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  step = 0;
  actualDate: Date = new Date();
  constructor(private _in: InStorageService, private _event: EventService, private _activity: ActivityService){
    console.log(_in.removeActualEvent());
  }

  ngOnInit() {
    this._event.getEvents();
  }

  setStep(index: number) {
    this.step = index;
  }

  selectActual(index: number) {
    this._in.actualEvent(this._event.events[index]);
    this._activity.activities = [];
    this._activity.getActivities();
  }
}
