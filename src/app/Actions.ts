import actionCreatorFactory from 'typescript-fsa';
import { Cleaner, Team } from './Types';

const actionCreator = actionCreatorFactory();

export const somethingHappened =
  actionCreator<{ foo: string }>('SOMETHING_HAPPENED');

/**
 * Beispiel um einen neuen Cleaner zu definieren
 */
export const addCleaner = actionCreator.async<
  { cleaner: Cleaner },   // parameter type
  {},   // success type
  { code: number }   // error type
  >('ADD_CLEANER');

  /**
   * Fuegt einen Cleaner zu einem Team hinzu
   */
export const addCleanerToTeam = actionCreator.async<
  {
    cleaner: Cleaner,
    team: Team
  },   // parameter type
  {cleaner: Cleaner},   // success type
  { code: number }   // error type
  >('ADD_CLEANER_TO_TEAM');

 /**
  * Entfernt einen Cleaner aus einem Team
  */
export const removeCleanerFromTeam = actionCreator.async<
  {
    cleaner: Cleaner,
  },   // parameter type
  {cleaner: Cleaner},   // success type
  { code: number }   // error type
  >('REMOVE_CLEANER_FROM_TEAM');

/**
 * Laedt die Daten der Anwendung
 */
export const loadData = actionCreator.async<
  {},   // parameter type
  {
    cleaners: Cleaner[],
    teams: Team[]
  },   // success type
  { code: number }   // error type
  >('LOAD_DATA');
