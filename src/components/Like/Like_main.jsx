import style_like from '../../css/like.module.css';
import Extra_menu_like from '../Extra_menu/Extra_menu_like';
import Sub_main_line from '../Main/Sub_main_line';
import Card_like from '../Card/Card_like';

export default function Like_main() {
    return (
        <div className={style_like.main}>
            <Sub_main_line />
            <div className={style_like.main_content}>
                <Extra_menu_like />
                <div className={style_like.likes}>
                    <p className={style_like.like_main}>Избранное</p>
                    <div className={style_like.main_info_like}>
                        <p>Сохранили</p>
                        <p>Покупали</p>
                    </div>
                    <div className={style_like.card_like}>
                        <Card_like />
                        <Card_like />
                        <Card_like />
                        <Card_like />
                    </div>
                </div>
            </div>
        </div>
    );
}