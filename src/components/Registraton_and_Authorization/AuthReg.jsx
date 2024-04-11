import { useState } from 'react';
import Authorization from './Authorization';
import Registration from './Registration';
import registration_style from '../../css/registration.module.css';
import authorization_style from '../../css/authorization.module.css';
import close_x from '../../img/close_x.png';
import topi_logo from '../../img/logo_topi.png';

export default function AuthReg({ modal_active, setModalActive, registration, setRegistration }) {
    const handleClose_auth = () => {
        setModalActive(false);
    };

    const handleClose_reg = () => {
        setRegistration(false);
    };
    return (
        <>
            <Authorization active={modal_active} setActive={setModalActive}>
                <div className={authorization_style.authorization_form}>
                    <form action="">
                        <div className={authorization_style.close_form}>
                            <p>Авторизация</p>
                            <img src={close_x} alt="" onClick={handleClose_auth} />
                        </div>
                        <img src={topi_logo} alt="" />
                        <div className={authorization_style.form_input_auth}>
                            <input type="text" placeholder="Логин" />
                            <input type="password" placeholder="Пароль" />
                            <button className={authorization_style.btn_auth}>Авториазация</button>
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
                            <img src={close_x} alt="" onClick={handleClose_reg} />
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
                            <img src={topi_logo} alt="" className={registration_style.reg_logo} />
                        </div>
                    </form>
                </div>
            </Registration>
        </>
    );
}