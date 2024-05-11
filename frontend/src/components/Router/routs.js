import AdminPage from "../../Pages/AdminPage";
import BasketPage from "../../Pages/BasketPage";
import LikePage from "../../Pages/LikePage";
import MainPage from "../../Pages/MainPage";
import OrderPage from "../../Pages/OrderPage";
import OrderPayPage from "../../Pages/OrderPayPage";
import ProfilePage from "../../Pages/ProfilePage";
import PromocodesPage from "../../Pages/PromocodesPage";
import ErrorPage404 from "../../Pages/ErrorPage404";
import TopiLegoPage from "../../Pages/TopiLegoPage";
import TopiaryPage from "../../Pages/TopiaryPage";
import Spinner from "../Spinner/Spinner";

export const authRoutes = [
    // {
    //     path: '/admin',
    //     element: <AdminPage />
    // },
    {
        path: '/order',
        element: <OrderPage />
    },
    {
        path: '/order-pay', 
        element: <OrderPayPage />
    },
    {
        path: '/profile',
        element: <ProfilePage />
    },
]

export const publicRoutes = [
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: '/like',
        element: <LikePage />
    },
    {
        path: '/promocodes',
        element: <PromocodesPage />
    },
    {
        path: '/basket',
        element: <BasketPage />
    },
    {
        path: '/error-404',
        element: <ErrorPage404 />
    },
    {
        path: '/topi-lego',
        element: <TopiLegoPage />
    },
    {
        path: '/topiary/:id?',
        element: <TopiaryPage />
    }
]