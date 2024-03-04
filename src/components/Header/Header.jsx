import { Link } from "react-router-dom";
import topi_logo from '../../img/logo_topi.png';
import { header_arr, header_image_arr } from '../../data';
import '../../css/header.css';
import Header_search from './Header_search';
import Header_menu from './Header_menu';
import Authorization from "../Registraton_and_Authorization/Authorization";
import { useState } from "react";
import Registration from "../Registraton_and_Authorization/Registration";

export default function Header() {
    const [modal_active, setModalActive] = useState(false);
    const [registration, setRegistration] = useState(false);
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
                    <Authorization active={modal_active} setActive={setModalActive} >
                        <form action="">
                            <label>Авторизация</label>
                            <input type="text" />
                            <input type="password" />
                            <button onClick={(e) => {
                                e.preventDefault();
                                setRegistration(true);
                                setModalActive(false);
                            }}><u>Нет аккаунта? Регистрация</u></button>
                        </form>
                    </Authorization>
                    <Registration active={registration} setActive={setRegistration}>
                        <form action="">
                            <label>Регистрация</label>
                            <input type="text" />
                            <input type="password" />
                            <input type="password" />
                            <button onClick={(f) => {
                                f.preventDefault();
                                setRegistration(false);
                                setModalActive(true);
                            }}><u>Есть аккаунт? Авториазация</u></button>
                        </form>
                    </Registration>
                </div>
            </div>
        </header>
    );
}