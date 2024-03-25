import offers_right from "../../img/offers_right.png";
import offers_left from "../../img/offers_left.png";
import mini_offers from "../../img/mini_offers.png";
import Slider from "./Slider";
import { slide_img } from '../../data';
import offers_style from '../../css/main.module.css';

export default function Slider_Offers() {
    return (
        <div className={offers_style.slider_and_offers}>
            <div className={offers_style.adv_left}>
                s
            </div>
            <div className={offers_style.slider_main}>
                <Slider />
            </div>
            <div className={offers_style.adv_right}>
                s
            </div>
        </div>
    );
}