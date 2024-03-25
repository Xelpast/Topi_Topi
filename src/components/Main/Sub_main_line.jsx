import { sub_main_list } from "../../data";
import { Link } from "react-router-dom";
import Sub_main from "./Sub_main";
import sub_main_style from '../../css/main.module.css';

export default function Sub_main_line() {
    return (
        <div className={sub_main_style.header_and_sub}>
            <div className={sub_main_style.sub_main}>
                <div className={sub_main_style.sub_main_list}>
                    <Sub_main sub_main_text={sub_main_list[0].sub_main_text} />
                    <Link to="/promocodes" className={sub_main_style.promocodes_sub_text}><Sub_main sub_main_text={sub_main_list[1].sub_main_text} /></Link>
                    <Sub_main sub_main_text={sub_main_list[2].sub_main_text} />
                    <Sub_main sub_main_text={sub_main_list[3].sub_main_text} />
                    <Sub_main sub_main_text={sub_main_list[4].sub_main_text} />
                </div>
                <p className={sub_main_style.city}>Gород</p>
            </div>
        </div>
    );
} 