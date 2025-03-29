import { createBrowserRouter } from "react-router";
import { MainPage } from "../pages/main-page";
import App from "../App";
import { ErrorPage } from "../pages/error-page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <MainPage></MainPage>,
            }
        ]
    }

])