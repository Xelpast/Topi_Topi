import { useState } from 'react';
import style_topi from '../../css/topi_lego.module.css';
import open_ai from '../../img/open_ai.png';

import img1 from './imgLego/1.png';
import img2 from './imgLego/2.png';
import img3 from './imgLego/3.png';
import img4 from './imgLego/4.png';

const images = [img1, img2, img3, img4];

export default function TopiFunc() {
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [randomImage, setRandomImage] = useState(null);

    const handleButtonClick = () => {
        // Select a new random image
        setRandomImage(images[Math.floor(Math.random() * images.length)]);
    };

    return (
        <>
            <div className={style_topi.input_ai}>
                <div className={style_topi.input_main}>
                    <input
                        className={style_topi.input_text}
                        type="text"
                        placeholder="Топиарий в стиле LEGO..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <div className={style_topi.input_icon}>
                        <img
                            src={open_ai}
                            alt="open_ai"
                            className={style_topi.submit_icon}
                            onClick={handleButtonClick}
                        />
                    </div>
                </div>
            </div>
            <section className={style_topi.section_img}>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {randomImage && <img src={randomImage} alt="Random LEGO" className={style_topi.random_image} />}
            </section>
        </>
    );
}
