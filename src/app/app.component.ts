import { Component, OnInit } from '@angular/core';
import { InStorageService } from './services/in-storage.service';
import { EventService } from './services/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  step = 0;
  actualDate: Date = new Date();
  constructor(private _in: InStorageService, private _event: EventService){
    console.log(_in.getUser());
  }

  ngOnInit() {
    this._event.getEvents();
  }

  setStep(index: number) {
    this.step = index;
  }


}
