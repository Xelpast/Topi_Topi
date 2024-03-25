import Main_product_list from "./Main_product_list";
import { cards } from '../../data';
import main_style from '../../css/main.module.css';

export default function Main_product() {
    return (
        <div className={main_style.main_goods}>
            {cards.map((card, id) => (<Main_product_list key={id} {...card} />))}
        </div>
    );
}