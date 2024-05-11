import style_profile from '../../css/profile.module.css';
import { useState } from 'react';

export default function ProfileGender({ gender, setGender }) {
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    return (
        <div className={style_profile.content_gender}>
            <label className={style_profile.content_gender_dop}>
                <input 
                    type="radio" 
                    name="gender" 
                    value="Мужчина" 
                    checked={gender === 'Мужчина'} 
                    onChange={handleGenderChange} 
                />
                <span>Мужской</span>
            </label>
            <label className={style_profile.content_gender_dop}>
                <input 
                    type="radio" 
                    name="gender" 
                    value="Женщина" 
                    checked={gender === 'Женщина'} 
                    onChange={handleGenderChange} 
                />
                <span>Женский</span>
            </label>
        </div>
    );
}