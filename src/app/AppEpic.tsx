import { Action } from 'redux';
import { Observable } from 'rxjs';
import { loadData } from '../app/Actions';

export const appEpic = (actions$: Observable<Action>) =>
    actions$.filter(loadData.started.match)
        .delay(1000)
        .map(action => {
            // action.payload is inferred as {foo: string};
            action.payload = {};

            return loadData.done(
                {
                    params: action.payload,
                    result: {
                        cleaners: [{
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
                        ],
                        teams: [
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
                        ]
                    }
                });
        });