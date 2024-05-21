import style_topiary from '../../css/topiary.module.css';
import SubMainLine from '../Main/SubMainLine';
import ExtraMenuTopiary from '../Extra_menu/ExtraMenuTopiary';
import CardTopi from '../Card/CardTopi';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneTopiary } from '../../http/topiaryApi';
import { BasketContext } from '../../context/BasketContext';
import { addToBasket } from '../../http/basketApi';
import { toast } from 'react-toastify';

export default function Topiary() {
    const [topiares, setTopiares] = useState({ info: [] });
    const { id } = useParams();
    const { basketItems, setBasketItems, updateBasketCount } = useContext(BasketContext);

    useEffect(() => {
        fetchOneTopiary(id).then(data => setTopiares(data));
    }, [id]);

    const handleAddToBasketButtonClick = async () => {
        try {
            await addToBasket(topiares.id);
            const updatedBasketItems = [...basketItems, topiares];
            setBasketItems(updatedBasketItems);
            await updateBasketCount();
            toast.success('Товар добавлен в корзину', {
                position: "top-center",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } catch (error) {
            console.error('Ошибка при добавлении товара в корзину:', error);
        }
    };

    return (
        <div className={style_topiary.main}>
            <SubMainLine />
            <div className={style_topiary.main_content}>
                <ExtraMenuTopiary />
                <div className={style_topiary.topiares}>
                    <div className={style_topiary.image_description}>
                        <div className={style_topiary.topiary_image}>
                            <div className={style_topiary.block_image}>
                                <CardTopi topiares={topiares} />
                            </div>
                        </div>
                        <div className={style_topiary.topiary_description_main}>
                            <div className={style_topiary.topiary_description}>
                                <p className={style_topiary.name_topi}>{topiares.name}</p>
                                {topiares.info.map((topiaryInfo, index) => (
                                    <div key={index}>
                                        <p>Производитель: {topiaryInfo.manufacturer}</p>
                                        <p>Материал: {topiaryInfo.material}</p>
                                        <p>Размер: {topiaryInfo.size}</p>
                                        <p>Вес, кг: {topiaryInfo.weight}</p>
                                        <p>Категория: {topiaryInfo.category}</p>
                                    </div>
                                ))}
                            </div>
                            <div className={style_topiary.total_availability}>
                                <div className={style_topiary.total}>
                                    <p className={style_topiary.prices}>Цена: {topiares.price_default} ₽</p>
                                    <div className={style_topiary.total_main}><p>Итого: <b>{topiares.price} ₽</b></p></div>
                                </div>
                                <div className={style_topiary.аvailability}>
                                    <p>Товар: <b>есть в наличии</b></p>
                                    <div className={style_topiary.button_topi_main}>
                                        <button className={style_topiary.button_topi} onClick={handleAddToBasketButtonClick}>
                                            Добавить в корзину
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
