import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../services/authService';
import { setUser } from "../store/user/userSlice"
import Form from './Common/Form';
import { useNavigate } from 'react-router-dom';

const SignInPage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = () => {
        return navigate("/signup");
    }

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const user = await signIn(email, password);
            dispatch(setUser(user));
            localStorage.setItem('authToken', user.token);
            navigate("/dashboard")
        } catch (error) {
            console.error('Sign-in failed:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Sign In</h1>
            <Form onSubmit={handleSignIn}>
                <input
                    className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
                    type="submit"
                >
                    Sign In
                </button>
            </Form>
            <button
                className="w-full bg-gray-300 text-gray-700 p-2 rounded-md mt-2 hover:bg-gray-400 focus:outline-none"
                onClick={signUp}
            >
                Sign Up
            </button>
        </div>
    );
};

export default SignInPage;
