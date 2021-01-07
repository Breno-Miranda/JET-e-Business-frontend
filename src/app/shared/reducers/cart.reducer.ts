import { ActionTypes } from "../models/actions/cart.types.action";

const initialState: any = {
  products: [] = [],
  quantidade: 0,
  total: 0,
};

let total: number = 0;
let quantidade: number = 0;

export function cartReducer(state = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.Add:
      return {
        ...state,
        products: [...state.products, action.payload],
        total: calculateTotal(action.payload, action.type),
        quantidade: calculateQtd(action.type),
      };
    case ActionTypes.Remove:
      let index = state.products.indexOf(action.payload);
      let state_products = state.products.filter((item: any) => item !== state.products[index])

      return {
        ...state,
        products: state_products,
        total: calculateTotal(action.payload, action),
        quantidade: calculateQtd(action),
      };
    case ActionTypes.Clear:
      
      return {
        ...[],
        products: [],
        total: 0,
        quantidade: 0,
      };
    default:
      return state;
  }
}

function calculateTotal(products: any, action: any): number {
  switch (action) {
    case ActionTypes.Add:
      total += products.price;
      return total;
    case ActionTypes.Remove:
      total -= products.price;
      return total;
    default:
      return 0;
  }
}

function calculateQtd(action: any): number {
  switch (action) {
    case ActionTypes.Add:
      quantidade += 1;
      return quantidade;
    case ActionTypes.Remove:
      quantidade -= 1;
      return quantidade;
    default:
      return 0;
  }
}