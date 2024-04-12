import React from 'react';
import registration_style from '../../css/registration.module.css';

export default function Registration({active, setActive, children}) {
    return (
        <div className={`${registration_style.modal_reg} ${active ? registration_style.active : ''}`} onClick={() => setActive(false)}>
            <div className={`${registration_style.modal_content_reg} ${active ? registration_style.active : ''}`} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}