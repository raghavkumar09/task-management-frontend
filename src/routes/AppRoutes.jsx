import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/page";
import Dashboard from "../pages/dashboard/Dashboard";
import UserAuth from "../auth/UserAuth";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserAuth><Dashboard /></UserAuth>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<UserAuth><Home /></UserAuth>} />
                <Route path="/about" element={<UserAuth><About /></UserAuth>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes