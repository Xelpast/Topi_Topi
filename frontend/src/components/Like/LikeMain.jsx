import style_like from '../../css/like.module.css';
import ExtraMenuLike from '../Extra_menu/ExtraMenuLike';
import SubMainLine from '../Main/SubMainLine';
import CardLike from '../Card/CardLike';

export default function LikeMain() {
    return (
        <div className={style_like.main}>
            <SubMainLine />
            <div className={style_like.main_content}>
                <ExtraMenuLike />
                <div className={style_like.likes}>
                    <p className={style_like.like_main}>Избранное</p>
                    <div className={style_like.main_info_like}>
                        <p>Сохранили</p>
                        <p>Покупали</p>
                    </div>
                    <div className={style_like.card_like}>
                        <CardLike />
                        <CardLike />
                        <CardLike />
                        <CardLike />
                    </div>
                </div>
            </div>
        </div>
    );
}