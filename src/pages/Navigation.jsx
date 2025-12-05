import { Routes, Route } from "react-router-dom";

import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import ResetPasswordPage from "./ResetPasswordPage/ResetPasswordPage";
import MainPage from "./MainPage/MainPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/resetpassword" element={<ResetPasswordPage/>} />
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    )
}

export default Navigation;