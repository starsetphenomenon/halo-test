import './Slide.scss';

import React from 'react'

export default function Slide({ img, title, children }) {
    return (
        <div className="Slide">
            <div className="title">{title}</div>
            <img className="cover" src={img} alt="" />
            <img className="bg" src={img} alt="" />
            <img className="bg-shadow" src={img} alt="" />
            <p>{children}</p>
        </div>
    )
}
