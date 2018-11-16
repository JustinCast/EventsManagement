import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class InStorageService {

  constructor() { }

  login(user: User){
    localStorage.setItem('logged', JSON.stringify(user));
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('logged') !== undefined;
  }

  logout() {
    localStorage.removeItem('logged');
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('logged'));
  }
}