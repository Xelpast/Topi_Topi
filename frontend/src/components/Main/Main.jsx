import SliderOffers from "./SliderOffers";
import main_style from '../../css/main.module.css';
import MainProduct from "./MainProduct";
import SubMainLine from "./SubMainLine";
import { forwardRef } from "react";
import CardHits from "../Card/CardHits";
import { addToBasket} from "../../http/basketApi";
import { addToLike, removeToLike } from "../../http/likeApi";

const Main = forwardRef((props, ref) => {
    return (
        <div ref={ref} className={main_style.main}>
            <SubMainLine />
            <SliderOffers />
            <p className={main_style.topi_text}>Хиты</p>
            <div className={main_style.main_hits}>
                <CardHits />
            </div>
            <p id="anchorTopi" className={main_style.topi_text}>ТОПиарии</p>
            <MainProduct />
        </div>
    );
});

export default Main;