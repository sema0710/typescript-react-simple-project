import axios from 'axios';

const request = () =>
  axios.create({
    baseURL: 'http://www.naver.com',
    //아잇 서버 주소는 알아서 바꿔.
    headers: { 'Content-Type': 'application/json' },
  });

export default request;
