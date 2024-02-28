import { sub_main_list } from "../../data";
import Sub_main from "./Sub_main";

export default function Sub_main_line() {
    return (
        <div className="sub_main">
            <div className="sub_main_list">
                <Sub_main sub_main_text={sub_main_list[0].sub_main_text} />
                <a href="/promocodes"><Sub_main sub_main_text={sub_main_list[1].sub_main_text} /></a> 
                <Sub_main sub_main_text={sub_main_list[2].sub_main_text} />
                <Sub_main sub_main_text={sub_main_list[3].sub_main_text} />
                <Sub_main sub_main_text={sub_main_list[4].sub_main_text} />
            </div>
            <p>Gород</p>
        </div>
    );
} 