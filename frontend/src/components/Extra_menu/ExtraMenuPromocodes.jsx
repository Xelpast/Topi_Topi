import { Link } from 'react-router-dom';
import style_promocodes from '../../css/promocodes.module.css';

export default function ExtraMenuPromocodes() {
    return (
        <div className={style_promocodes.dop_info}>
            <p className={style_promocodes.dop_big_text}>Покупки</p>
            <ul>
                <li className={style_promocodes.dop_text}>
                    <Link to="/like" className={style_promocodes.link}><p>Избранное</p></Link>
                    <Link to="/order" className={style_promocodes.link}><p>Заказы</p></Link>
                    <p>Купленные товары</p>
                    <p className={style_promocodes.underline_promocodes}>Промокоды</p>
                    <p>Отзывы</p>
                    <p>Вопросы о товарах</p>
                </li>
            </ul>

            <p className={style_promocodes.dop_big_text}>Мой аккаунт</p>
            <ul>
                <li className={style_promocodes.dop_text}>
                    <p>Личные данные</p>
                    <p>Сохранённые карты</p>
                    <p>Интересы</p>
                    <p>Адреса</p>
                    <p>Настройки профиля</p>
                </li>
            </ul>

            <p className={style_promocodes.dop_big_text}>Помощь</p>
            <ul>
                <li className={style_promocodes.dop_text}>
                    <p>Поддержка</p>
                    <p>Ответы на вопросы</p>
                </li>
            </ul>
        </div>
    );
}