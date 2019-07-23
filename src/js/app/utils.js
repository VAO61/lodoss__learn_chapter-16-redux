import store from '../store/store';

export const getRandomLogin = () => {
  const state = store.getState();
  let user, isExist;
  do {
    const randomIndex = Math.floor(Math.random() * state.userList.length);
    user = state.userList[randomIndex];
    const filteredUsers = state.userDetailList.filter(user => user !== null);
    isExist = !!filteredUsers.find(u => u.id === user.id);
    // if (isExist) {
    //   debugger;
    // }
  } while (isExist);

  return user.login;
};
