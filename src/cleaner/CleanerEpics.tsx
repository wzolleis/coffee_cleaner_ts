import { Action } from 'redux';
import { Observable } from 'rxjs';
import { loadCleanerList } from '../app/Actions';

export const cleanerEpic = (actions$: Observable<Action>) =>
    actions$.filter(loadCleanerList.started.match)
        .delay(2000)
        .map(action => {
            // action.payload is inferred as {foo: string};
            action.payload = {};

            return loadCleanerList.done(
                {
                    params: action.payload,
                    result: {
                        cleaners: [{
                            id: 1,
                            name: 'WZ'
                        }, {
                            id: 2,
                            name: 'JR'
                        }
                        ]
                    }
                });
        });