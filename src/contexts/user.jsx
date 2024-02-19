import { createContext, useState } from "react";
import { appRoutes } from "../lib/appRoutes";
import { useNavigate } from "react-router-dom";

export const UserContext  = createContext(null); 

// возврат данных из локального хранил.
export const GetUserFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('user'))
}

export function UserProvider ({ children }) {
    const [userData, setUserData] = useState(GetUserFromLocalStorage());
    let navigate = useNavigate();

    const loginUser = (user) =>{
        console.log(user);
        setUserData(user);
        localStorage.setItem('user');
        navigate(appRoutes.MAIN);
    }
    
    const logoutUser = () => {
        setUserData(null);
        localStorage.removeItem('user', JSON.stringify(user))
        navigate(appRoutes.LOGIN);
    }

    return (
        <UserContext.Provider value={{userData, loginUser,  logoutUser}}> 
            {children}
        </UserContext.Provider>
    )

}

