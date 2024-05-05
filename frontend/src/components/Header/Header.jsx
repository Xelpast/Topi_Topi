import { Link, useNavigate } from "react-router-dom";
import topi_logo from '../../img/logo_topi.png';
import { header_arr, header_image_arr } from '../../data';
import header_style from '../../css/header.module.css';
import HeaderSearch from './HeaderSearch';
import HeaderMenu from './HeaderMenu';
import { useState, useContext } from "react";
import AuthReg from "../Registraton_and_Authorization/AuthReg";
import { scrollToTop } from "../../utils/const";
import Burger from "./Burger";
import { Context } from "../../index";
import { observer } from "mobx-react";


const Header = observer(() => {
    const { userState } = useContext(Context);
    const [modalActive, setModalActive] = useState(false);
    const [registration, setRegistration] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    return (
        <header>
            <AuthReg modal_active={modalActive} setModalActive={setModalActive} registration={registration} setRegistration={setRegistration} />
            <div className={header_style.header}>
                <div className={header_style.header_band}>
                    <Link to="/" onClick={scrollToTop}><img className={header_style.logo} src={topi_logo} alt="TopiLogo" /></Link>
                    <HeaderSearch />
                    <div className={header_style.header_menu}>
                        <ul>
                            <Link to="/like" className={header_style.link} onClick={scrollToTop}><HeaderMenu image_header={header_image_arr[0].image_header} title={header_arr[0].title} /></Link>
                            <Link to="/order" className={header_style.link} onClick={scrollToTop}><HeaderMenu image_header={header_image_arr[1].image_header} title={header_arr[1].title} /></Link>
                            <Link to="/basket" className={header_style.link} onClick={scrollToTop}><HeaderMenu image_header={header_image_arr[2].image_header} title={header_arr[2].title} /></Link>
                            {!userState._isAuth ?
                                <Link className={header_style.link} onClick={() => setModalActive(true)}><HeaderMenu image_header={header_image_arr[3].image_header} title={header_arr[3].title} /></Link>
                            : <Link className={header_style.link} to="/profile"><HeaderMenu image_header={header_image_arr[3].image_header} title={header_arr[3].title} /></Link>}
                             <HeaderMenu image_header={header_image_arr[4].image_header} title={header_arr[4].title} />
                        </ul>
                        <div className={header_style.burger_menu} onClick={() => setMenuActive(!menuActive)}><span></span></div>
                    </div>
                </div>
            </div>
            <Burger active={menuActive} setActive={setMenuActive} />
        </header>
    );
})

export default Header;