import React from 'react';
import style_topi from '../../css/topi_lego.module.css';
import SubMainLine from '../Main/SubMainLine';
import back from '../../img/back.png';
import { Link } from 'react-router-dom';
import TopiFunc from './TopiFunc';

export default function TopiLegoMain() {
    return (
        <div className={style_topi.main}>
            <SubMainLine />
            <div className={style_topi.topi_ai}>
                <p>AI LEGO Topiary</p>
                <div className={style_topi.topi_description}>
                    <p>ИИ придумает дизайн в стиле LEGO, а если он Вам понравится!</p>
                    <p><b>Наши партнёры</b> сделают конструктор и отправят в любой город России, Беларуси, Казахстана</p>
                    <Link to="/"><button className={style_topi.btn_back_site}><img src={back} alt="back" className={style_topi.back_img} />Вернуться на сайт</button></Link>
                </div>
            </div>
            <div className={style_topi.main_form}>
                <p>Lego x Topi Topi генератор изображений AI</p>
                <TopiFunc />
                <section className={style_topi.section_img}></section>
            </div>
        </div>
    );
}
