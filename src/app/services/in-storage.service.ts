import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Organization } from '../models/Organization';

@Injectable({
  providedIn: 'root'
})
export class InStorageService {

  constructor() { }

  login(user: User){
    localStorage.setItem('logged', JSON.stringify(user));
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('logged') !== null;
  }

  logout() {
    localStorage.removeItem('logged');
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('logged'));
  }

  actualEvent(event: Organization) {
    localStorage.setItem('actual', JSON.stringify(event));
  }
}
