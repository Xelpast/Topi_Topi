import { useState, useEffect } from 'react';
import slider_style from '../../css/slider.module.css';
import { slide_img } from '../../data';
import BtnSlider from './BtnSlider';

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(1);
    
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); 

        return () => clearInterval(interval);
    }, [slideIndex]);

    const nextSlide = () => {
        if(slideIndex !== slide_img.length) {
            setSlideIndex(slideIndex + 1);
        }
        else if(slideIndex === slide_img.length) {
            setSlideIndex(1);
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        }
        else if(slideIndex === 1) {
            setSlideIndex(slide_img.length);
        }
    }

    return (
        <div className={slider_style.container_slider}>
            {slide_img.map((obj, index) => {
                return (
                    <div key={obj.id}
                    className={`${slider_style.slide} ${slideIndex === index + 1 ? slider_style.active_animation : ''}`}>
                        <img src={process.env.PUBLIC_URL + `/Imgs/slide${index + 1}.png`} />
                    </div>
                )
            })}   
            <BtnSlider moveSlide={nextSlide} direction={slider_style.next} />
            <BtnSlider moveSlide={prevSlide} direction={slider_style.prev} />
        </div>
    );
}





