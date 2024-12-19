import { Navigate } from 'react-router';
import { useAuth } from '../auth/AuthContextProvider';
import { hasPermission, Role } from '../../../rbac-permission'

import { ComponentType } from 'react';

interface ProtectedRouteProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: ComponentType<any>;
    roles?: Role[];
    permissions?: string[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

const ProtectedRoute = ({ component: Component, roles, permissions, ...rest }: ProtectedRouteProps) => {
    const authContext = useAuth();
    const user = authContext?.user;

    // If the user is not logged in, redirect to the login page
    if (!user) {
        return <Navigate to='/login' />;
    }
    // If the user is logged in but does not have the required role, redirect to the home page
    if (!roles) {
        return <Navigate to='/' />;
    } else {
        const hasPermissionFlag = permissions?.some(permission => hasPermission({ roles: roles, id: user.id }, permission)) ?? false;
        if (!hasPermissionFlag) {
            return <Navigate to='/' />;
        }
    }
    // If the user is logged in and has the required role, render the component
    return <Component {...rest} />;

};

export default ProtectedRoute;