import { Injectable } from '@angular/core';
import { Salesperson } from '../salesperson/salesperson.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
// loggedinuser can be salesperson or null 
  LoggedInUser: Salesperson | null = null; 

  isLoggedIn(): boolean
{
  return this.LoggedInUser != null;
}
  constructor() { }
}
