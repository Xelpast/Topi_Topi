import style_promocodes from '../../css/promocodes.module.css';
import Extra_menu_promocodes from '../Extra_menu/Extra_menu_promocodes';
import Sub_main_line from '../Main/Sub_main_line';
import Promocodes_list from './Promocodes_list';

export default function Promocodes_main() {
    return (
        <div className={style_promocodes.main}>
            <Sub_main_line />
            <div className={style_promocodes.main_content}>
                <Extra_menu_promocodes />
                <div className={style_promocodes.promocodes}>
                    <p className={style_promocodes.promo_main}>Промокоды</p>
                    <div className={style_promocodes.main_info_promo}>
                        <p>Все промокоды</p>
                        <p>Акционерные промокоды</p>
                    </div>
                    <Promocodes_list />
                    <Promocodes_list />
                    <Promocodes_list />
                </div>
            </div>
        </div>
    );
}