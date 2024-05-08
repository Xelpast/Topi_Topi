import SliderOffers from "./SliderOffers";
import main_style from '../../css/main.module.css';
import MainProduct from "./MainProduct";
import SubMainLine from "./SubMainLine";
import CardHitsList from "../Card/CardHitsList";
import { forwardRef } from "react";

const Main = forwardRef((props, ref) => {
    return (
        <div ref={ref} className={main_style.main}>
            <SubMainLine />
            <SliderOffers />
            <p className={main_style.topi_text}>Хиты</p>
            <div className={main_style.main_hits}>
                <CardHitsList />
            </div>
            <p id="anchorTopi" className={main_style.topi_text}>ТОПиарии</p>
            <MainProduct />
        </div>
    );
});

export default Main;