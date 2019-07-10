import '../sass/style.scss';

if (process.env.NODE_ENV !== 'production') {
  require('file-loader!../html/index.html');
}
