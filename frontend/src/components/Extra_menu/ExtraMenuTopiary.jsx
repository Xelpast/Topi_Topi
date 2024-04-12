import { Link } from 'react-router-dom';
import style_topiary from '../../css/topiary.module.css';

export default function ExtraMenuTopiary() {
    return (
        <div className={style_topiary.dop_info}>
            <p className={style_topiary.dop_big_text}>Покупки</p>
            <ul>
                <li className={style_topiary.dop_text}>
                    <Link to="/like" className={style_topiary.link}><p>Избранное</p></Link>
                    <Link to="/order" className={style_topiary.link}><p>Заказы</p></Link>
                    <p>Купленные товары</p>
                    <Link to="/promocodes" className={style_topiary.link}><p>Промокоды</p></Link>
                    <p>Отзывы</p>
                    <p>Вопросы о товарах</p>
                </li>
            </ul>

            <p className={style_topiary.dop_big_text}>Мой аккаунт</p>
            <ul>
                <li className={style_topiary.dop_text}>
                    <p>Личные данные</p>
                    <p>Сохранённые карты</p>
                    <p>Интересы</p>
                    <p>Адреса</p>
                    <p>Настройки профиля</p>
                </li>
            </ul>

            <p className={style_topiary.dop_big_text}>Помощь</p>
            <ul>
                <li className={style_topiary.dop_text}>
                    <p>Поддержка</p>
                    <p>Ответы на вопросы</p>
                </li>
            </ul>
        </div>
    );
}