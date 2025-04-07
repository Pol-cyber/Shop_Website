import { createBrowserRouter } from "react-router";
import { MainPage } from "../pages/main";
import App from "../App";
import { ErrorPage } from "../pages/error-page";
import { AuthPage } from "../pages/auth-page";
import { loginField, registerField } from "../constants/auth-constants";
import { AboutPage } from "../pages/about";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <MainPage></MainPage>,
            },
            {
                path:"register",
                element: <AuthPage fields={registerField} title="Create an account" type="register"></AuthPage>
            },
            {
                path:"login",
                element: <AuthPage fields={loginField} title="Log in to Exclusive" type="login"></AuthPage>
            },
            {
                path:"about",
                element: <AboutPage></AboutPage>
            },
            {
                path: "*",
                element: <ErrorPage />,
            }
        ]
    }
])