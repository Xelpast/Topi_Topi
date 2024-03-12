import Main_product_list from "./Main_product_list";
import { cards } from '../../data';

export default function Main_product() {
    return (
        <div className="main_goods">
            {cards.map((card, id) => (<Main_product_list key={id} {...card} />))}
        </div>
    );
}