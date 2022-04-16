import { useState } from "react";

type AuthUser = {
    name: string,
    email: string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [activeUser, setActiveUser] = useState(false);

    const handleLogin = () => {
        setUser({
            name: 'Dilma Opressora',
            email: 'dilma@gmail.com'
        });
        setActiveUser(true);
    }

    const handleLogout = () => {
        setUser(null);
        setActiveUser(false);
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            {/* <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div> */}
            <h1>
                {activeUser ? `O nome de usuário é ${user?.name} e o  email é ${user?.email}` : 'O usuário não está logado'}
            </h1>
        </div>
    );
}