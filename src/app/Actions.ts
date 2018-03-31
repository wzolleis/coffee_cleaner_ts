import actionCreatorFactory from 'typescript-fsa';
import { Cleaner } from './Types';

const actionCreator = actionCreatorFactory();

export const somethingHappened =
  actionCreator<{ foo: string }>('SOMETHING_HAPPENED');

export const addCleaner = actionCreator.async<
  { cleaner: Cleaner },   // parameter type
  {},   // success type
  { code: number }   // error type
  >('ADD_CLEANER');

export const loadCleanerList = actionCreator.async<
  {},   // parameter type
  {cleaners: Cleaner[]},   // success type
  { code: number }   // error type
  >('LOAD_CLEANER_LIST');
  