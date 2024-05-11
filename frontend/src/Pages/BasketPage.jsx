import Header from "../components/Header/Header";
import BasketMain from "../components/Basket/BasketMain";
import Footer from "../components/Footer/Footer";
import NoAuthUserBasket from "../components/noAuthUser/NoAuthUserBasket";
import { Context } from '../index';
import { useContext } from "react";
import { observer } from "mobx-react";

const BasketPage = observer(() => {
    const { userState } = useContext(Context);
    return (
        <>
            {!userState._isAuth ? (
                <>
                    <NoAuthUserBasket />
                </>
            ) : (
                <>
                    <Header />
                    <BasketMain />
                    <Footer />
                </>
            )
            }
        </>
    );
});

export default BasketPage;