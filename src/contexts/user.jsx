import { createContext, useEffect, useState } from "react";
import { appRoutes } from "../lib/appRoutes";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext(null); 

// возврат данных из локального хранил.
// const GetUserFromLocalStorage = () => {
//     return JSON.parse(localStorage.getItem('user'))
// }

const GetUserFromLocalStorage = () => {

    const userData = localStorage.getItem('user');
    if (userData !== null) {
    console.log(userData);
        return JSON.parse(userData);
    }
    return null; // или любое другое значение по умолчанию, если данных пользователя нет в local storage
    
}

export function UserProvider ({ children }) {

    // GetUserFromLocalStorage - сохраненеие авторизации (берем данные из локального хранилища)
    const [userData, setUserData] = useState(GetUserFromLocalStorage());
     
    let navigate = useNavigate();

    const loginUser = (user) =>{
        setUserData(user);
        localStorage.setItem('user', JSON.stringify(user));
        navigate(appRoutes.MAIN);
       
    }
    
    const logoutUser = () => {
        setUserData(null); // обнулили пользователя 
        localStorage.removeItem('user');
        navigate(appRoutes.LOGIN);
        
    }

    useEffect( () => {
        localStorage.setItem('user', JSON.stringify(userData));
    }, [userData]);

    


    return (
        <UserContext.Provider value={{userData, loginUser,  logoutUser}}> 
            {children}
        </UserContext.Provider>
    )

}

