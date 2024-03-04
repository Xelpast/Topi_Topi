import style_profile from '../../css/profile.module.css';
import Extra_menu_profile from '../Extra_menu/Extra_menu_profile';
import { Link } from 'react-router-dom';

export default function Profile_main() {
    return (
        <div className={style_profile.main}>
            <Extra_menu_profile />
            <div className={style_profile.profile}>
                <p className={style_profile.profile_main}>Профиль</p>
                <div className={style_profile.content_profile}>
                    <div className={style_profile.form_profile}>
                        <form action="">
                            <p>Имя</p>
                            <input type="text" placeholder='Александр' className={style_profile.main_text_form} />

                            <p>Фамилия</p>
                            <input type="text" placeholder='Тарасов' className={style_profile.main_text_form} />

                            <p>Отчество</p>
                            <input type="text" placeholder='Сергеевич' className={style_profile.main_text_form} />

                            <p>Дата рождения</p>
                            <input type="date" className={style_profile.main_text_form} />

                            <p>Пол</p>
                            <div className={style_profile.content_gender}>
                                <label className={style_profile.content_gender_dop}>
                                    <input type="radio" name='gender' value="man" />
                                    <span>Мужской</span>
                                </label>
                                <label className={style_profile.content_gender_dop}>
                                    <input type="radio" name='gender' value="woman" />
                                    <span>Женский</span>
                                </label>
                            </div><br />
                            <p>Номер телефона</p>
                            <input type="text" className={style_profile.main_text_form} placeholder='+7 000 000 00 00' />
                            <p>E-mail</p>
                            <input type="email" className={style_profile.main_text_form} placeholder='topi_topi@gmail.com' />
                            <div className={style_profile.text_agreement_policy}>
                                <label>
                                    <input type="checkbox" className={style_profile.main_checkbox} />
                                    <span className={style_profile.custom_checkbox}></span>
                                    Я соглашаюсь на обработку персональных данных, в соответствии с<br /><u><Link to='https://google.com' className={style_profile.link_profile}>Условиями пользования, Политикой обработки персональных данных.</Link></u>
                                </label>
                            </div>
                            <div className={style_profile.btn_profile}>
                                <button className={style_profile.btn_save_info}>Сохранить настройки</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}