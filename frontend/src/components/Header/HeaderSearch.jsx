import { Link, useNavigate } from 'react-router-dom';
import search from '../../img/search.png';
import header_style from '../../css/header.module.css';
import { useContext, useEffect, useRef, useState } from 'react';
import { Context } from "../../index";
import { observer } from 'mobx-react';

const HeaderSearch = observer(() => {
    const { topiary } = useContext(Context);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const ref = useRef(null);

    const refClick = () => {
        const anchorElement = document.getElementById("anchorTopi");
        if (anchorElement) {
            anchorElement.scrollIntoView({ behavior: 'smooth' });
            navigate('/', { state: { afterRedirect: true } });
        } else {
            navigate('/');
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            refClick();
        }
    };

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            const filteredTopiares = filterTopiares(searchTerm, topiary.topiares);
            topiary.setFilteredTopiares(filteredTopiares);
        }, 0);

        return () => clearTimeout(debounceTimer);
    }, [searchTerm, topiary.topiares]);

    const filterTopiares = (searchText, topiares) => {
        if (!searchText) {
            return topiares;
        }
        return topiares.filter(({ name }) =>
            name.toLowerCase().includes(searchText.toLowerCase())
        );
    }

    return (
        <div className={header_style.search} ref={ref}>
            <div className={header_style.search_main}>
                <input className={header_style.search_text}
                    type="text"
                    name=""
                    placeholder="Поиск..."
                    onChange={(search_topi) => setSearchTerm(search_topi.target.value)}
                    onKeyDown={handleKeyDown} />
                <Link onClick={(e) => {
                    e.preventDefault();
                    refClick();
                }} className={header_style.search_icon}><img src={search} alt="search" /></Link>
            </div>
        </div>
    );
});

export default HeaderSearch;