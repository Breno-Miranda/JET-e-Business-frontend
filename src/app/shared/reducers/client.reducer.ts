import { ActionTypes } from "../models/actions/client.types.action";

const initialState: any = {
  id: 0,
  name: '',
  email: '',
  phone: '',
};

export function clientReducer(state = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.cAdd:
      return {
        ...state
      };
    case ActionTypes.cClear:
      
      return {
        ...{},
      };
    default:
      return state;
  }
}

