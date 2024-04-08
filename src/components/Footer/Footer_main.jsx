import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import vk from '../../img/vk.png';
import telegram from '../../img/telegram.png';
import ok from '../../img/ok.png';
import { scrollToTop } from '../../utils/const';
import footer_style from '../../css/footer.module.css';

export default function footer_main() {
    return (
        <footer>
            <div className={footer_style.footer_main}>
                <div className={footer_style.footer_dop}>
                    <div className={footer_style.footer_topitopi}>
                        <p className={footer_style.footer_text_up}>Topi Topi</p>
                        <div className={footer_style.footer_dop_text}>
                            <p>О компании</p>
                            <p>Контакты</p>
                            <p>Реквизиты</p>
                            <p>Партнёрская программа</p>
                        </div>
                    </div>
                    <div className={footer_style.footer_topitopi}>
                        <p className={footer_style.footer_text_up}>Покупателю</p>
                        <div className={footer_style.footer_dop_text}>
                            <p>Помощь покупателю</p>
                            <p>Доставка</p>
                            <p>Оплата</p>
                            <p>Возврат</p>
                            <p>Кредит</p>
                            <p>Акции</p>
                            <Link to="/promocodes" className={footer_style.link} onClick={scrollToTop}><p>Промокоды</p></Link>
                        </div>
                    </div>
                    <div className={footer_style.footer_topitopi}>
                        <p className={footer_style.footer_text_up}>Продавцам</p>
                        <div className={footer_style.footer_dop_text}>
                            <p>База знаний</p>
                            <p>Вход в личный кабинет</p>
                            <p>Приглашение к сотрудничеству</p>
                        </div>
                    </div>
                    <div className={footer_style.footer_topitopi}>
                            <p className={footer_style.footer_text_up}>Правовая информация</p>
                        <div className={footer_style.footer_dop_text}>
                            <p>Условия пользования сайта</p>
                            <p>Политика обработки персональных данных</p>
                            <p>Условия заказа и доставки</p>
                            <p>Политика cookie-файлов</p>
                        </div>
                    </div>
                    <div className={footer_style.footer_content_dop}>
                        <img src={logo} alt="" className={footer_style.footer_logo} />
                        <p>ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ</p>
                        <div className={footer_style.social_media}>
                            <img src={vk} alt="" />
                            <img src={telegram} alt="" />
                            <img src={ok} alt="" />
                        </div>
                    </div>
                </div>
                <div className={footer_style.footer_info_dop}>
                    <p className={footer_style.footer_number}>Есть вопросы? Звоните 8-800-800-00-00 или 8-400-400-00-00</p>
                    <p className={footer_style.footer_copyright}>© 2022-2023 «Интернет-магазин искуственных деревьев»</p>
                </div>
            </div>
        </footer>
    );
}