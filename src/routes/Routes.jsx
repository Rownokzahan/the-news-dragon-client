import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Home/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News";
import LoginLogoutLayout from "../layouts/LoginLogoutLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />, 
            },
        ]
    },

    {
        path: 'category',
        element: <Main />,
        children: [
            {
                path: ':id',
                element: <Category />,
                loader: ({ params }) => fetch(`https://the-news-dragon-server-rownokzahan.vercel.app/categories/${params.id}`)
            }
        ]
    },

    {
        path: 'news',
        element: <NewsLayout />,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://the-news-dragon-server-rownokzahan.vercel.app/news/${params.id}`)
            }
        ]
    },

    {
        path: 'user',
        element: <LoginLogoutLayout />,
        children: [
            {
                path: 'login',
                element:<Login/>
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },

    {
        path: 'terms',
        element: <TermsAndConditions />
    },
])

export default router;