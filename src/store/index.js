import { init } from '@rematch/core';
import { app } from './models';

const initialState = {
  app: {
    isTouch: false,
  },
};

export const store = init({
  models: {
    app,
  },
  redux: {
    initialState,
  },
});

export default store;
