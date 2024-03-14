import Header from "../components/Header/Header";
import Sub_main_line from "../components/Main/Sub_main_line";
import Basket_main from "../components/Basket/Basket_main";
import Footer from "../components/Footer/Footer";

export default function Basket_page() {
    const isAuth = false;
    return (
        <>
            {!isAuth ? (
                <>
                    <Header />
                    <Sub_main_line />
                    <div className="isAuthMain">
                        <div className="isAuthMain_block">
                            <p>Вы не авторизованы</p>
                        </div>
                    </div>
                    <Footer />
                </>
            ) : (
                <>
                    <Header />
                    <Sub_main_line />
                    <Basket_main />
                    <Footer />
                </>
            )
            }
        </>
    );
}