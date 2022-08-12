import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  
  constructor(private _trainingService: TrainingService) { }

  ngOnInit(): void {
  }

  onStartTraining(form: NgForm){
   
    this._trainingService.startExercise(form.value.exercise);
  }

  getAvailableExercises(){
    return this._trainingService.availableExercises;
  }
}
