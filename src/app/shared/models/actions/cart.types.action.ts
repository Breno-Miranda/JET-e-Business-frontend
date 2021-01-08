import { Action } from '@ngrx/store';

export enum ActionTypes {
    Add = 'ADD',
    Recount = 'REC',
    Remove = 'REM',
    Clear = 'CLE',
}

export const Add = (item: any) => {
    return <Action>{ type: ActionTypes.Add, payload: item };
}

export const Recount = (item: any) => {
    return <Action>{ type: ActionTypes.Recount, payload: item };
}

export const Remove = (item: any) => {
    return <Action>{ type: ActionTypes.Remove, payload: item };
}

export const Clear = () => {
    return <Action>{ type: ActionTypes.Clear, payload: null };
}
