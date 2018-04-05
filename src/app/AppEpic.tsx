import { Action } from 'redux';
import { Observable } from 'rxjs';
import { loadData } from '../app/Actions';
import { Cleaner, Team } from './Types';

const teams: Team[] = [
    {
        id: 1,
        name: 'Team 1'
    },
    {
        id: 2,
        name: 'Team 2'
    },
    {
        id: 3,
        name: 'Team 3'
    }
];

const cleaners: Cleaner[] = [{
    id: 1,
    name: 'Wolfgang'
}, {
    id: 2,
    name: 'Jürgen'
},
    {
        id: 3,
        name: 'Christian'
    },
    {
        id: 4,
        name: 'Elmar'
    },
    {
        id: 5,
        name: 'Udo'
    }
];

export const appEpic = (actions$: Observable<Action>): Observable<Action> => {
    return actions$.filter(loadData.started.match)
        .map(action => {
            action.payload = {};
            return loadData.done(
                {
                    params: action.payload,
                    result: {
                        cleaners,
                        teams
                    }
                });
        });

};