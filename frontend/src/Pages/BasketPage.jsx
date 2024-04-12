import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import BasketMain from "../components/Basket/BasketMain";
import Footer from "../components/Footer/Footer";
import Authorization from "../components/Registraton_and_Authorization/Authorization";
import Registration from "../components/Registraton_and_Authorization/Registration";
import basket_style from '../css/basket.module.css';
import authorization_style from '../css/authorization.module.css';
import registration_style from '../css/authorization.module.css';
import { Context } from '../index';
import { useState, useContext } from "react";
import topi_logo from '../img/logo_topi.png';
import close_x from '../img/close_x.png';

export default function BasketPage() {
    const { user } = useContext(Context);
    const [modal_active, setModalActive] = useState(false);
    const [registration, setRegistration] = useState(false);
    const handleClose_auth = () => {
        setModalActive(false);
    };
    const handleClose_reg = () => {
        setRegistration(false);
    };
    return (
        <>
            {!user._isAuth ? (
                <>
                    <Header />
                    <div className={basket_style.isAuthMain}>
                        <div className={basket_style.isAuthMain_block}>
                            <p>Вы не авторизованы</p>
                            <p>Войдите в аккаунт</p>
                            <div className={basket_style.btn_basket_form}>
                                <button className={basket_style.btn_come} onClick={() => setModalActive(true)}>Войти</button>
                            </div>
                        </div>
                    </div>
                    <Footer />

                    <Authorization active={modal_active} setActive={setModalActive}>
                        <div className={authorization_style.authorization_form}>
                            <form action="">
                                <div className={authorization_style.close_form}>
                                    <p>Авторизация</p>
                                    <img src={close_x} alt="CloseX" onClick={handleClose_auth} />
                                </div>
                                <img src={topi_logo} alt="TopiLego" />
                                <div className={authorization_style.form_input_auth}>
                                    <input type="text" placeholder="Логин" />
                                    <input type="password" placeholder="Пароль" />
                                    <Link to='/profile'><button className={authorization_style.btn_auth}>Авториазация</button></Link>
                                    <p onClick={(e) => {
                                        e.preventDefault();
                                        setRegistration(true);
                                        setModalActive(false);
                                    }}>Нет аккаунта? Регистрация</p>
                                </div>
                            </form>
                        </div>
                    </Authorization>
                    <Registration active={registration} setActive={setRegistration}>
                        <div className={registration_style.registration_form}>
                            <form action="">
                                <div className={registration_style.close_form_reg}>
                                    <p>Регистрация</p>
                                    <img src={close_x} alt="CloseX" onClick={handleClose_reg} />
                                </div>
                                <div className={registration_style.form_input_reg}>
                                    <input type="text" placeholder="Никнейм" />
                                    <input type="text" placeholder="Логин" />
                                    <input type="password" placeholder="Пароль" />
                                    <input type="password" placeholder="Повторите пароль" />
                                    <button className={registration_style.btn_reg}>Регистрация</button>
                                    <p onClick={(f) => {
                                        f.preventDefault();
                                        setRegistration(false);
                                        setModalActive(true);
                                    }}>Есть аккаунт? Авториазация</p>
                                    <img src={topi_logo} alt="TopiLogo" className={registration_style.reg_logo}/>
                                </div>
                            </form>
                        </div>
                    </Registration>

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
}
