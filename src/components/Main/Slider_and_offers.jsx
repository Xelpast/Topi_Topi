import offers_right from "../../img/offers_right.png";
import offers_left from "../../img/offers_left.png";
import mini_offers from "../../img/mini_offers.png";
import slider from "../../img/slider.png";

export default function Slider_Offers() {
    return (
        <div className="slider_and_offers">
            <img src={offers_left} className="offers_left" alt="" />
            <img src={slider} className="slider_img" alt="" />
            <img src={offers_right} className="offers_right" alt="" />
            <img src={mini_offers} className="slidemini_offersr_img" alt="" />
            <p>ХИТЫ</p>
        </div>
    );
}