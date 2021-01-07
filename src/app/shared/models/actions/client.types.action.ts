import { Action } from '@ngrx/store';

export enum ActionTypes {
    cAdd = 'ADD_CLIENT',
    cClear = 'CLE_CLIENT',
}

export const cAdd = (product: any) => {
    return <Action>{ type: ActionTypes.cAdd, payload: product };
}

export const cClear = () => {
    return <Action>{ type: ActionTypes.cClear, payload: null };
}
