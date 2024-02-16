import search from '../../img/search.png';

export default function Header_search() {
    return (
        <div className="search">
            <div className="search_main">
                <input className="search_text" type="text" name="" placeholder="Поиск..." />
                <a href="#" className="search_icon"><img src={search} alt="search" /></a>
            </div>
        </div>
    );
}