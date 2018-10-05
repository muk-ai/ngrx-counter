import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { delay, mergeMap } from 'rxjs/operators';

import { CounterActionTypes, CountDelayedDouble, CountDouble } from './counter.actions';
import { from, of } from 'rxjs';

@Injectable()
export class CounterEffects {

  @Effect()
  delayedDouble$ = this.actions$.pipe(
    ofType<CountDelayedDouble>(CounterActionTypes.CountDelayedDouble),
    mergeMap(action => {
      return from(of(new CountDouble()).pipe(delay(action.payload.delay)));
    }),
  );

  constructor(private actions$: Actions) {}
}
