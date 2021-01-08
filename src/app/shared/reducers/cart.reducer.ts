import { ActionTypes } from "../models/actions/cart.types.action";
import { ProductModel } from "../models/product.model";

const initialState: any = {
  order: '00001',
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
      let remProducts = state.products.filter((item: any) => item !== state.products[index])

      return {
        ...state,
        products: remProducts,
        total: calculateTotal(action.payload, action),
        quantidade: calculateQtd(action),
      };
    case ActionTypes.Recount:
      let recProducts = Object.assign({}, state, action.payload);
      return {
        ...recProducts,
        total: recCalculateTotal(recProducts),
        quantidade: reccalculateQtd(recProducts),
      };
    case ActionTypes.Clear:
      // 
      total = 0;
      quantidade = 0;
      // 
      state  = {
        order: '00001',
        products: [] = [],
        quantidade: 0,
        total: 0,
      }
      return state;
    default:
      return state;
  }
}

function recCalculateTotal(data: any): number {
  let total: number = 0;
  data.products.forEach((product: { price: number; amount: number; }) => {
      total += (product.price * product.amount);
  });
  return total;
}

function reccalculateQtd(data: any): number {
  let quantidade: number = 0;
  data.products.forEach((product: { amount: number; }) => {
      quantidade += product.amount;
  });
  return quantidade;
}

function calculateTotal(product: any, action: any): number {
  switch (action) {
    case ActionTypes.Add:
      total += (product.price * product.amount);
      return total;
    case ActionTypes.Remove:
      total -= (product.price * product.amount);
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