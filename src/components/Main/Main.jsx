import Slider_Offers from "./Slider_and_offers";
import '../../css/main.css';
import Goods from "./Main_goods";

export default function Main() {
    return(
        <div className="main">
            <Slider_Offers />
            <Goods />
        </div>
    );
}