import React from 'react';
import Header from '../components/Header/Header';
import error_404 from '../img/error_404.png';

export default function ErrorPage404() {
    return (
        <div>
            <Header />
            <img src={error_404} alt="Error404" style={{width: "100vh", marginTop: "110px", display: "flex", textAlign: "center"}}/>
        </div>
    );
}
