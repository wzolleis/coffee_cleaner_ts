import { Action } from 'redux';
import { isType } from 'typescript-fsa';
import { somethingHappened, loadData } from './Actions';
import { Cleaner, State, Team } from './Types';

const INITIAL_TEAMS: Team[] = [];
const INITIAL_CLEANER: Cleaner[] = [];

export const INITAL_STATE: State = {
    teams: INITIAL_TEAMS,
    cleaners: INITIAL_CLEANER
};

export const reducer = (state: State, action: Action): State => {
    if (isType(action, somethingHappened)) {
        // action.payload is inferred as {foo: string};

        // return {bar: action.payload.foo};
        return state;
    }
    if (isType(action, loadData.done)) {
        return {
            ...state,
            cleaners: action.payload.result.cleaners,
            teams: action.payload.result.teams
        };
    }
    return state;
};