const axios = require('axios');

const apiGetUser = async () => {
  const responseUserList = await axios.get('https://api.github.com/users');
  const randomIndex = Math.floor(Math.random() * responseUserList.data.length);
  const randomUser = responseUserList.data[randomIndex];
  const responseUser = await axios.get(
    `https://api.github.com/users/${randomUser.login}`
  );
  return responseUser.data;
};

export default apiGetUser;
