import { Navigate, Outlet } from "react-router";
import { appRoutes } from "../../lib/appRoutes";

export default function PrivateRoute ({user}) {
    return user ? <Outlet /> : <Navigate to = {appRoutes.LOGIN}/>
}