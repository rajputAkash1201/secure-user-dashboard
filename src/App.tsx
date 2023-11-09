import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import DashboardPage from './components/DashboardPage';
import { PrivateWrapper } from './components/ProtectedRoute';

const App: React.FC = () => {
  const user = useSelector((state: any) => state.user.token);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/dashboard" element={<PrivateWrapper user={user}>
            <DashboardPage />
          </PrivateWrapper>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
