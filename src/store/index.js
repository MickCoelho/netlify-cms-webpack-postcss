import { init } from '@rematch/core';
import {
  app,
} from './models';

const initialState = {
  app: {
    isTouch: false,
    aboutPanelOpen: false,
    scrollSpeed: 0,
    pageScrollTop: 0,
    projectSlug: '',
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
