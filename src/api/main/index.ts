import request from '../api';

export const getNaverMain = () => {
  return request().get('/');
};
