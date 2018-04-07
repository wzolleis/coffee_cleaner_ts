import { Action } from 'redux';
import { isType } from 'typescript-fsa';
import { loadData, addCleanerToTeam, removeCleanerFromTeam } from './Actions';
import { Cleaner, State, Team } from './Types';

const INITIAL_TEAMS: Team[] = [];
const INITIAL_CLEANER: Cleaner[] = [];

export const INITAL_STATE: State = {
    teams: INITIAL_TEAMS,
    cleaners: INITIAL_CLEANER
};

const updateCleaner = (updated: Cleaner, cleaners: Cleaner[]): Cleaner[] => {
    const index = cleaners.findIndex(c => c.id === updated.id);
    const cleanersLeft = cleaners.slice(0, index);
    const cleanersRight = cleaners.slice(index + 1, cleaners.length);
    return [...cleanersLeft, updated, ...cleanersRight];
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
        const updatedCleaners = updateCleaner(updated, state.cleaners);

        return {
            ...state,
            cleaners: updatedCleaners
        };
    }

    if (isType(action, removeCleanerFromTeam.done)) {
        const updated = action.payload.result.cleaner;
        const updatedCleaners = updateCleaner(updated, state.cleaners);
        return {
            ...state,
            cleaners: updatedCleaners
        };
    }
    return state;
};