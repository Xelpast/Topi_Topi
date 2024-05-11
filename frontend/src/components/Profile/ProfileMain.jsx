import style_profile from '../../css/profile.module.css';
import ExtraMenuProfile from '../Extra_menu/ExtraMenuProfile';
import { Link, useNavigate } from 'react-router-dom';
import SubMainLine from '../Main/SubMainLine';
import ProfileGender from './ProfileGender';
import { Context } from "../../index";
import { useContext, useEffect, useState } from 'react';
import { fetchUser, updateUser } from '../../http/userApi';
import { observer } from 'mobx-react';
import { toast } from 'react-toastify';
import Spinner from '../Spinner/Spinner';

const ProfileMain = observer(() => {
    const { userState } = useContext(Context);
    const navigate = useNavigate();
    const [name, setName] = useState(userState.user.name || '');
    const [surname, setSurname] = useState(userState.user.surname || '');
    const [patronymic, setPatronymic] = useState(userState.user.patronymic || '');
    const [gender, setGender] = useState(userState.user.gender || '');
    const [yearOfBirth, setYearOfBirth] = useState(userState.user.year_of_birth || '');
    const [number, setNumber] = useState(userState.user.number || '');
    const [email, setEmail] = useState(userState.user.email || '');
    const [agreed, setAgreed] = useState(false);

    const validateEmail = (email) => {
        // Регулярное выражение для проверки формата email
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!agreed) {
            toast.error('Для продолжения необходимо согласиться с политикой конфиденциальности.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }

        if(!validateEmail(email)) {
            toast.error('Введите корректную почту, пример: topi-topi@mail.ru', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
        
        try {
            const updatedUserData = {
                name,
                surname,
                patronymic,
                gender,
                yearOfBirth,
                number,
                email
            };
            await updateUser(updatedUserData);
            toast.success('Информация успешно обновлена!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } catch (error) {
            toast.error('Ошибка при обновлении информации', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    const logOut = async () => {
        localStorage.removeItem('token'); // Удалить токен из localStorage
        await userState.setIsAuth(false); // Ждем обновления статуса аутентификации
        await userState.setUser({});
        toast.success('Вы успешно вышли из аккаунта!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigate("/");
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
                            <form onSubmit={handleSubmit}>
                                <p>Имя</p>
                                <input
                                    type="text"
                                    placeholder="Введите ваше имя"
                                    className={style_profile.main_text_form}
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />

                                <p>Фамилия</p>
                                <input type="text"
                                    placeholder='Введите вашу фамилию'
                                    className={style_profile.main_text_form}
                                    onChange={(e) => setSurname(e.target.value)}
                                    value={surname}
                                />

                                <p>Отчество</p>
                                <input type="text"
                                    placeholder='Введите ваше отчество (необ.)'
                                    className={style_profile.main_text_form}
                                    onChange={(e) => setPatronymic(e.target.value)}
                                    value={patronymic}
                                />

                                <p>Дата рождения</p>
                                <input type="date"
                                    className={style_profile.main_text_form}
                                    onChange={(e) => setYearOfBirth(e.target.value)}
                                    value={yearOfBirth}
                                />

                                <p>Пол</p>
                                <ProfileGender gender={gender} setGender={setGender} />
                                <br />
                                <p>Номер телефона</p>
                                <input type="tel" pattern="^\+[0-9]{11}$"
                                    className={style_profile.main_text_form}
                                    placeholder='+70000000000'
                                    onChange={(e) => setNumber(e.target.value)}
                                    value={number}
                                    title="Формат: +XXXXXXXXXXX (11), где X - это цифры"
                                />
                                <p>E-mail</p>
                                <input type="email"
                                    className={style_profile.main_text_form}
                                    placeholder='topi-topi@gmail.com'
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                                <div className={style_profile.text_agreement_policy}>
                                    <label>
                                        <input type="checkbox"
                                            className={style_profile.main_checkbox}
                                            checked={agreed}
                                            onChange={(e) => setAgreed(e.target.checked)}
                                        />
                                        <span className={style_profile.custom_checkbox}></span>
                                        Я соглашаюсь на обработку персональных данных, в соответствии с <br /><u>
                                            <Link to='https://google.com' className={style_profile.link_profile} >Условиями пользования, Политикой обработки персональных данных.</Link></u>
                                    </label>
                                </div>
                                <div className={style_profile.btn_profile}>
                                    <button type="submit" className={style_profile.btn_save_info}>Сохранить данные</button>
                                    <button className={style_profile.btn_logout} onClick={() => logOut()}>Выйти из аккаунта</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default ProfileMain;