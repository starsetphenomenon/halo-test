import './Team.scss';
import Title from '../../components/Title/Title';
import React from 'react'
import SubTitle from '../../components/SubTitle/SubTitle';

export default function Team() {
    return (
        <div className="Team">
            <Title>Our Top Team</Title>
            <SubTitle>Learn more about how you can save our planet's nature.</SubTitle>
            <div className="members">
                <div className="member"><img src="/assets/img/team/team1.png" alt="." />
                    <div className="line1">
                        <img src="/assets/img/team/teamLine.svg" alt="" />
                    </div>
                </div>
                <div className="member"><img src="/assets/img/team/team2.png" alt="." /></div>
                <div className="member"><img src="/assets/img/team/team3.png" alt="." />
                    <div className="line2">
                        <img src="/assets/img/team/teamLine.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
