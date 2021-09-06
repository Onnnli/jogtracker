import axios from 'axios';
import { API_URL } from '../constants/api';

test('GET method', async () => {
  const response = await axios.get(`${API_URL}/test/echo`);
  expect(response.status).toBe(200);
});

test('DELETE method', async () => {
  const response = await axios.delete(`${API_URL}/test/echo`);
  expect(response.status).toBe(200);
});

test('PUT method', async () => {
  const response = await axios.put(`${API_URL}/test/echo`);
  expect(response.status).toBe(200);
});

test('POST method', async () => {
  const response = await axios.post(`${API_URL}/test/echo`);
  expect(response.status).toBe(201);
});
