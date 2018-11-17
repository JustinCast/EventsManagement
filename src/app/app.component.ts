import { Component } from '@angular/core';
import { InStorageService } from './services/in-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  step = 0;

  constructor(private _in: InStorageService){
    console.log(_in.getUser());
  }

  setStep(index: number) {
    this.step = index;
  }


}
