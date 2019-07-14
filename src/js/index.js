import '../sass/style.scss';
import './app/JQueryDOM.js';
import apiGetUser from './app/apiGetUser.js';

if (process.env.NODE_ENV !== 'production') {
  require('file-loader!../html/index.html');
}

apiGetUser().then(user => {
  console.log(user);
});
