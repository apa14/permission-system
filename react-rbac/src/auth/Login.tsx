import React, { useState } from 'react';
import { useAuth } from './AuthContextProvider';

const Login = () => {
    const authContext = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    if (!authContext) {
        return <div>Error: Auth context is not available</div>;
    }
    const { login } = authContext;


    const handleLogin = () => {
        console.log('HOLII LOGIN HANDLE');
        // Implement login logic (e.g., call login method from AuthContext)
        login({ id: 1, roles: ['admin'], user: username, pass: password });
    };

    return (
        <div>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;