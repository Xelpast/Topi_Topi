import { Link } from 'react-router-dom';
import search from '../../img/search.png';
import header_style from '../../css/header.module.css';

export default function HeaderSearch() {
    return (
        <div className={header_style.search}>
            <div className={header_style.search_main}>
                <input className={header_style.search_text} type="text" name="" placeholder="Поиск..." />
                <Link to="/" className={header_style.search_icon}><img src={search} alt="search" /></Link>
            </div>
        </div>
    );
}