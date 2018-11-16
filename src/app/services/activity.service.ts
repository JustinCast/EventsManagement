import { Injectable } from '@angular/core';
import { Activity } from '../models/Activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  activities: Array<Activity>;
  constructor() { }
}
