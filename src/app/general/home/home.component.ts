import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { RecervationService } from 'src/app/services/recervation.service';
import { Reservation } from 'src/app/models/Reservation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public act: ActivityService,
              public res: RecervationService
              ) { 
    this.act.getActivities();    
  }

  ngOnInit() {
  }

  
  reservation(i : number){
    let body: Reservation = {
      id_activity: this.act.activities[i].id,
      id_user: 1, // FALTA,
      confirmation: false
    }

    this.res.saveReservation(body);
  }

}
