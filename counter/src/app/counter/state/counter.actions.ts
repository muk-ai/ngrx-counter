import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  CountIncrement = '[Counter] Increment Count',
  CountDecrement = '[Counter] Decrement Count',
  CountReset = '[Counter] Reset Count',
}

export class CountIncrement implements Action {
  readonly type = CounterActionTypes.CountIncrement;
  public constructor() {}
}

export class CountDecrement implements Action {
  readonly type = CounterActionTypes.CountDecrement;
  public constructor() {}
}

export class CountReset implements Action {
  readonly type = CounterActionTypes.CountReset;
  public constructor() {}
}

export type CounterActions = CountIncrement | CountDecrement | CountReset;
