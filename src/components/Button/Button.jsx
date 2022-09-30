import './Button.scss';
import { useState } from 'react';

export default function Button({ BtnType, children, onClick, preventDef }) {

    const [clicked, setClicked] = useState(false)

    const onBtnClick = (e) => {
        if (onClick) {
            onClick(e);
        }
        if (preventDef) {
            return
        }
        setClicked(true);
        setTimeout(() => {
            setClicked(false)
        }, 1000)
    }

    return (
        <button onClick={onBtnClick} type={BtnType} className={clicked ? "Button clicked" : "Button"}>
            {children}
        </button>
    )
}
