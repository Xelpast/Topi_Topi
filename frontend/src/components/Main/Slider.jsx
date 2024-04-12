import { useState, useEffect } from 'react';
import slider_style from '../../css/slider.module.css';
import { slideImg } from '../../data';
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
        if (slideIndex !== slideImg.length) {
            setSlideIndex(slideIndex + 1);
        }
        else if (slideIndex === slideImg.length) {
            setSlideIndex(1);
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        }
        else if (slideIndex === 1) {
            setSlideIndex(slideImg.length);
        }
    }

    return (
        <div className={slider_style.container_slider}>
            {slideImg.map((obj, index) => {
                const animationClassSlider = `${slider_style.slide} ${slideIndex === index + 1 ? slider_style.active_animation : ''}`;
                return (
                    <div key={obj.id}
                        className={animationClassSlider}>
                        <img src={process.env.PUBLIC_URL + `/Imgs/slide${index + 1}.png`} alt={`Slide ${index + 1}`} />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={slider_style.next} />
            <BtnSlider moveSlide={prevSlide} direction={slider_style.prev} />
        </div>
    );
}

