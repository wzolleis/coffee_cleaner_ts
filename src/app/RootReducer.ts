import { Action } from 'redux';
import { isType } from 'typescript-fsa';
import { loadData, addCleanerToTeam } from './Actions';
import { Cleaner, State, Team } from './Types';

const INITIAL_TEAMS: Team[] = [];
const INITIAL_CLEANER: Cleaner[] = [];

export const INITAL_STATE: State = {
    teams: INITIAL_TEAMS,
    cleaners: INITIAL_CLEANER
};

export const reducer = (state: State, action: Action): State => {
    if (isType(action, loadData.done)) {
        return {
            ...state,
            cleaners: action.payload.result.cleaners,
            teams: action.payload.result.teams
        };
    }

    if (isType(action, addCleanerToTeam.done)) {
        const cleaners: Cleaner[] = state.cleaners.filter(c => c.id !== action.payload.result.cleaner.id);
        cleaners.push(action.payload.result.cleaner);
        return {
            ...state,
            cleaners
        };
    }
    return state;
};