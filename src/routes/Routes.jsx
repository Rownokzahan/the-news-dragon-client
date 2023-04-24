import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Home/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News";
import LoginLogoutLayout from "../layouts/LoginLogoutLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

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
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },

    {
        path: 'news',
        element: <NewsLayout />,
        children: [
            {
                path: ':id',
                element: <News />,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
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
    }
])

export default router;