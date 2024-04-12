
    return (
        <div className={style_card_hits.main_card}>
            <div className={style_card_hits.main_card_ring}>
                <div className={style_card_hits.main_card_img}>
                    <img
                        className={style_card_hits.like_img}
                        src={ImageLike ? like : like_red}
                        alt="IconLike"
                        onClick={ImageSwitch}
                    />
                    <img className={style_card_hits.main_img} src={mother_work} alt="TopyProduct" />
                </div>
            </div>
            <div className={style_card_hits.description_card_main}>
                <div className={style_card_hits.description_card_price}>
                    <p className={style_card_hits.price_main}>9 990 ₽</p>
                    <p className={style_card_hits.price_default}><s>12 487 ₽</s></p>
                </div>
                <div className={style_card_hits.description_topi}>
                    <p>Топиарий "Мамины труды"</p>
                </div>
            </div>
            <div className={style_card_hits.button_hits_main}>
                <button className={style_card_hits.button_hits}>В корзину</button>
            </div>
        </div>
    );
}