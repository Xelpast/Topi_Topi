import style_like from '../../css/like.module.css';
import Extra_menu_like from '../Extra_menu/Extra_menu_like';

export default function Like_main() {
    return(
        <div className={style_like.main}>
            <div className={style_like.dop_main}>
                <Extra_menu_like />
            </div>
        </div>
    );
}