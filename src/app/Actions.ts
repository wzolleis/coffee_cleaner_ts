import actionCreatorFactory from 'typescript-fsa';
import { Cleaner, Team } from './Types';

const actionCreator = actionCreatorFactory();

export const somethingHappened =
  actionCreator<{ foo: string }>('SOMETHING_HAPPENED');

export const addCleaner = actionCreator.async<
  { cleaner: Cleaner },   // parameter type
  {},   // success type
  { code: number }   // error type
  >('ADD_CLEANER');

export const loadData = actionCreator.async<
  {},   // parameter type
  {
    cleaners: Cleaner[],
    teams: Team[]
  },   // success type
  { code: number }   // error type
  >('LOAD_DATA');
  