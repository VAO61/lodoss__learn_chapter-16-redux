import {
  ADD_USER_DETAIL_LIST,
  REMOVE_USER_DETAIL_LIST,
  CLEAR_USER_DETAIL_LIST,
  UPDATE_USER_LIST
} from './constants';

export const updateUserList = userList => {
  return {
    type: UPDATE_USER_LIST,
    payload: userList
  };
};

export const addUser = user => {
  return {
    type: ADD_USER_DETAIL_LIST,
    payload: user
  };
};

export const removeUser = userId => {
  return {
    type: REMOVE_USER_DETAIL_LIST,
    payload: userId
  };
};

export const clearUsers = () => {
  return {
    type: CLEAR_USER_DETAIL_LIST
  };
};
