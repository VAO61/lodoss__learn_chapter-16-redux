import $ from 'jquery';
new Date(1562873189);

var getJSON = $.getJSON('https://api.github.com/users', data => {
  // let items = [];
  // $.each(data, item => {
  //   items.push(item.avatar_url);
  // });
  // console.log(data[0].avatar_url);

  console.log('Общее количество пользователей: ' + data.length);

  console.log(
    'Рандомный индекс из массива пользователей: ' +
      '[' +
      Math.floor(Math.random() * data.length) +
      ']'
  );
  console.log(
    'Рандомный login: ' + data[Math.floor(Math.random() * data.length)].login
  );

  const randomUserJSON =
    'https://api.github.com/users/' +
    data[Math.floor(Math.random() * data.length)].login;

  console.log('JSON url рандомного пользователя: ' + randomUserJSON); // Будет новым урлом для непоср. отображения контента

  // TODO: существует лимит на количество обращений к api
  // https://developer.github.com/v3/#rate-limiting
  // $.each(data, index => {
  // $('body').append(i);
  // console.log(data[index].avatar_url);
  // console.log(data[index].id);
  // console.log(`typeof i ` + typeof i);
  // });

  // console.log(items);

  // $('<ul/>', {
  //   class: 'some-style-name',
  //   html: items.join('')
  // }).appendTo('body');
  return randomUserJSON;
});

// getJSON();

// var getUserJSON = $.getJSON(`${randomUserJSON}`, data => {
//   console.log('JSON url рандомного пользователя: ' + data.avatar_url);
// });

// export { getJSON };
// export { getUserJSON };
