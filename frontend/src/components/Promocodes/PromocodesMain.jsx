import style_promocodes from '../../css/promocodes.module.css';
import ExtraMenuPromocodes from '../Extra_menu/ExtraMenuPromocodes';
import SubMainLine from '../Main/SubMainLine';
import PromocodesList from './PromocodesList';

export default function PromocodesMain() {
    return (
        <div className={style_promocodes.main}>
            <SubMainLine />
            <div className={style_promocodes.main_content}>
                <ExtraMenuPromocodes />
                <div className={style_promocodes.promocodes}>
                    <p className={style_promocodes.promo_main}>Промокоды</p>
                    <div className={style_promocodes.main_info_promo}>
                        <p>Все промокоды</p>
                        <p>Акционерные промокоды</p>
                    </div>
                    <PromocodesList />
                    <PromocodesList />
                    <PromocodesList />
                </div>
            </div>
        </div>
    );
}