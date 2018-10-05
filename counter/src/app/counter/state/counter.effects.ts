import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CounterActionTypes } from './counter.actions';

@Injectable()
export class CounterEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(CounterActionTypes.LoadCounters));

  constructor(private actions$: Actions) {}
}
