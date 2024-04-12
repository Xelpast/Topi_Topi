import MainProductList from "./MainProductList";
import main_style from '../../css/main.module.css';
import { useContext } from "react";
import { Context } from "../../index";
import { observer } from 'mobx-react';

const Main_product = observer(() => {

    const { topiary } = useContext(Context)
    return (
        <div className={main_style.main_goods}>
            {topiary.topiares.map(topiary => 
             <MainProductList key={topiary.id} topiary={topiary} />   
            )}
        </div>
    );
});

export default Main_product;