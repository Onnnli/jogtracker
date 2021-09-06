import axios from 'axios';

const headers = {
  Authorization: `Bearer ${localStorage.getItem('jwt')}`,
};

export const privateRequestService = {
  get: url =>
    axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }),
  post: (url, data) =>
    axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }),
  put: (url, data) =>
    axios.put(url, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }),
  delete: (url, data) =>
    axios.delete(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      data,
    }),
};
