// src/services/dataService.ts
import axios from 'axios';

const API_BASE_URL = 'https://reqres.in/api';

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/data`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
