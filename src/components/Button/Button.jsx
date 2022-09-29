import './Button.scss';

import React from 'react'

export default function Button({ BtnType, children }) {
    return (
        <button type={BtnType} className="Button">
            {children}
        </button>
    )
}