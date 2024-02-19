import arrow_right from '../../img/arrow_right.png';
import arrow_left from '../../img/arrow_left.png';
import slide_1 from '../../img/slide_1.png';
import '../../css/slider.css';


export default function slider() {
    return (
        <div className="slider">
            <img className='slider_img' src={slide_1} alt="" />
            <img className='slider_img' src={slide_1} alt="" />
            <img className='slider_img' src={slide_1} alt="" />
            <img className='slider_img' src={slide_1} alt="" />
            <div>
                <img className="prev controlles" src={arrow_right} alt="" />
            </div>
            <div>
                <img className="next controlles" src={arrow_left} alt="" />
            </div>
        </div>
    );
}





