import style_profile from '../../css/profile.module.css';
import ExtraMenuProfile from '../Extra_menu/ExtraMenuProfile';
import { Link, useNavigate } from 'react-router-dom';
import SubMainLine from '../Main/SubMainLine';
import ProfileGender from './ProfileGender';
import { Context } from "../../index";
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { getUserData } from '../../http/userApi';

export default function ProfileMain() {
    const { user } = useContext(Context);
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await getUserData();
                user.setUser(userData); // Обновляем данные пользователя в хранилище MobX
            } catch (error) {
                console.error('Ошибка при загрузке данных о пользователе:', error);
            }
        };

        fetchUserData(); 
    }, []);

    console.log(userData);

    const logOut = async () => {
        localStorage.removeItem('token'); // Удалить токен из localStorage
        user.setUser({});
        await user.setIsAuth(false); // Ждем обновления статуса аутентификации
        navigate('/');
        window.location.reload();
    }
    return (
        <div className={style_profile.main}>
            <SubMainLine />
            <div className={style_profile.main_content}>
                <ExtraMenuProfile />
                <div className={style_profile.profile}>
                    <p className={style_profile.profile_main}>Профиль</p>
                    <div className={style_profile.content_profile}>
                        <div className={style_profile.form_profile}>
                            <form action="">
                                <p>Имя</p>
                                <input
                                    type="text"
                                    placeholder="Александр"
                                    className={style_profile.main_text_form}
                                    value=""
                                />

                                <p>Фамилия</p>
                                <input type="text" placeholder='Тарасов' className={style_profile.main_text_form} />

                                <p>Отчество</p>
                                <input type="text" placeholder='Сергеевич' className={style_profile.main_text_form} />

                                <p>Дата рождения</p>
                                <input type="date" className={style_profile.main_text_form} />

                                <p>Пол</p>
                                <ProfileGender />
                                <br />
                                <p>Номер телефона</p>
                                <input type="text" className={style_profile.main_text_form} placeholder='+7 000 000 00 00' />
                                <p>E-mail</p>
                                <input type="email" className={style_profile.main_text_form} placeholder='topi_topi@gmail.com' />
                                <div className={style_profile.text_agreement_policy}>
                                    <label>
                                        <input type="checkbox" className={style_profile.main_checkbox} />
                                        <span className={style_profile.custom_checkbox}></span>
                                        Я соглашаюсь на обработку персональных данных, в соответствии с <br /><u><Link to='https://google.com' className={style_profile.link_profile}>Условиями пользования, Политикой обработки персональных данных.</Link></u>
                                    </label>
                                </div>
                                <div className={style_profile.btn_profile}>
                                    <button className={style_profile.btn_save_info}>Сохранить настройки</button>
                                    <button className={style_profile.btn_logout} onClick={() => logOut()}>Выйти из аккаунта</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}