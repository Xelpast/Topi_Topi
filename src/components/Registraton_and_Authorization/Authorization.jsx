import React from 'react';
import '../../css/authorization.css';

export default function Authorization({active, setActive, children}) {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal_content active" : "modal_content"} onClick={a => a.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}