import { Link } from 'react-router-dom';
import style_basket from '../../css/basket.module.css';

export default function Extra_menu_basket() {
    return (
        <div className={style_basket.dop_info}>
            <p className={style_basket.dop_big_text}>Покупки</p>
            <ul>
                <li className={style_basket.dop_text}>
                    <Link to="/like" className={style_basket.link}><p>Избранное</p></Link>
                    <Link to="/order" className={style_basket.link}><p>Заказы</p></Link>
                    <p>Купленные товары</p>
                    <Link to="/promocodes" className={style_basket.link}><p>Промокоды</p></Link>
                    <p>Отзывы</p>
                    <p>Вопросы о товарах</p>
                </li>
            </ul>

            <p className={style_basket.dop_big_text}>Мой аккаунт</p>
            <ul>
                <li className={style_basket.dop_text}>
                    <p>Личные данные</p>
                    <p>Сохранённые карты</p>
                    <p>Интересы</p>
                    <p>Адреса</p>
                    <p>Настройки профиля</p>
                </li>
            </ul>

            <p className={style_basket.dop_big_text}>Помощь</p>
            <ul>
                <li className={style_basket.dop_text}>
                    <p>Поддержка</p>
                    <p>Ответы на вопросы</p>
                </li>
            </ul>
        </div>
    );
}