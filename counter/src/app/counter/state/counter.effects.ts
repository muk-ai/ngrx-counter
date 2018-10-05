import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { mapTo, delay } from 'rxjs/operators';

import * as CounterActions from './counter.actions';

@Injectable()
export class CounterEffects {

  @Effect()
  delayedDouble$ = this.actions$.pipe(
    ofType(CounterActions.CounterActionTypes.CountDelayedDouble),
    mapTo(new CounterActions.CountDouble()),
    delay(1000),
  );

  constructor(private actions$: Actions) {}
}
