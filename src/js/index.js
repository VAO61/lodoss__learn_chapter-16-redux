import '../sass/style.scss';
import './app/JQueryDOM.js';
import apiGetUser from './app/apiGetUser.js';
import store from './store/store';
import { updateUserInfo } from './store/actions';

if (process.env.NODE_ENV !== 'production') {
  require('file-loader!../html/index.html');
}

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(updateUserInfo());
store.dispatch(updateUserInfo());
store.dispatch(updateUserInfo());
