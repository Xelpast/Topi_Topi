import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import basket_style from '../../css/basket.module.css'
import { useState } from "react";
import AuthReg from "../Registraton_and_Authorization/AuthReg";
import MainProduct from "../Main/MainProduct";
import SubMainLine from "../Main/SubMainLine";

export default function NoAuthUserBasket() {
    const [modal_active, setModalActive] = useState(false);
    const [registrationActive, setRegistrationActive] = useState(false);

    return (
        <>
            <Header />
            <AuthReg
                modal_active={modal_active}
                setModalActive={setModalActive}
                registration={registrationActive}
                setRegistration={setRegistrationActive}
            />
            <div className={basket_style.isAuthMain}>
                <SubMainLine />
                <div className={basket_style.isAuthMain_block}>
                    <p className={basket_style.basket_clear}>Корзина пуста</p>
                    <p>Воспользуйтесь поиском, чтобы найти необходимые топиарии.
                    Если в Корзине у Вас ранее были товары. Войдите, чтобы посмотреть список.</p>
                    <div className={basket_style.btn_basket_form}>
                        <button className={basket_style.btn_come} onClick={() => setModalActive(true)}>Войти</button>
                    </div>
                </div>
                <div className={basket_style.recommend_topi}>
                    <p>Рекомендуем</p>
                </div>
                <MainProduct />
            </div>
            <Footer />
        </>
    );
}