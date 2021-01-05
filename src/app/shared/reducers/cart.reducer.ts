import { Action, createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from '../models/actions/cart.action';
 
export const initialState = 0;
 
const _cartReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
 
export function cartReducer(state: number | undefined, action: Action) {

    console.log(state);
    console.log(action);
    
  return _cartReducer(state, action);
}