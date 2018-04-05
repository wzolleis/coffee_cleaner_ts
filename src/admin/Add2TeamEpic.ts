import { Action } from 'redux';
import { Observable } from 'rxjs';
import { addCleanerToTeam } from '../app/Actions';
import { Cleaner } from '../app/Types';

export const add2TeamEpic = (actions$: Observable<Action>): Observable<Action> => {
    return actions$.filter(addCleanerToTeam.started.match)
        .map(action => {
            const cleanerWithTeam: Cleaner = {
                ...action.payload.cleaner,
                team: action.payload.team
            };
            return addCleanerToTeam.done({
                params: action.payload,
                result: {
                    cleaner: cleanerWithTeam
                }
            });
        });

};