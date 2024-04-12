import style_topiary from '../../css/topiary.module.css';
import SubMainLine from '../Main/SubMainLine';
import ExtraMenuTopiary from '../Extra_menu/ExtraMenuTopiary';
import mother_work from '../../img/mother_work.png';
import CardTopi from '../Card/CardTopi';

export default function Topiary() {
    const topiares = { id: 1, name: 'Топиарий "Мамины труды"', price: 9990, prict_default: 11880, img: mother_work };
    const description =
        [
            { id: 1, title: "Производитель: Topi Topi" },
            { id: 2, title: "Материал: пластик" },
            { id: 3, title: "Размер: 30 см" },
            { id: 4, title: "Вес: 0.5" },
            { id: 5, title: "Категория: лиственные деревья" }
        ];

    return (
        <div className={style_topiary.main}>
            <SubMainLine />
            <div className={style_topiary.main_content}>
                <ExtraMenuTopiary />
                <div className={style_topiary.topiares}>
                    <div className={style_topiary.image_description}>
                        <div className={style_topiary.topiary_image}>
                            <div className={style_topiary.block_image}>
                                <CardTopi />
                            </div>
                        </div>
                        <div className={style_topiary.topiary_description_main}>
                            <div className={style_topiary.topiary_description}>
                                <p className={style_topiary.name_topi}>{topiares.name}</p>
                                {description.map(desc => <p>{desc.title}</p>
                                )}
                            </div>
                            <div className={style_topiary.total_availability}>
                                <div className={style_topiary.total}>
                                    <p className={style_topiary.prices}>Цена: {topiares.prict_default.toLocaleString()} ₽</p>
                                    <p className={style_topiary.total_text}>Скидка 20%</p>
                                    <div className={style_topiary.total_main}><p>Итого: <b>{topiares.price.toLocaleString()} ₽</b></p></div>
                                </div>
                                <div className={style_topiary.аvailability}>
                                    <p>Товар: <b>есть в наличии</b></p>
                                    <div className={style_topiary.button_topi_main}>
                                        <button className={style_topiary.button_topi}>Добавить в корзину</button>
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