import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  private _maxDate;

  constructor() { 
   this._maxDate = new Date();
   this._maxDate.setFullYear(this._maxDate.getFullYear() - 18);
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

  get maxDate(){
    return this._maxDate;
  }
}
