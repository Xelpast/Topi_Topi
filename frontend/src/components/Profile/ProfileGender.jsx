import style_profile from '../../css/profile.module.css';

export default function ProfileGender() {
    return (
        <div className={style_profile.content_gender}>
            <label className={style_profile.content_gender_dop}>
                <input type="radio" name='gender' value="man" />
                <span>Мужской</span>
            </label>
            <label className={style_profile.content_gender_dop}>
                <input type="radio" name='gender' value="woman" />
                <span>Женский</span>
            </label>
        </div>
    );
}