import { API_URL } from '../constants/api';
import { privateRequestService } from './privateRequestService';

export const jogServices = {
  getJogs: () => privateRequestService.get(`${API_URL}/data/sync`),
  addJog: jog => privateRequestService.post(`${API_URL}/data/jog`, jog),
  updateJog: jog => privateRequestService.put(`${API_URL}/data/jog`, jog),
  deleteJog: jog => privateRequestService.delete(`${API_URL}/data/jog`, jog),
};
