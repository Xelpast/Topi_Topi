import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PromocodesMain from "../components/Promocodes/PromocodesMain";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PromocodesPage() {
    return (
        <>
            <Header />
            <PromocodesMain />
            <Footer />
        </>
    );
}