import { useSelector } from "react-redux";

import { selectToken, selectUser } from "../../../store/auth/authSelectors";

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const isToken = useSelector(selectToken);
    const user = useSelector(selectUser);

    if(isToken && !user) return <p>Loading....</p>;
    if(!user) return <Navigate to="/login" />;

    return <Outlet />;
}

export default PrivateRoute;