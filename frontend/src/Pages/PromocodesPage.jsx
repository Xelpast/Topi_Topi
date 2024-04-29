import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PromocodesMain from "../components/Promocodes/PromocodesMain";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PromocodesPage() {
    // const [topiaries, setTopiaries] = useState([]);
    // useEffect(() => {
    //   axios.get('http://localhost:5000/api/topiary/')
    //     .then(response => {
    //       setTopiaries(response.data);
    //     })
    //     .catch(error => {
    //       console.error('Error fetching topiaries:', error);
    //     });
    // }, []);
    return (
        <>
            <Header />
            <PromocodesMain />
            {/* {!Array.isArray(topiaries) ? (
            topiaries.rows.map((topiary) => (
              <li key={topiary.id}>
                <h2>{topiary.name}</h2>
                <p>Цена: {topiary.price}</p>
                <img src={topiary.img} alt={topiary.name} />
              </li>
            ))
          ) : (
            <p>Loading...</p>
          )} */}
            <Footer />
        </>
    );
}