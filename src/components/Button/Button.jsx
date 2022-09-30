import './Button.scss';

import React from 'react'

export default function Button({ BtnType, children, onClick }) {
    return (
        <button onClick={onClick} type={BtnType} className="Button">
            {children}
        </button>
    )
}
