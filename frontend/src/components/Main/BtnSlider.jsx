import React from 'react';
import slider_style from '../../css/slider.module.css';
import leftArrow from '../../img/arrow-left.png';
import rightArrow from '../../img/arrow-right.png';

export default function BtnSlider({ direction, moveSlide }) {
    const conditionClassSlide = direction === `${slider_style.next}` ? `${slider_style.btn_slide} ${slider_style.next}` : `${slider_style.btn_slide} ${slider_style.prev}`;
    return (
        <button onClick={moveSlide} className={conditionClassSlide}>
            <img src={direction === `${slider_style.next}` ? rightArrow : leftArrow} />
        </button>
    );
}

