import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  private _ongoingTraining:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  get ongoingTraining():boolean{
    return this._ongoingTraining;
  }

  set ongoingTraining(newValue:boolean){
      this._ongoingTraining = newValue;
  }

}
