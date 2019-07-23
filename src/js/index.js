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
  const widgets = state.userDetailList
    .filter(user => user !== null)
    .map(user => renderingUserWidget(user));
  renderingUserList(widgets);
});

const refresh = async () => {
  store.dispatch(clearUsers());
  const requestes = [];

  for (let i = 0; i < 3; i++) {
    const user = await apiGetUser(getRandomLogin());
    store.dispatch(addUser(user));
  }

  // const users = await Promise.all(requestes);
  // users.forEach(user => {
  //   store.dispatch(addUser(user));
  // });
};

apiGetUserList().then(userList => {
  store.dispatch(updateUserList(userList));
  refresh();
});
store.dispatch({});
document.querySelector('#refresh').addEventListener('click', refresh);
