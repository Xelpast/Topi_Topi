import { Link } from 'react-router-dom';
import style_profile from '../../css/profile.module.css';

export default function Extra_menu_profile() {
    return (
        <div className={style_profile.dop_info}>
            <p className={style_profile.dop_big_text}>Покупки</p>
            <ul>
                <li className={style_profile.dop_text}>
                    <p>Избранное</p>
                    <p>Заказы</p>
                    <p>Купленные товары</p>
                    <p className={style_profile.underline_promocodes}>Промокоды</p>
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