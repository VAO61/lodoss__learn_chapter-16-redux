import { UPDATE_USER_INFO, UPDATE_USER_LIST } from './constants';

const initialState = {
  userList: [],
  user: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_LIST:
      return {
        ...state,
        userList: action.payload
      };
    case UPDATE_USER_INFO:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
