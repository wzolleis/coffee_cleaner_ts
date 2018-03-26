import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory();

export const somethingHappened =
  actionCreator<{foo: string}>('SOMETHING_HAPPENED');