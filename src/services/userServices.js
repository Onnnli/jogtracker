import axios from 'axios';
import { API_URL } from '../constants/api';
import { privateRequestService } from './privateRequestService';

export const userService = {
  loginUser: uuid =>
    axios.post(`${API_URL}/auth/uuidLogin`, {
      uuid,
    }),
  authUser: () => privateRequestService.get(`${API_URL}/auth/user`),
  logoutUser: token =>
    privateRequestService.delete(`${API_URL}/auth/logout`, token),
};
