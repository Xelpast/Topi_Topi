import Goods_list from "./Main_goods_list";
import { cards } from '../../data';

export default function Goods() {
    return (
        <div className="main_goods">
            {cards.map((card) => (<Goods_list {...card} />))}
        </div>
    );
}