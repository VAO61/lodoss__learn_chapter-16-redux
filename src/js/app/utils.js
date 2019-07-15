import store from '../store/store';

export const getRandomLogin = () => {
  const state = store.getState();
  const randomIndex = Math.floor(Math.random() * state.userList.length);
  return state.userList[randomIndex].login;
};
