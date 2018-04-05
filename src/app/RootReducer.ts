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
        const updated = action.payload.result.cleaner;
        const index = state.cleaners.findIndex(c => c.id === updated.id);
        const cleanersLeft = state.cleaners.slice(0, index);
        const cleanersRight = state.cleaners.slice(index + 1, state.cleaners.length);

        const updatedCleaners = [...cleanersLeft, updated, ...cleanersRight];

        return {
            ...state,
            cleaners: updatedCleaners
        };
    }
    return state;
};