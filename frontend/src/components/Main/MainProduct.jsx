import MainProductList from "./MainProductList";
import main_style from '../../css/main.module.css';
import sprout from '../../img/sprout.jpg';
import { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { observer } from 'mobx-react';
import { fetchTopiary } from "../../http/topiaryApi";
import Spinner from "../Spinner/Spinner";

const Main_product = observer(() => {
    const { topiary } = useContext(Context);
    const [filteredTopiares, setFilteredTopiares] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTopiary().then(data => {
            topiary.setTopiares(data.rows);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        setFilteredTopiares(topiary.filteredTopiares);
    }, [topiary.filteredTopiares]);
    
    if (loading) {
        return <Spinner />;
    }

    if (filteredTopiares.length === 0) {
        return (
            <div className={main_style.search_clear}>
                <p>Ой... по вашему запросу ничего не найдено</p>
                <img src={sprout} alt="росток" />
            </div>
        );
    }

    return (
        <div className={main_style.main_goods}>
            {filteredTopiares.map(topiary =>
                <MainProductList key={topiary.id} topiary={topiary} />
            )}
        </div>
    );
});

export default Main_product;