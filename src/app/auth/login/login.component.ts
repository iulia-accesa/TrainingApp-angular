import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/domain/user';
import { AuthService } from '../auth.service';
interface ceva{

}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { 
   
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.authService.login({
      email:form.value.email,
      password: form.value.password

    });
 
  }

}
