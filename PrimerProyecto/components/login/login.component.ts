import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(
    public _user: UserService,
    private _api: ApiService
  ) {  }

  ngOnInit(): void {
  }

  login(){
    const user = (document.querySelector('#user') as HTMLInputElement).value
    const password = (document.querySelector('#password') as HTMLInputElement).value
    this._api.login(user, password).subscribe(response => {
      if(response.success){
        this._user.user = response.user
        console.log(this._user.user)
      }
    })
  }

}
