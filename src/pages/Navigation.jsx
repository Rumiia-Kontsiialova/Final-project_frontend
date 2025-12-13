import { Routes, Route } from "react-router-dom";

import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import ResetPasswordPage from "./ResetPasswordPage/ResetPasswordPage";
import MainPage from "./MainPage/MainPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

import PublicRoute from "../shared/components/PublicRoute/PublicRoute";
import PrivateRoute from "../shared/components/PrivateRoute/PrivateRoute";

const Navigation = () => {
    return (
        <Routes>
            <Route element={<PrivateRoute />}>
                 <Route path="/" element={<MainPage/>} />
            </Route>
           
            {/* <PublicRoute>
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/resetpassword" element={<ResetPasswordPage/>} />
            </PublicRoute> */}
            <Route element={<PublicRoute />}>
                 <Route path="/login" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/resetpassword" element={<ResetPasswordPage/>} />
            </Route>
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    )
}

export default Navigation;