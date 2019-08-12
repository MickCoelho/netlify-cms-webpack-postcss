const app = {
  state: {
    isTouch: false,
  }, // initial state
  reducers: {
    setIsTouch(state, isTouch) {
      return {
        ...state,
        isTouch,
      };
    },
  },
};

export default app;
