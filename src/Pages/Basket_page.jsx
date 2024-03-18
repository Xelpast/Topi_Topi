import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Sub_main_line from "../components/Main/Sub_main_line";
import Basket_main from "../components/Basket/Basket_main";
import Footer from "../components/Footer/Footer";
import Authorization from "../components/Registraton_and_Authorization/Authorization";
import Registration from "../components/Registraton_and_Authorization/Registration";
import { Context } from '../index';
import { useState, useContext } from "react";
import topi_logo from '../img/logo_topi.png';
import close_x from '../img/close_x.png';

export default function Basket_page() {
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
                    <Sub_main_line />
                    <div className="isAuthMain">
                        <div className="isAuthMain_block">
                            <p>Вы не авторизованы</p>
                            <p>Войдите в аккаунт</p>
                            <div className="btn_basket">
                                <button className="btn_come" onClick={() => setModalActive(true)}>Войти</button>
                            </div>
                        </div>
                    </div>
                    <Footer />

                    <Authorization active={modal_active} setActive={setModalActive}>
                        <div className="authorization_form">
                            <form action="">
                                <div className="close_form">
                                    <p>Авторизация</p>
                                    <img src={close_x} alt="" onClick={handleClose_auth} />
                                </div>
                                <img src={topi_logo} alt="" />
                                <div className="form_input_auth">
                                    <input type="text" placeholder="Логин" />
                                    <input type="password" placeholder="Пароль" />
                                    <Link to="/profile"><button className="btn_auth">Авториазация</button></Link>
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
                        <div className="registration_form">
                            <form action="">
                                <div className="close_form_reg">
                                    <p>Регистрация</p>
                                    <img src={close_x} alt="" onClick={handleClose_reg} />
                                </div>
                                <div className="form_input_reg">
                                    <input type="text" placeholder="Никнейм" />
                                    <input type="text" placeholder="Логин" />
                                    <input type="password" placeholder="Пароль" />
                                    <input type="password" placeholder="Повторите пароль" />
                                    <button className="btn_reg">Регистрация</button>
                                    <p onClick={(f) => {
                                        f.preventDefault();
                                        setRegistration(false);
                                        setModalActive(true);
                                    }}>Есть аккаунт? Авториазация</p>
                                    <img src={topi_logo} alt="" className="reg_logo" />
                                </div>
                            </form>
                        </div>
                    </Registration>

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
