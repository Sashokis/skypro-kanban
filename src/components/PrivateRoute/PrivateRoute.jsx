import { Navigate, Outlet } from "react-router";
import { appRoutes } from "../../lib/appRoutes";
import { useUser } from "../../hooks/useUse";

export default function PrivateRoute () {
    const {userData} = useUser();
    console.log(userData);
    return userData ? <Outlet /> : <Navigate to = {appRoutes.LOGIN}/>
}