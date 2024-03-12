import Slider_Offers from "./Slider_and_offers";
import '../../css/main.css';
import Main_product from "./Main_product";

export default function Main() {
    return(
        <div className="main">
            <Slider_Offers />
            <p className="topi_text">ТОПиарии</p>
            <Main_product />
        </div>
    );
}