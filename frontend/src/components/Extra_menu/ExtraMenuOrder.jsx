import { Link } from 'react-router-dom';
import style_order from '../../css/order.module.css';

export default function ExtraMenuOrder() {
    return (
        <div className={style_order.dop_info}>
            <p className={style_order.dop_big_text}>Покупки</p>
            <ul>
                <li className={style_order.dop_text}>
                    <Link to="/like" className={style_order.link}><p>Избранное</p></Link>
                    <p className={style_order.underline_order}>Заказы</p>
                    <p>Купленные товары</p>
                    <Link to="/promocodes" className={style_order.link}><p>Промокоды</p></Link>
                    <p>Отзывы</p>
                    <p>Вопросы о товарах</p>
                </li>
            </ul>

            <p className={style_order.dop_big_text}>Мой аккаунт</p>
            <ul>
                <li className={style_order.dop_text}>
                    <p>Личные данные</p>
                    <p>Сохранённые карты</p>
                    <p>Интересы</p>
                    <p>Адреса</p>
                    <p>Настройки профиля</p>
                </li>
            </ul>

            <p className={style_order.dop_big_text}>Помощь</p>
            <ul>
                <li className={style_order.dop_text}>
                    <p>Поддержка</p>
                    <p>Ответы на вопросы</p>
                </li>
            </ul>
        </div>
    );
}