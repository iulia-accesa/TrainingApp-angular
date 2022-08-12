import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EMPTY_EXERCISE } from './exercise.model';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  private _ongoingTraining:boolean = false;
  exerciseSubscription: Subscription = Subscription.EMPTY;
  constructor(private trainingService: TrainingService) {

   }

  ngOnInit(): void {
    this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe(
      exercise => {
        if(exercise != EMPTY_EXERCISE){
        this.ongoingTraining = true;
        }else {
          this.ongoingTraining = false;
        }
      }
    );
  }

  get ongoingTraining():boolean{
    return this._ongoingTraining;
  }

  set ongoingTraining(newValue:boolean){
      this._ongoingTraining = newValue;
  }

}
