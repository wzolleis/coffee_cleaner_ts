import { Action } from 'redux';
import { Observable } from 'rxjs';
import { removeCleanerFromTeam } from '../app/Actions';

export const removeCleanerFromTeamEpic = (actions$: Observable<Action>): Observable<Action> => {
    return actions$.filter(removeCleanerFromTeam.started.match)
        .map(action => {
            return removeCleanerFromTeam.done({
                params: action.payload,
                result: {
                    cleaner: action.payload.cleaner
                }
            });
        });

};