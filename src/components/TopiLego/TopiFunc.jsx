import { useState } from 'react';
import style_topi from '../../css/topi_lego.module.css';
import open_ai from '../../img/open_ai.png';

export default function TopiFunc() {
    const API_KEY = "";
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        setError(null);

        const options = {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "prompt": inputValue,
                "n": 1,
                "size": "1024x1024",
            })
        };

        try {
            const res = await fetch("https://api.openai.com/v1/images/generations", options);
            const data = await res.json();
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleButtonClick = () => {
        handleSubmit();
    };

    return (
        <>
            <div className={style_topi.input_ai}>
                <div className={style_topi.input_main}>
                    <input
                        className={style_topi.input_text}
                        type="text"
                        placeholder="Зимний топиарий в стиле LEGO..."
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
            <section className={style_topi.section_img}></section>
        </>
    );
}
