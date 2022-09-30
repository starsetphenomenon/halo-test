import './GetStarted.scss';

import React, { useState } from 'react'
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import SubTitle from '../../components/SubTitle/SubTitle';
import Solution from '../../components/Solution/Solution';

export default function GetStarted() {

    const [onBook, setOnBook] = useState(false);

    const bookDemo = (e) => {
        e.preventDefault();
        setOnBook(prev => !prev)
    }

    return (
        <div className="GetStarted">
            <form className="form" action=".">
                <div className="form-info">
                    <Title>Get started today!</Title>
                    <SubTitle>Learn more about how you can save our planet's nature.
                        From smart consumption to switching to renewable energy,
                        each of us can do our part to save the planet.</SubTitle>
                </div>
                <div className={onBook ? "form-login pressed" : "form-login"}>
                    <div className="leafBig">
                        <img src="/assets/img/leafBig.svg" alt="" />
                    </div>
                    <div className="leafSmall">
                        <img src="/assets/img/leafSmall.svg" alt="" />
                    </div>
                    <h2>Log In</h2>
                    <input type="text" name="name" placeholder="Name" spellCheck="false" />
                    <input type="email" name="mail" placeholder="Email" spellCheck="false" />
                    <Button onClick={bookDemo} BtnType="submit">Book a demo</Button>
                </div>
            </form>
            <div className="solutions">
                <div className="solutions-info">
                    <Title>Ready to Get started?</Title>
                    <SubTitle>When pattern is mentioned in interior design,
                        it is easy to asso- ciate it with a geometric patterned
                        wallpaper or colourful prints on interior fabrics.
                    </SubTitle>
                    <Button BtnType="button">Contact Us</Button>
                </div>
                <div className="solutions-list">
                    <Solution title="What can I do to protect our planet?">
                        Not to make an open fire in nature and to clean up litter;
                        not to pollute open water bodies; to switch to alternative energy sources;
                        to reduce the use of non-renewable resources
                    </Solution>
                    <Solution title="How to save nature ecology?">
                        Not to make an open fire in nature and to clean up litter;
                        not to pollute open water bodies; to switch to alternative energy sources;
                        to reduce the use of non-renewable resources
                    </Solution>
                    <Solution title="What is nature conservation?">
                        Not to make an open fire in nature and to clean up litter;
                        not to pollute open water bodies; to switch to alternative energy sources;
                        to reduce the use of non-renewable resources
                    </Solution>
                </div>
            </div>
        </div>
    )
}
