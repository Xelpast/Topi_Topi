import Admin_page from "../../Pages/Admin_page";
import Basket_page from "../../Pages/Basket_page";
import Like_page from "../../Pages/Like_page";
import Main_page from "../../Pages/Main_page";
import Order_page from "../../Pages/Order_page";
import Order_pay_page from "../../Pages/Order_pay_page";
import Profile_page from "../../Pages/Profile_page";
import Promocodes_page from "../../Pages/Promocodes_page";
import Error_404_page from "../../Pages/Error_404_page";
import TopiLegoPage from "../../Pages/TopiLegoPage";
import Topiary_page from "../../Pages/Topiary_page";
import Authorization from "../Registraton_and_Authorization/Authorization";
import Registration from "../Registraton_and_Authorization/Registration";

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
        path: '/order-pay', 
        element: <Order_pay_page />
    }
]

export const publicRoutes = [
    {
        path: '/',
        element: <Main_page />
    },
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
    {
        path: '/profile',
        element: <Profile_page />
    },
    {
        path: 'error-404',
        element: <Error_404_page />
    },
    {
        path: 'topi-lego',
        element: <TopiLegoPage />
    },
    {
        path: '/profile',
        element: <Profile_page />
    },
    // {
    //     path: '/authorization',
    //     element: <Authorization />
    // },
    // {
    //     path: '/registration',
    //     element: <Registration />
    // }
    {
        path: '/topiary/:id?',
        element: <Topiary_page />
    }
]