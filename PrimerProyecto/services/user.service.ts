import { Injectable } from '@angular/core';
import { User } from '../others/interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user: User
}
