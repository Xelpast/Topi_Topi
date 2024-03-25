import React from 'react';
import authorization_style from '../../css/authorization.module.css';

export default function Authorization({ active, setActive, children }) {
    return (
        <div className={`${authorization_style.modal} ${active ? authorization_style.active : ''}`} onClick={() => setActive(false)}>
            <div className={`${authorization_style.modal_content} ${active ? authorization_style.active : ''}`} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}