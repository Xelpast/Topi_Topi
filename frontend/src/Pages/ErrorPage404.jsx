import React from 'react';
import Header from '../components/Header/Header';
import error_404 from '../img/error_404.png';
import error_style from '../css/error404.module.css';

export default function ErrorPage404() {
    return (
        <div>
            <Header />
            <img className={error_style.main_error404} src={error_404} alt="Error404" />
        </div>
    );
}
