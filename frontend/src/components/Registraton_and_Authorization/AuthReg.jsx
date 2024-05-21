import { useContext, useState } from 'react';
import { Context } from '../../index';
import { registrations, authorizations, checkLogin } from '../../http/userApi';
import Authorization from './Authorization';
import Registration from './Registration';
import registration_style from '../../css/registration.module.css';
import authorization_style from '../../css/authorization.module.css';
import close_x from '../../img/close_x.png';
import topi_logo from '../../img/logo_topi.png';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AuthReg = observer(({ modal_active, setModalActive, registration, setRegistration }) => {
    const navigate = useNavigate();
    const { userState } = useContext(Context);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const click_auth = async () => {
        if (!login || !password) {
            toast.warn('Обязательно заполните поля логина и пароля!', {
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
            const data_auth = await authorizations(login, password);
            userState.setUser(data_auth);
            userState.setIsAuth(true);
            handleClose_auth();
            navigate("/");
            window.location.reload();
        } catch (error) {
            toast.error('Неверный логин или пароль!', {
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
    }

    const click_reg = async () => {
        const passwordNumberRegex = /\d/;
        const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
        const letterRegex = /[a-zA-Z]/;

        try {
            const response = await checkLogin(login);
            if (response.success) {
                toast.warn('Пользователь с таким логином уже существует!', {
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
            } else {
                if (!login || !password || !repeatPassword) {
                    toast.warn('Обязательно заполните все поля!', {
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

                if (login.length < 4) {
                    toast.warn('Логин должен содержать не менее 4 символов!', {
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
            
                if (password.length < 6) {
                    toast.warn('Пароль должен содержать не менее 6 символов', {
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
            
                if (!passwordNumberRegex.test(password)) {
                    toast.warn('Пароль должен содержать хотя бы одну цифру!', {
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

                if (!letterRegex.test(password)) {
                    toast.warn('Пароль должен содержать хотя бы одну букву!', {
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
            
                if (!specialCharRegex.test(password)) {
                    toast.warn('Пароль должен содержать хотя бы один спецсимвол!', {
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
            
                if (password === repeatPassword) {
                    let data_reg = await registrations(login, password, repeatPassword);
                    userState.setUser(data_reg);
                    userState.setIsAuth(true);
                    toast.success('Регистрация прошла успешно!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    navigate("/profile");
                } else {
                    toast.error('Пароли не совпадают!', {
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
            }
        } catch (error) {
            toast.warn('Пользователь с таким логином уже существует!', {
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
    }

    const handleClose_auth = () => {
        setModalActive(false);
    };

    const handleClose_reg = () => {
        setRegistration(false);
    };

    return (
        <>
            <Authorization active={modal_active} setActive={setModalActive}>
                <div className={authorization_style.authorization_form}>
                    <form action="">
                        <div className={authorization_style.close_form}>
                            <p>Авторизация</p>
                            <img src={close_x} alt="CloseX" onClick={handleClose_auth} />
                        </div>
                        <img src={topi_logo} alt="TopiLogo" />
                        <div className={authorization_style.form_input_auth}>
                            <input type="text" placeholder="Логин" value={login} onChange={e => setLogin(e.target.value)} autoComplete="current-password"/>
                            <input type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password"/>
                            <button onClick={(e) => {
                                e.preventDefault();
                                click_auth();
                            }} className={authorization_style.btn_auth}>Авторизация</button>
                            <p onClick={(e) => {
                                e.preventDefault();
                                setRegistration(true);
                                setModalActive(false);
                            }}>Нет аккаунта? Регистрация</p>
                        </div>
                    </form>
                </div>
            </Authorization>
            <Registration active={registration} setActive={setRegistration}>
                <div className={registration_style.registration_form}>
                    <form action="">
                        <div className={registration_style.close_form_reg}>
                            <p>Регистрация</p>
                            <img src={close_x} alt="CloseX" onClick={handleClose_reg} />
                        </div>
                        <div className={registration_style.form_input_reg}>
                            <input type="text" placeholder="Логин" value={login} onChange={e => setLogin(e.target.value)} autoComplete="current-password" />
                            <input type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password"/>
                            <input type="password" placeholder="Повторите пароль" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} autoComplete="current-password"/>
                            <button onClick={(e) => {
                                e.preventDefault();
                                click_reg();
                            }} className={registration_style.btn_reg}>Регистрация</button>
                            <p onClick={(f) => {
                                f.preventDefault();
                                setRegistration(false);
                                setModalActive(true);
                            }}>Есть аккаунт? Авторизация</p>
                            <img src={topi_logo} alt="TopiLogo" className={registration_style.reg_logo} />
                        </div>
                    </form>
                </div>
            </Registration>
        </>
    );
});

export default AuthReg;