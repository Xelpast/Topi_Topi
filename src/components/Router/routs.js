import Admin_page from "../../Pages/Admin_page"
import Basket_page from "../../Pages/Basket_page"
import Like_page from "../../Pages/Like_page"
import Main_page from "../../Pages/Main_page"
import Order_page from "../../Pages/Order_page"
import Order_pay_page from "../../Pages/Order_pay_page"
import Promocodes_page from "../../Pages/Promocodes_page"
import Topiary_page from "../../Pages/Topiary_page"
import { ADMIN_ROUTE, AUTH_ROUTE, REG_ROUTE, BASKET_ROUTE, LIKE_ROUTE, MAIN_ROUTE, ORDER_PAY_ROUTE, ORDER_ROUTE, PROMOCODES_ROUTE, TOPIARY_ROUTE } from "../../utils/consts"
import Header from "../Header/Header"

export const authRoutes = [
    {
        path: '/admin',
        element: <Admin_page />
    },
    {
        path: '/order',
        element: <Order_page />
    },
    {
        path: '/order_pay', 
        element: <Order_pay_page />
    }
]

export const publicRoutes = [
    {
        path: '/',
        element: <Main_page />
    },
    // {
    //     path: AUTH_ROUTE,
    //     component: Header 
    // },
    // {
    //     path: REG_ROUTE,
    //     component: Header 
    // },
    {
        path: '/like',
        element: <Like_page />
    },
    {
        path: '/promocodes',
        element: <Promocodes_page />
    },
    {
        path: '/basket',
        element: <Basket_page />
    },
    // {
    //     path: TOPIARY_ROUTE + '/:id',
    //     component: Topiary_page
    // }
]