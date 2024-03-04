import React from 'react';
import '../../css/registration.css';

export default function Registration({active, setActive, children}) {
    return (
        <div className={active ? "modal_reg active" : "modal_reg"} onClick={() => setActive(false)}>
            <div className={active ? "modal_content_reg active" : "modal_content_reg"} onClick={r => r.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}