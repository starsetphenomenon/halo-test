import './Solution.scss';
import React, { useState } from 'react'

export default function Solution({ title, children }) {

    const [solution, setSolution] = useState(false);

    const handleSolution = () => {
        setSolution(prev => !prev)
    }

    return (
        <div className={solution ? "Solution Active" : "Solution"}>
            <div className="heading">
                <h1>{title}</h1>
                <div onClick={handleSolution} className="plus">
                    <span></span>
                    <span></span>
                </div>
            </div>
            <p>
                {children}
            </p>
        </div>
    )
}
