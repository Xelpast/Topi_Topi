import { Link } from "react-router-dom";
import topi_logo from '../../img/logo_topi.png';
import close_x from '../../img/close_x.png';
import { header_arr, header_image_arr } from '../../data';
import '../../css/header.css';
import Header_search from './Header_search';
import Header_menu from './Header_menu';
import { useState } from "react";
import Authorization from "../Registraton_and_Authorization/Authorization";
import Registration from "../Registraton_and_Authorization/Registration";

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
            <div className="header">
                <div className="header_band">
                    <Link to="/"><img className="logo" src={topi_logo} alt="" /></Link>
                    <Header_search />
                    <div className="header_menu">
                        <ul>
                            <Link to="/like" className="link"><Header_menu image_header={header_image_arr[0].image_header} title={header_arr[0].title} /></Link>
                            <Link to="/order" className="link"><Header_menu image_header={header_image_arr[1].image_header} title={header_arr[1].title} /></Link>
                            <Link to="/basket" className="link"><Header_menu image_header={header_image_arr[2].image_header} title={header_arr[2].title} /></Link>
                            <Link className="link" onClick={() => setModalActive(true)}><Header_menu image_header={header_image_arr[3].image_header} title={header_arr[3].title} /></Link>
                            <Header_menu image_header={header_image_arr[3].image_header} title={header_arr[4].title} />
                        </ul>
                    </div>
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
                                    <button className="btn_auth">Авториазация</button>
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
                                    <input type="text" placeholder="Никнейм"/>
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
                </div>
            </div>
        </header>
    );
}