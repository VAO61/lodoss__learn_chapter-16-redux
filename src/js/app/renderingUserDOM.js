export const renderingUserWidget = user => {
  const widgetUser = document.createElement('div');
  widgetUser.className = 'users-list__user'; // Имеется старый id (animation)

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
    userDesc.appendChild(userLocation);

    const iconLocation = document.createElement('i');
    iconLocation.className = 'fas fa-map-marker-alt';
    iconLocation.innerHTML = user.location;
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
  controlContainer.appendChild(btnRemove);

  // ---------------------- //

  return widgetUser;
};

export const renderingUserList = widgets => {
  const container = document.querySelector('.widget-users__users-list');
  container.innerHTML = '';

  widgets.forEach(widget => {
    container.appendChild(widget);
  });
};
