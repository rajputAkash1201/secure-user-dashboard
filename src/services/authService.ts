// src/services/authService.ts
import axios from 'axios';

const API_BASE_URL = 'https://reqres.in/api';

export const signIn = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signUp = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, { email, password });
    debugger
    return response.data;
  } catch (error) {
    throw error;
  }
};
