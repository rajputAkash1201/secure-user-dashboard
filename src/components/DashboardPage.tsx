// src/components/DashboardPage.tsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { User } from '../store/user/userTypes';
import { fetchData } from '../services/dataService';
import { useDispatch } from 'react-redux';
import { clearUser } from '../store/user/userSlice';

const DashboardPage: React.FC = () => {
    const dispatch = useDispatch();
    const user: User | null = useSelector((state: any) => state.user.token);
    const [data, setData] = useState<string | null>(null);

    const handleLogout = () => {
        dispatch(clearUser());
        localStorage.removeItem('authToken')
    }

    useEffect(() => {
        // Ensure that only authenticated users can access this page
        if (!user) {
            // Redirect unauthenticated users to the sign-in page
            window.location.href = '/signin';
        } else {
            // Fetch user-specific data
            fetchData()
                .then((response) => {
                    setData(JSON.stringify(response, null, 2));
                })
                .catch((error) => {
                    console.error('Failed to fetch data:', error);
                });
        }
    }, [user]);

    return (
        <div className="max-w-xxl mx-auto mt-16 p-6 bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
            {user && <p className="mb-4">Welcome, {user.email}!</p>}
            {data && (
                <div>
                    <h2 className="text-lg font-semibold mb-2">Data</h2>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">{data}</pre>
                </div>
            )}
            <button
                className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none"
                onClick={handleLogout}
            >
                Log Out
            </button>
        </div>
    );
};

export default DashboardPage;
