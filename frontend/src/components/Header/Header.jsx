import { Link, useNavigate } from "react-router-dom";
import topi_logo from '../../img/logo_topi.png';
import { header_arr, header_image_arr } from '../../data';
import header_style from '../../css/header.module.css';
import HeaderSearch from './HeaderSearch';
import HeaderMenu from './HeaderMenu';
import { useState, useContext, useEffect } from "react";
import AuthReg from "../Registraton_and_Authorization/AuthReg";
import { scrollToTop } from "../../utils/const";
import Burger from "./Burger";
import { Context } from "../../index";
import { observer } from "mobx-react";
import { fetchUserCart } from "../../http/basketApi";

const Header = observer(() => {
    const { userState } = useContext(Context);
    const navigate = useNavigate();
    const [modalActive, setModalActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [basketCount, setBasketCount] = useState(0);

    const updateBasketCount = async () => {
        try {
            const basket = await fetchUserCart();
            if (basket && basket.basket_topiaries) {
                setBasketCount(basket.basket_topiaries.length);
            } else {
                setBasketCount(0);
            }
        } catch (error) {
            console.error('Ошибка при получении информации о корзине:', error);
        }
    };

    useEffect(() => {
        updateBasketCount();
    }, []);

    const handleProfileClick = () => {
        navigate("/profile", { replace: true });
    };

    return (
        <header>
            <AuthReg modal_active={modalActive} setModalActive={setModalActive} />
            <div className={header_style.header}>
                <div className={header_style.header_band}>
                    <Link to="/"><img className={header_style.logo} src={topi_logo} alt="TopiLogo" /></Link>
                    <HeaderSearch />
                    <div className={header_style.header_menu}>
                        <ul>
                            <Link to="/like" className={header_style.link}><HeaderMenu image_header={header_image_arr[0].image_header} title={header_arr[0].title} /></Link>
                            <Link to="/order" className={header_style.link}><HeaderMenu image_header={header_image_arr[1].image_header} title={header_arr[1].title} /></Link>
                            <Link to="/basket" className={header_style.link}>
                                <HeaderMenu image_header={header_image_arr[2].image_header} title={header_arr[2].title} />
                                {basketCount > 0 && <span className={header_style.basket_count}>{basketCount}</span>}
                            </Link>
                            {!userState._isAuth ?
                                <Link className={header_style.link} onClick={() => setModalActive(true)}><HeaderMenu image_header={header_image_arr[3].image_header} title={header_arr[3].title} /></Link>
                                : <div className={header_style.link} onClick={handleProfileClick}><HeaderMenu image_header={header_image_arr[5].image_header} title={header_arr[3].title} /></div>}
                            {userState.user.role === "ADMIN" ? <Link to="/admin" className={header_style.link}><HeaderMenu image_header={header_image_arr[6].image_header} title={header_arr[5].title} /></Link> : <Link to="/promocodes" className={header_style.link}><HeaderMenu image_header={header_image_arr[4].image_header} title={header_arr[4].title} /></Link>}
                        </ul>
                        <div className={header_style.burger_menu} onClick={() => setMenuActive(!menuActive)}><span></span></div>
                    </div>
                </div>
            </div>
        </header>
    );
});

export default Header;