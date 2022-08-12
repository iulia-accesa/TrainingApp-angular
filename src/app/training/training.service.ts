import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EMPTY_EXERCISE, Exercise } from './exercise.model';

@Injectable()
export class TrainingService {
  exerciseChanged = new Subject<Exercise>();
  private _availableExercises: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 },
  ];

  private _runningExercise: Exercise = EMPTY_EXERCISE;
  private _exercises: Exercise[] = [];

  get availableExercises() {
    return this._availableExercises;
  }

  startExercise(selectedId: string) {
    const res = this.availableExercises.find((elem) => elem.id === selectedId);

    if (res) {
      this._runningExercise = res;
      this.exerciseChanged.next({ ...res });
    }
  }

  getRunningExercise() {
    return { ...this._runningExercise };
  }

  completeExercise() {
    this._exercises.push({
      ...this._runningExercise,
      date: new Date(),
      state: 'completed',
    });
    this._runningExercise = EMPTY_EXERCISE;
    this.exerciseChanged.next(EMPTY_EXERCISE);
  }

  cancelExercise(progress: number) {
    this._exercises.push({
      ...this._runningExercise,
      duration:this._runningExercise.duration * (progress / 100),
      calories:this._runningExercise.calories * (progress / 100),
      date: new Date(),
      state: 'cancelled',
    });
    this._runningExercise = EMPTY_EXERCISE;
    this.exerciseChanged.next(EMPTY_EXERCISE);
  }

  getCompletedOrCancelledExercises(){
    return this._exercises.slice();
  }
}
