import { useAuth } from './AuthContextProvider';

const Logout = () => {
    const authContext = useAuth();
    if (!authContext) {
        throw new Error('AuthContext is undefined');
    }
    const { logout } = authContext;

    const handleLogout = () => {
        // Implement logout logic (e.g., call logout method from AuthContext)
        logout();
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;