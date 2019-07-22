import {
  ADD_USER_DETAIL_LIST,
  REMOVE_USER_DETAIL_LIST,
  CLEAR_USER_DETAIL_LIST,
  UPDATE_USER_LIST
} from './constants';

const initialState = {
  userList: [],
  userDetailList: [null, null, null]
};

const reducer = (state = initialState, action) => {
  const freeIndex = state.userDetailList.findIndex(value => value === null);
  // debugger;
  switch (action.type) {
    case UPDATE_USER_LIST:
      return {
        ...state,
        userList: action.payload
      };
    case ADD_USER_DETAIL_LIST:
      state.userDetailList[freeIndex] = action.payload;
      return {
        ...state,
        userDetailList: [...state.userDetailList]
      };
    case REMOVE_USER_DETAIL_LIST:
      state.userDetailList.forEach((user, index) => {
        if (user.id === action.payload) {
          state.userDetailList[index] = null;
        }
      });
      return {
        ...state,
        userDetailList: [...state.userDetailList]
      };
    case CLEAR_USER_DETAIL_LIST:
      return {
        ...state,
        userDetailList: [...initialState.userDetailList]
      };
    default:
      return state;
  }
};

export default reducer;
