import '../sass/style.scss';
import './app/JQueryDOM.js';
import { apiGetUser, apiGetUserList } from './app/api';
import store from './store/store';
import { updateUserList } from './store/actions';
import { renderingUserWidget, renderingUserList } from './app/renderingUserDOM';

if (process.env.NODE_ENV !== 'production') {
  require('file-loader!../html/index.html');
}

const refresh = async () => {
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
  const userWidgets = responses.map(user => renderingUserWidget(user));
  renderingUserList(userWidgets);
};

apiGetUserList().then(userList => {
  store.dispatch(updateUserList(userList));
  refresh();
});
document.querySelector('#refresh').addEventListener('click', refresh);
