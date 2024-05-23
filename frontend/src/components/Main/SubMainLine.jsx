import { sub_main_list } from "../../data";
import { Link } from "react-router-dom";
import SubMain from "./SubMain";
import sub_main_style from '../../css/main.module.css';

export default function SubMainLine() {
    return (
        <div className={sub_main_style.header_and_sub}>
            <div className={sub_main_style.sub_main}>
                <div className={sub_main_style.sub_main_list}>
                    <Link to="/topi-lego" className={sub_main_style.promocodes_sub_text}><SubMain sub_main_text={sub_main_list[0].sub_main_text} /></Link>
                    <Link to="/promocodes" className={sub_main_style.promocodes_sub_text}><SubMain sub_main_text={sub_main_list[1].sub_main_text} /></Link>
                    <SubMain sub_main_text={sub_main_list[2].sub_main_text} />
                    <SubMain sub_main_text={sub_main_list[3].sub_main_text} />
                    <SubMain sub_main_text={sub_main_list[4].sub_main_text} />
                </div>
                <p className={sub_main_style.city}>Gород</p>
            </div>
        </div>
    );
} 