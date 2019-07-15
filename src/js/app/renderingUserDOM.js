import store from '../store/store';
import { removeUser, addUser } from '../store/actions';
import { apiGetUser } from './api';
import { getRandomLogin } from './utils';

export const renderingUserWidget = user => {
  const widgetUser = document.createElement('div');
  widgetUser.className = 'users-list__user';

  const img = document.createElement('img');
  img.className = 'users-list__avatar';
  img.src = user.avatar_url;
  widgetUser.appendChild(img);

  const userDesc = document.createElement('div');
  userDesc.className = 'users-list__desc';
  widgetUser.appendChild(userDesc);

  const userName = document.createElement('p');
  userName.className = 'users-list__name';
  userName.innerHTML = user.name ? user.name : user.login;
  userDesc.appendChild(userName);

  if (user.location) {
    const userLocation = document.createElement('p');
    userLocation.className = 'users-list__location';
    userLocation.innerHTML = user.location;
    userDesc.appendChild(userLocation);

    const iconLocation = document.createElement('i');
    iconLocation.className =
      'users-list__icon users-list__icon_location fas fa-map-marker-alt';
    userLocation.appendChild(iconLocation);
  }

  const userLink = document.createElement('a');
  userLink.className = 'link users-list__link';
  userLink.href = user.html_url;
  userLink.innerHTML = `@${user.login}`;
  userDesc.appendChild(userLink);

  const controlContainer = document.createElement('div');
  controlContainer.className = 'widget-users__control';
  controlContainer.addEventListener('mouseenter', () => {
    widgetUser.classList.toggle('users-list__user_active-event', true);
    userDesc.classList.toggle('users-list__desc_active-event', true);
  });
  controlContainer.addEventListener('mouseleave', () => {
    widgetUser.classList.toggle('users-list__user_active-event', false);
    userDesc.classList.toggle('users-list__desc_active-event', false);
  });
  widgetUser.appendChild(controlContainer);

  const btnMore = document.createElement('button');
  btnMore.className = 'btn widget-users__btn widget-users__btn_more';
  controlContainer.appendChild(btnMore);

  const btnRemove = document.createElement('button');
  btnRemove.className = 'btn widget-users__btn widget-users__btn_remove';
  btnRemove.addEventListener('click', async () => {
    store.dispatch(removeUser(user.id));
    const response = await apiGetUser(getRandomLogin());
    store.dispatch(addUser(response));
  });
  controlContainer.appendChild(btnRemove);

  return widgetUser;
};

export const renderingUserList = widgets => {
  const container = document.querySelector('.widget-users__users-list');
  container.innerHTML = '';

  widgets.forEach(widget => {
    container.appendChild(widget);
  });
};
