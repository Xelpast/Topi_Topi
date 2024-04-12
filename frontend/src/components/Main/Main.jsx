import SliderOffers from "./SliderOffers";
import main_style from '../../css/main.module.css';
import MainProduct from "./MainProduct";
import SubMainLine from "./SubMainLine";
import CardHitsList from "../Card/CardHitsList";

export default function Main() {
    return (
        <div className={main_style.main}>
            <SubMainLine />
            <SliderOffers />
            <p className={main_style.topi_text}>Хиты</p>
            <div className={main_style.main_hits}>
                <CardHitsList />
            </div>
            <p className={main_style.topi_text}>ТОПиарии</p>
            <MainProduct />
        </div>
    );
}