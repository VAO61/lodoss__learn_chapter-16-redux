import '../sass/style.scss';
import './app/JQueryDOM.js';
import { apiGetUser, apiGetUserList } from './app/api';
import store from './store/store';
import { updateUserInfo, updateUserList } from './store/actions';

if (process.env.NODE_ENV !== 'production') {
  require('file-loader!../html/index.html');
}

apiGetUserList().then(userList => {
  store.dispatch(updateUserList(userList));
});

store.subscribe(() => {
  const state = store.getState();
  document.title = state.user.login;
});

document.querySelector('#change-title').addEventListener('click', async () => {
  const state = store.getState();
  const randomIndexes = [];

  for (let i = 0; i < 3; i++) {
    randomIndexes[i] = Math.floor(Math.random() * state.userList.length);
  }

  console.log(randomIndexes);

  const requestes = randomIndexes.map(index =>
    apiGetUser(state.userList[index].login)
  );
  const responses = await Promise.all(requestes);
  console.log(responses);
});
