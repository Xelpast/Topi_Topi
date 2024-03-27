import Slider_Offers from "./Slider_Offers";
import main_style from '../../css/main.module.css';
import Main_product from "./Main_product";
import Sub_main_line from "./Sub_main_line";
import CardHitsList from "../Card/CardHitsList";

export default function Main() {
    return (
        <div className={main_style.main}>
            <Sub_main_line />
            <Slider_Offers />
            <p className={main_style.topi_text}>Хиты</p>
            <div className={main_style.main_hits}>
                <CardHitsList />
            </div>
            <p className={main_style.topi_text}>ТОПиарии</p>
            <Main_product />
        </div>
    );
}