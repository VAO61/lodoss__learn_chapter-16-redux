const axios = require('axios');

export const apiGetUserList = async () => {
  const responseUserList = await axios.get('https://api.github.com/users');
  return responseUserList.data;
};

export const apiGetUser = async login => {
  const responseUser = await axios.get(`https://api.github.com/users/${login}`);
  return responseUser.data;
};
