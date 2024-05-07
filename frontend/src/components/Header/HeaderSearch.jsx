import { Link } from 'react-router-dom';
import search from '../../img/search.png';
import header_style from '../../css/header.module.css';
import { useContext, useEffect, useState } from 'react';
import { Context } from "../../index";
import { observer } from 'mobx-react';

const HeaderSearch = observer(() => {
    const { topiary } = useContext(Context);
    const [searchTerm, setSearchTerm] = useState('');

    const filterTopiares = (searchText, topiares) => {
        if (!searchText) {
            return topiares; // Возвращаем все товары, если поисковый запрос пуст
        }
        return topiares.filter(({ name }) => 
            name.toLowerCase().includes(searchText.toLowerCase())
        );
    }

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            const filteredTopiares = filterTopiares(searchTerm, topiary.topiares);
            topiary.setFilteredTopiares(filteredTopiares); // Устанавливаем отфильтрованные товары
        }, 300);

        return () => clearTimeout(debounceTimer);
    }, [searchTerm, topiary.topiares]);

    return (
        <div className={header_style.search}>
            <div className={header_style.search_main}>
                <input className={header_style.search_text} 
                type="text" 
                name="" 
                placeholder="Поиск..." 
                onChange={(search_topi) => setSearchTerm(search_topi.target.value)}/>
                <Link to="/" className={header_style.search_icon}><img src={search} alt="search" /></Link>
            </div>
        </div>
    );
});

export default HeaderSearch;