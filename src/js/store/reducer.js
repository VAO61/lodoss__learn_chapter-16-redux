const initialState = {
  user: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UpdateUser':
      return {
        ...state,
        user: {
          id: Math.random()
        }
      };
    default:
      return state;
  }
};

export default reducer;
