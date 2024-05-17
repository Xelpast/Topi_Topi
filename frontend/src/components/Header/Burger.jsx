import { Link } from 'react-router-dom';
import header_style from '../../css/header.module.css';
import { scrollToTop } from "../../utils/const";
import { header_arr, header_image_arr_burger } from '../../data';
import { useState, useContext } from 'react';
import BurgerMenu from './BurgerMenu';
import AuthReg from '../Registraton_and_Authorization/AuthReg';
import { Context } from '../../index';
import { observer } from 'mobx-react';

const Burger = observer(({ active, setActive, basketCount }) => {
    const { userState } = useContext(Context);
    const [modalActive, setModalActive] = useState(false);
    const [registration, setRegistration] = useState(false);

    return (
        <div onClick={() => setActive(false)} className={active ? `${header_style.menu} ${header_style.active}` : `${header_style.menu}` }>
            <AuthReg modal_active={modalActive} setModalActive={setModalActive} registration={registration} setRegistration={setRegistration} />
            <div className={header_style.blur} />
            <div className={header_style.menu_content} onClick={(click) => click.stopPropagation()}>
                <div className={header_style.menu_burger}>
                    <ul>
                        <Link to="/like" className={header_style.link} onClick={scrollToTop}><BurgerMenu image_header_bm={header_image_arr_burger[0].image_header_bm} title={header_arr[0].title} /></Link>
                        <Link to="/order" className={header_style.link} onClick={scrollToTop}><BurgerMenu image_header_bm={header_image_arr_burger[1].image_header_bm} title={header_arr[1].title} /></Link>
                        <Link to="/basket" className={header_style.link} onClick={scrollToTop}>
                            <BurgerMenu image_header_bm={header_image_arr_burger[2].image_header_bm} title={header_arr[2].title} />
                            {basketCount > 0 && <span className={header_style.basket_count}>{basketCount}</span>}
                        </Link>
                        {!userState._isAuth ?
                            <Link className={header_style.link} onClick={() => setModalActive(true)}><BurgerMenu image_header_bm={header_image_arr_burger[3].image_header_bm} title={header_arr[3].title} /></Link>
                            : <Link className={header_style.link} to="/profile" onClick={scrollToTop}><BurgerMenu image_header_bm={header_image_arr_burger[5].image_header_bm} title={header_arr[3].title} /></Link>}
                        {userState.user.role === "ADMIN" ? <Link to="/admin" onClick={scrollToTop} className={header_style.link}><BurgerMenu image_header_bm={header_image_arr_burger[6].image_header_bm} title={header_arr[5].title} /></Link> : <Link to="/promocodes" onClick={scrollToTop} className={header_style.link}><BurgerMenu image_header_bm={header_image_arr_burger[4].image_header_bm} title={header_arr[4].title} /></Link>}
                    </ul>
                </div>
            </div>
        </div>
    );
});

export default Burger;