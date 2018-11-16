import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class InStorageService {

  constructor() { }

  login(user: User){
    localStorage.setItem(String(user.dni), JSON.stringify(user));
  }

  isLoggedIn(dni: number): boolean {
    return localStorage.getItem(String(dni)) !== undefined;
  }

  logout(dni) {
    localStorage.removeItem(String(dni));
  }

  getUser(dni: number): User {
    return JSON.parse(localStorage.getItem(String(dni)));
  }
}
