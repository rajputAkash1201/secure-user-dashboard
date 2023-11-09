// src/services/__tests__/authService.test.ts
import { signIn, signUp } from '../authService';
import axios from 'axios';

jest.mock('axios');

describe('AuthService', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should sign in successfully', async () => {
    const mockUser = { id: 1, email: 'test@example.com' };
    (axios.post as jest.Mock).mockResolvedValueOnce({ data: mockUser });

    const user = await signIn('test@example.com', 'password');

    expect(user).toEqual(mockUser);
    expect(axios.post).toHaveBeenCalledWith('https://reqres.in/api/login', {
      email: 'test@example.com',
      password: 'password',
    });
  });

  it('should handle sign in failure', async () => {
    (axios.post as jest.Mock).mockRejectedValueOnce(new Error('Authentication failed'));

    await expect(signIn('test@example.com', 'password')).rejects.toThrow('Authentication failed');
  });

  it('should sign up successfully', async () => {
    const mockUser = { id: 2, email: 'newuser@example.com' };
    (axios.post as jest.Mock).mockResolvedValueOnce({ data: mockUser });

    const user = await signUp('newuser@example.com', 'password');

    expect(user).toEqual(mockUser);
    expect(axios.post).toHaveBeenCalledWith('https://reqres.in/api/register', {
      email: 'newuser@example.com',
      password: 'password',
    });
  });

  it('should handle sign up failure', async () => {
    (axios.post as jest.Mock).mockRejectedValueOnce(new Error('Registration failed'));

    await expect(signUp('newuser@example.com', 'password')).rejects.toThrow('Registration failed');
  });
});
