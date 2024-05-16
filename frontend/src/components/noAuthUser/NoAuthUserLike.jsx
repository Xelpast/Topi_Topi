import { useState } from 'react';
import style_like from '../../css/like.module.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SubMainLine from '../Main/SubMainLine';
import AuthReg from '../Registraton_and_Authorization/AuthReg';
import MainProduct from '../Main/MainProduct';

export default function NoAuthUserLike() {
    const [modal_active, setModalActive] = useState(false);
    const [registrationActive, setRegistrationActive] = useState(false);
    
    return (
        <>
            <Header />
            <AuthReg
                modal_active={modal_active}
                setModalActive={setModalActive}
                registration={registrationActive}
                setRegistration={setRegistrationActive}
            />
            <div className={style_like.isAuthMain}>
                <SubMainLine />
                <div className={style_like.isAuthMain_block}>
                    <p className={style_like.like_clear}>Избранных товаров нет</p>
                    <p>Воспользуйтесь поиском, чтобы найти понравившиеся топиарии.
                    Если у Вас ранее были товары. Войдите, чтобы посмотреть список.</p>
                    <div className={style_like.btn_like_form}>
                        <button className={style_like.btn_come} onClick={() => setModalActive(true)}>Войти</button>
                    </div>
                </div>
                <div className={style_like.recommend_topi}>
                    <p>Рекомендуем</p>
                </div>
                <MainProduct />
            </div>
            <Footer />
        </>
    );
};