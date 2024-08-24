import HomePage from "../../pages/home";
import LoginPage from "../../pages/login";
import RegisterPage from "../../pages/register";

export const APP_ROUTES = [
    {
        path: '/',
        children: HomePage,
        protected: false,
    },
    {
        path: '/login',
        children: LoginPage,
        protected: false,
    },
    {
        path: '/register',
        children: RegisterPage,
        protected: false,
    },
]