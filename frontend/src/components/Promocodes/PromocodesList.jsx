import style_promocodes from '../../css/promocodes.module.css';
import info from '../../img/info.png';
import copy from '../../img/copy.png';

export default function PromocodesList() {
    return (
        <div className={style_promocodes.promocodes_contents}>
            <div className={style_promocodes.content_in_promocodes}>
                <div className={style_promocodes.contents_img}>
                    <p>Выгода 2 000 ₽</p>
                    <img src={info} alt="info" />
                </div>
                <div className={style_promocodes.contents_text}>
                    <p className={style_promocodes.contents_date}>до 31 декабря</p>
                    <p>Отправьте этот промокод друзьям. Каждый получит скидку 2 000 ₽ на первый заказ от 8 000 ₽. А вы — 1 000 рублей за каждого друга. Всего можно пригласить 10 друзей.</p>
                </div>
                <div className={style_promocodes.copy_promocodes}>
                    <img src={copy} alt="copy" />
                    <p>SKID2TTDRUGAYAKA</p>
                </div>
            </div>
        </div>
    );
}