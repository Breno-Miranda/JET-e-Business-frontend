import { ActionTypes } from "../models/actions/client.types.action";

const initialState: any = {
  id: 99999,
  name: '',
  email: '',
  phone: '',
};

export function clientReducer(state = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.cAdd:
      return Object.assign({}, state, action.payload);
    case ActionTypes.cClear:
      return {
        ...{},
      };
    default:
      return state;
  }
}

