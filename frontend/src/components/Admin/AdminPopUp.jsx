import React from 'react';
import admin_style from '../../css/admin.module.css';

export default function AdminPopUp({ modalActiveAdmin, setModalActiveAdmin, children }) {
    return (
        <div className={`${admin_style.modal} ${modalActiveAdmin ? admin_style.active : ''}`} onClick={() => setModalActiveAdmin(false)}>
            <div className={`${admin_style.modal_content} ${modalActiveAdmin ? admin_style.active : ''}`} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}