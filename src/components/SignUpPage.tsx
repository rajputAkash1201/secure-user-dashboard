// src/components/SignUpPage.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signUp } from '../services/authService';
import { setUser } from "../store/user/userSlice"
import Form from './Common/Form';
import { useNavigate } from 'react-router-dom';

const SignUpPage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const gotoSignInPage = () => {
        navigate("/signin");
    }

    const handleSignUp = async () => {
        try {
            const user = await signUp(email, password);
            if (user) {
                navigate("/login")
            }
        } catch (error) {
            console.error('Sign-up failed:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
            <Form onSubmit={handleSignUp}>
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
                    className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none"
                    type="submit"
                >
                    Sign Up
                </button>
            </Form>
            <button
                className="w-full bg-gray-300 text-gray-700 p-2 rounded-md mt-2 hover:bg-gray-400 focus:outline-none"
                onClick={gotoSignInPage}
            >
                Sign In
            </button>
        </div>
    );
};

export default SignUpPage;
