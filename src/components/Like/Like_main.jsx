import style_like from '../../css/like.module.css';
import Extra_menu_like from '../Extra_menu/Extra_menu_like';
import Card from '../Card/Card';

export default function Like_main() {
    return (
        <div className={style_like.main}>
            <div className={style_like.dop_main}>
                <Extra_menu_like />
            </div>
            <div className={style_like.likes}>
                <p className={style_like.like_main}>Избранное</p>
                <div className={style_like.main_info_like}>
                    <p>Сохранили</p>
                    <p>Покупали</p>
                </div>
                <div className={style_like.card_like}>
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}