import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SubMainLine from '../Main/SubMainLine';
import { scrollToTop } from '../../utils/const';
import { BasketContext } from '../../context/BasketContext';
import { fetchUserOrders, createOrder } from '../../http/orderApi';
import style_order_pay from '../../css/order_pay.module.css';
import back from '../../img/back.png';
import pay from '../../img/pay.png';
import info from '../../img/info.png';
import CardOrder from '../Card/CardOrder';
import { fetchProductById } from '../../http/basketApi';

export default function OrderPayMain() {
    const { basketItems, totalPrice, totalSavings, clearBasket } = useContext(BasketContext);
    const [products, setProducts] = useState([]);
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [promoDiscount, setPromoDiscount] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(totalSavings);

    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const promoCodes = ['SKID1AYAKA', 'SKID5000ZX', 'SKIDZXC444'];

    useEffect(() => {
        const getProductDetails = async () => {
            try {
                const productIds = basketItems.map(item => item.productId);
                const productsData = await fetchProductById(productIds);
                
                if (Array.isArray(productsData.rows)) {
                    const filteredProducts = productsData.rows.filter(product => productIds.includes(product.id));
                    setProducts(filteredProducts);
                } else {
                    console.error('Данные о продуктах не являются массивом:', productsData);
                }
            } catch (error) {
                console.error('Ошибка при получении информации о продуктах:', error);
            }
        };
        
        getProductDetails();
    }, [basketItems]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const fetchedOrders = await fetchUserOrders();
                setOrders(fetchedOrders);
            } catch (error) {
                console.error('Error fetching user orders:', error);
            }
        };

        fetchOrders();
    }, []);

    useEffect(() => {
        setTotalDiscount(totalSavings + discount);
    }, [totalSavings, discount]);

    const applyPromoCode = () => {
        let newPromoDiscount = 0; 
    
        if (!promoCodes.includes(promoCode)) {
            toast.warn('Промокод указан неверно!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
            return;
        }
    
        if (totalPrice > 8000 && promoCode === 'SKID1AYAKA') {
            newPromoDiscount = 2000;
            toast.success('Промокод успешно применен!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
        } else if (totalPrice > 5000 && promoCode === 'SKID5000ZX') {
            newPromoDiscount = 1000;
            toast.success('Промокод успешно применен!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
        } else {
            toast.warn('Для применения промокода сумма заказа должна соответствовать условиям акции', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
            return;
        }
    
        // Обновляем состояние скидки от промокода
        setPromoDiscount(newPromoDiscount);
    };

    const handlePayment = async () => {
        try {
            // Вычисляем общую сумму заказа с учетом скидки от промокода
            const totalPriceAfterDiscount = totalPrice - promoDiscount;
    
            const orderData = {
                items: basketItems,
                totalPrice: totalPriceAfterDiscount,
                discount: totalDiscount,
                promoDiscount: promoDiscount, // Добавляем информацию о скидке от промокода в данные заказа
                date: new Date().toISOString(),
            };
    
            await createOrder(orderData);
            toast.success('Заказ успешно создан!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
    
            clearBasket();
            const newOrders = await fetchUserOrders();
            setOrders(newOrders);
            navigate('/order');
        } catch (error) {
            toast.error('Ошибка при создании заказа!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
            console.log(error);
        }
    };

    return (
        <div className={style_order_pay.main}>
            <SubMainLine />
            <div className={style_order_pay.orders}>
                <div className={style_order_pay.order_main}>
                    <p className={style_order_pay.placing_an_order}>Оформление заказа</p>
                    <p className={style_order_pay.help_text}>Помощь покупателю</p>
                </div>
                <div className={style_order_pay.region_and_btn}>
                    <p className={style_order_pay.region}>Ваш регион: Пензенская область</p>
                    <Link to="/basket" onClick={scrollToTop}><button className={style_order_pay.btn_back_basket}><img src={back} alt="back" className={style_order_pay.back_img} />Вернуться в корзину</button></Link>
                </div>
            </div>
            <div className={style_order_pay.main_info_order}>
                <div className={style_order_pay.main_order_choise}>
                    <p className={style_order_pay.method_of_obtaining}>Выберите способ получения</p>
                    <p>Доставка осуществляется нашим компаньоном GruZ's.</p>
                    <p>Самовывоз доступен благодаря нашим партнёрам.</p>
                    <div className={style_order_pay.line_order}></div>
                    <div className={style_order_pay.option_order}>
                        <div className={style_order_pay.order_delivery_form}>
                            <div className={style_order_pay.content_order}>
                                <label className={style_order_pay.content_order_dop}>
                                    <input type="radio" name='order' value="delivery" />
                                    <span>Доставка</span>
                                    <Link to="https://google.com"><img src={info} alt="info" /></Link>
                                    <p>В течение дня, 0 ₽</p>
                                </label>
                                <div className={style_order_pay.block_info_order}>Товары забирает курьер и везёт на указанный адрес. В течение 1-2 часов заказ будет у Вас.</div>
                            </div><br />
                        </div>
                        <div className={style_order_pay.order_pick_up_form}>
                            <div className={style_order_pay.content_order}>
                                <label className={style_order_pay.content_order_dop}>
                                    <input type="radio" name='order' value="pick_up" />
                                    <span>Самовывоз</span>
                                    <Link to="https://google.com"><img src={info} alt="info" /></Link>
                                    <p>Cо дня заказа</p>
                                </label>
                                <div className={style_order_pay.block_info_order}>Товары можно забрать в течение 7 дней, далее присутствует возможность продлить срок хранения на 3 дня.</div>
                            </div><br />
                        </div>
                    </div>
                    <div className={style_order_pay.order_form}>
                        <p className={style_order_pay.address}>Адрес доставки</p>
                        <div className={style_order_pay.address_and_topi}>
                            <form action="">
                                <div className={style_order_pay.order_form_list}>
                                    <div className={style_order_pay.order_form_dop_list}>
                                        <div>
                                            <p>Подъезд</p>
                                            <input type="text" />
                                        </div>

                                        <div>
                                            <p>Этаж</p>
                                            <input type="text" />
                                        </div>

                                        <div>
                                            <p>Квартира</p>
                                            <input type="text" />
                                        </div>

                                        <div>
                                            <p>Домофон</p>
                                            <input type="text" />
                                        </div>

                                        <div className={style_order_pay.order_textarea}>
                                            <p>Комментарий курьеру</p>
                                            <textarea type="text" placeholder="Пожалуйста оставьте коробку у двери дома..." />
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className={style_order_pay.order_card}>
                                <CardOrder products={products} basketItems={basketItems} />
                            </div>
                            <div className={style_order_pay.promo_and_pay}>
                                <div className={style_order_pay.order_promocodes_main}>
                                    <p className={style_order_pay.promocode_text}>Промокод</p>
                                    <div className={style_order_pay.order_promocodes}>
                                        <input
                                            type="text"
                                            placeholder="Введите промокод"
                                            value={promoCode}
                                            onChange={(e) => setPromoCode(e.target.value)}
                                        />
                                        <button onClick={applyPromoCode}>Применить</button>
                                    </div>
                                </div>
                                <div className={style_order_pay.content_pay_main}>
                                    <p className={style_order_pay.pay_mathod}>Способ оплаты</p>
                                    <div className={style_order_pay.content_pay}>
                                        <label className={style_order_pay.content_pay_dop}>
                                            <input type="radio" name='pay' value="card" />
                                            <span>Банковской картой</span>
                                        </label>
                                        <label className={style_order_pay.content_pay_dop}>
                                            <input type="radio" name='pay' value="cash" />
                                            <span>Наличными</span>
                                        </label>
                                    </div><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style_order_pay.product_price}>
                    <div className={style_order_pay.order_form_pay}>
                        <div className={style_order_pay.order_form_text}>
                            <p className={style_order_pay.order_text}>Заказ</p>
                            <p>{basketItems.length} товара(ов)</p>
                            <p>Доставка: 0 ₽</p>
                            <p>Скидка: {totalDiscount > 0 ? `-${totalDiscount + promoDiscount}  ₽` : `${totalDiscount} ₽`}</p>
                            <p className={style_order_pay.total}>Итого: {totalPrice - promoDiscount} ₽</p>
                        </div>
                        <button className={style_order_pay.btn_pay} onClick={handlePayment}>
                            <img src={pay} alt="pay" />Оплатить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
