import { Link } from "react-router-dom";
import topi_logo from '../../img/logo_topi.png';
import close_x from '../../img/close_x.png';
import { header_arr, header_image_arr } from '../../data';
import header_style from '../../css/header.module.css';
import registration_style from '../../css/registration.module.css';
import authorization_style from '../../css/authorization.module.css';
import Header_search from './Header_search';
import Header_menu from './Header_menu';
import { useState } from "react";
import Authorization from "../Registraton_and_Authorization/Authorization";
import Registration from "../Registraton_and_Authorization/Registration";
import { scrollToTop } from "../../utils/const";

export default function Header() {
    const [modal_active, setModalActive] = useState(false);
    const [registration, setRegistration] = useState(false);
    const handleClose_auth = () => {
        setModalActive(false);
    };
    const handleClose_reg = () => {
        setRegistration(false);
    };
    return (
        <header>
            <div className={header_style.header}>
                <div className={header_style.header_band}>
                    <Link to="/" onClick={scrollToTop}><img className={header_style.logo} src={topi_logo} alt="" /></Link>
                    <Header_search />
                    <div className={header_style.header_menu}>
                        <ul>
                            <Link to="/like" className={header_style.link} onClick={scrollToTop}><Header_menu image_header={header_image_arr[0].image_header} title={header_arr[0].title} /></Link>
                            <Link to="/order" className={header_style.link} onClick={scrollToTop}><Header_menu image_header={header_image_arr[1].image_header} title={header_arr[1].title} /></Link>
                            <Link to="/basket" className={header_style.link} onClick={scrollToTop}><Header_menu image_header={header_image_arr[2].image_header} title={header_arr[2].title} /></Link>
                            <Link className={header_style.link} onClick={() => setModalActive(true)}><Header_menu image_header={header_image_arr[3].image_header} title={header_arr[3].title} /></Link>
                            <Link className={header_style.link}><Header_menu image_header={header_image_arr[4].image_header} title={header_arr[4].title} /></ Link>
                        </ul>
                    </div>
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
                                    <img src={topi_logo} alt="" className={registration_style.reg_logo}/>
                                </div>
                            </form>
                        </div>
                    </Registration>
                </div>
            </div>
        </header>
    );
}