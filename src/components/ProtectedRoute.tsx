import { Navigate } from "react-router-dom";

export const PrivateWrapper = ({ user, children }: { user: any, children: JSX.Element }) => {
    return user ? children : <Navigate to="/signin" replace />;
};