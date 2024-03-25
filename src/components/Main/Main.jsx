import Slider_Offers from "./Slider_and_offers";
import main_style from '../../css/main.module.css';
import Main_product from "./Main_product";

export default function Main() {
    return(
        <div className={main_style.main}>
            <Slider_Offers />
            <p className={main_style.topi_text}>ТОПиарии</p>
            <Main_product />
        </div>
    );
}