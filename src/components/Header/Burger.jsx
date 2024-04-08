import { Link } from 'react-router-dom';
import header_style from '../../css/header.module.css';
import { scrollToTop } from "../../utils/const";
import { header_arr, header_image_arr_burger } from '../../data';
import { useState } from 'react';
import Burger_menu from './Burger_menu';
import AuthReg from '../Registraton_and_Authorization/AuthReg';

export default function Burger({active, setActive}) {
    const [modalActive, setModalActive] = useState(false); 
    const [registration, setRegistration] = useState(false);
    return (
        <div onClick={() => setActive(false)} className={active ? `${header_style.menu} ${header_style.active}` : `${header_style.menu}` }>
            <AuthReg modal_active={modalActive} setModalActive={setModalActive} registration={registration} setRegistration={setRegistration} />
            <div className={header_style.blur} />
            <div className={header_style.menu_content} onClick={(click) => click.stopPropagation()}>
                <div className={header_style.menu_burger}>
                    <ul>
                        <Link to="/like" className={header_style.link} onClick={scrollToTop}><Burger_menu image_header_bm={header_image_arr_burger[0].image_header_bm} title={header_arr[0].title} /></Link>
                        <Link to="/order" className={header_style.link} onClick={scrollToTop}><Burger_menu image_header_bm={header_image_arr_burger[1].image_header_bm} title={header_arr[1].title} /></Link>
                        <Link to="/basket" className={header_style.link} onClick={scrollToTop}><Burger_menu image_header_bm={header_image_arr_burger[2].image_header_bm} title={header_arr[2].title} /></Link>
                        <Link className={header_style.link} onClick={() => setModalActive(true)}><Burger_menu image_header_bm={header_image_arr_burger[3].image_header_bm} title={header_arr[3].title} /></Link>
                        <Link className={header_style.link}><Burger_menu image_header_bm={header_image_arr_burger[4].image_header_bm} title={header_arr[4].title} /></ Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}
