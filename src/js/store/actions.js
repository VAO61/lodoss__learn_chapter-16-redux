import { UPDATE_USER_INFO, UPDATE_USER_LIST } from './constants';

export const updateUserList = userList => {
  return {
    type: UPDATE_USER_LIST,
    payload: userList
  };
};

export const updateUserInfo = user => {
  return {
    type: UPDATE_USER_INFO,
    payload: user
  };
};
