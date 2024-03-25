import search from '../../img/search.png';
import header_style from '../../css/header.module.css';

export default function Header_search() {
    return (
        <div className={header_style.search}>
            <div className={header_style.search_main}>
                <input className={header_style.search_text} type="text" name="" placeholder="Поиск..." />
                <a href="#" className={header_style.search_icon}><img src={search} alt="search" /></a>
            </div>
        </div>
    );
}