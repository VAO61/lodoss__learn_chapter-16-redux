import '../sass/style.scss';
import { apiGetUser, apiGetUserList } from './app/api';
import store from './store/store';
import { updateUserList, addUser, clearUsers } from './store/actions';
import { renderingUserWidget, renderingUserList } from './app/renderingUserDOM';
import { getRandomLogin } from './app/utils';

if (process.env.NODE_ENV !== 'production') {
  require('file-loader!../html/index.html');
}

store.subscribe(() => {
  const state = store.getState();
  const widgets = state.userDetailList.map(user => renderingUserWidget(user));
  renderingUserList(widgets);
});

const refresh = async () => {
  store.dispatch(clearUsers());
  const requestes = [];

  for (let i = 0; i < 3; i++) {
    requestes.push(apiGetUser(getRandomLogin()));
  }

  const users = await Promise.all(requestes);
  users.forEach(user => {
    store.dispatch(addUser(user));
  });
  // renderingUserList(userWidgets);
};

apiGetUserList().then(userList => {
  store.dispatch(updateUserList(userList));
  refresh();
});
document.querySelector('#refresh').addEventListener('click', refresh);
