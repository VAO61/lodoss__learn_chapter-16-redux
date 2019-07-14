import {
  ADD_USER_DETAIL_LIST,
  REMOVE_USER_DETAIL_LIST,
  CLEAR_USER_DETAIL_LIST,
  UPDATE_USER_LIST
} from './constants';

const initialState = {
  userList: [],
  userDetailList: []
};

const reducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case UPDATE_USER_LIST:
      return {
        ...state,
        userList: action.payload
      };
    case ADD_USER_DETAIL_LIST:
      return {
        ...state,
        userDetailList: [...state.userDetailList, action.payload]
      };
    case REMOVE_USER_DETAIL_LIST:
      return {
        ...state,
        userDetailList: state.userDetailList.filter(
          user => user.id !== action.payload
        )
      };
    case CLEAR_USER_DETAIL_LIST:
      return {
        ...state,
        userDetailList: []
      };
    default:
      return state;
  }
};

export default reducer;
