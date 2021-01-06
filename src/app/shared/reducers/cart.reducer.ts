import { ActionTypes } from "../models/actions/types.action";

const initialState: any = {
  products: [],
  total: 0, 
};

let total: number = 0;

export function cartReducer(state = initialState  , action: any) {
  switch (action.type) {
    case  ActionTypes.Add:
        return { 
          ...state,
          products: [...state.products, action.payload],
          total: calculateTotal( action.payload ),
        };
    default:
        return state;
    }
}

function calculateTotal(products: any): number {
  total += products.price;
  return total;
}