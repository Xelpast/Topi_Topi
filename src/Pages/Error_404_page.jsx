import React from 'react';
import Header from '../components/Header/Header';
import error_404 from '../img/error_404.png';

export default function Error_404_page() {
    return (
        <div>
            <Header />
            <img src={error_404} alt="" style={{width: "100vh", marginTop: "5px", display: "flex", textAlign: "center"}}/>
        </div>
    );
}
