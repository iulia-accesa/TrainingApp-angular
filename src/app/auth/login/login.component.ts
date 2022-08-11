import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/domain/user';
interface ceva{

}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // private _activeUser: User;
  constructor() { 
    // this._activeUser = new User();
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(form.status === 'VALID'){
    
      let  activeUser = new User(form.value.email,form.value.password);
        console.log(activeUser);
      }
  }

}
