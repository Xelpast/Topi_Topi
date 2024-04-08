import offers_right from "../../img/offers_right.png";
import offers_left from "../../img/offers_left.png";
import offers_bottom from "../../img/offers_bottom.png";
import Slider from "./Slider";
import offers_style from '../../css/main.module.css';

export default function Slider_Offers() {
    return (
        <div className={offers_style.main_offers}>
            <div className={offers_style.slider_and_offers}>
                <div className={offers_style.slider_main}>
                    <Slider />
                </div>
                <div className={offers_style.adv_left}>
                    <img src={offers_left} alt="offers topi" />
                </div>
                <div className={offers_style.adv_right}>
                    <img src={offers_right} alt="offers topi" />
                </div>
            </div>
            <div className={offers_style.offres_bottom}>
                <img src={offers_bottom} alt="offers topi" />
            </div>
        </div>
    );
}