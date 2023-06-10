import { createBrowserRouter } from "react-router-dom";
import { AboutPage, HomePage, LoginPage, MainApp, ErrorPage } from ".";
 
 
export const getRoutes = () => createBrowserRouter([
    {
        path: "/",
        element: <MainApp />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            }
        ]
    }
]);