import React, { useContext, useState } from 'react';
import Header from '../components/Header/Header';
import MainProduct from '../components/Main/MainProduct';
import admin_style from '../css/admin.module.css';
import { Context } from '../index';
import { observer } from 'mobx-react';
import AdminForm from '../components/Admin/AdminForm';

const AdminPage = observer(() => {
    const { userState } = useContext(Context);
    const [modalActiveAdmin, setModalActiveAdmin] = useState(false);
    const updateScreen = () => {
        window.location.reload();
    }

    return (
        <>
            <Header />
            <div className={admin_style.main_admin}>
                <AdminForm modalActiveAdmin={modalActiveAdmin} setModalActiveAdmin={setModalActiveAdmin} />
                <div className={admin_style.admin_page}>
                    <p className={admin_style.welcome_admin}>Добро пожаловать, <b>{userState.user.login}</b>, в панель администратора!</p>
                    <div className={admin_style.block_admin}>
                        <button className={admin_style.btn_addNewProduct} onClick={() => setModalActiveAdmin(true)}>Добавить новый товар</button>
                        <button className={admin_style.btn_updateScreen} onClick={updateScreen}>Обновить страницу</button>
                    </div>
                </div>
                <p className={admin_style.ListAll_product}>Список всех ТОПиариев</p>
                <MainProduct />
            </div>
        </>
    );
});

export default AdminPage;
