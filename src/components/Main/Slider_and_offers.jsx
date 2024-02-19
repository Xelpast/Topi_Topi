import offers_right from "../../img/offers_right.png";
import offers_left from "../../img/offers_left.png";
import mini_offers from "../../img/mini_offers.png";
import Slider from "./Slider";

export default function Slider_Offers() {
    return (
        <div className="slider_and_offers">
            <img src={offers_left} className="offers_left" alt="" />
            <Slider />
            <img src={offers_right} className="offers_right" alt="" />
            <img src={mini_offers} className="slidemini_offersr_img" alt="" />
        </div>
    );
}