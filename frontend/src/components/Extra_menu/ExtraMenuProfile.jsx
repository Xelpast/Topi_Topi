import { Link } from 'react-router-dom';
import style_profile from '../../css/profile.module.css';

export default function ExtraMenuProfile() {
    return (
        <div className={style_profile.dop_info}>
            <p className={style_profile.dop_big_text}>Покупки</p>
            <ul>
                <li className={style_profile.dop_text}>
                    <Link to="/like" className={style_profile.link}><p>Избранное</p></Link>
                    <Link to="/order" className={style_profile.link}><p>Заказы</p></Link>
                    <p>Купленные товары</p>
                    <Link to="/promocodes" className={style_profile.link}><p className={style_profile.underline_promocodes}>Промокоды</p></Link>
                    <p>Отзывы</p>
                    <p>Вопросы о товарах</p>
                </li>
            </ul>

            <p className={style_profile.dop_big_text}>Мой аккаунт</p>
            <ul>
                <li className={style_profile.dop_text}>
                    <p>Личные данные</p>
                    <p>Сохранённые карты</p>
                    <p>Интересы</p>
                    <p>Адреса</p>
                    <p>Настройки профиля</p>
                </li>
            </ul>

            <p className={style_profile.dop_big_text}>Помощь</p>
            <ul>
                <li className={style_profile.dop_text}>
                    <p>Поддержка</p>
                    <p>Ответы на вопросы</p>
                </li>
            </ul>
        </div>
    );
}