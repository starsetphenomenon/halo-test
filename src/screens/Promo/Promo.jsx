import './Promo.scss';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { Parallax } from 'react-scroll-parallax';
import { useEffect, useState } from 'react';

export default function Promo({ winWidth }) {

    const [parallax, setParallax] = useState({
        x: [-50, 50],
        y: [-30, 30],
    })

    useEffect(() => {
        if (winWidth <= 992) {
            setParallax({
                x: [0, 0],
                y: [0, 0],
            })
        }
    }, [winWidth])

    return (
        <div className="Promo">
            <Header />
            <div className="content">

                <div className="info">
                    <Parallax speed={5} translateX={parallax.x}>
                        <h1>
                            Nature needs you
                        </h1>
                    </Parallax>
                    <p>
                        The scale of the challenges facing our planet can seem daunting, but we can all do something.
                    </p>
                    <div className="location-wrapper">
                        <div className="location">
                            <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0C3.134 0 0 3.134 0 7C0 12 7 20 7 20C7 20 14 12 14 7C14 3.134 10.866 0 7 0ZM7 10C5.343 10 4 8.657 4 7C4 5.343 5.343 4 7 4C8.657 4 10 5.343 10 7C10 8.657 8.657 10 7 10Z" fill="#666666" />
                            </svg>
                            <p>Find the place to help</p>
                        </div>
                        <Button BtnType="button">Search</Button>
                    </div>
                </div>

                <Parallax className="parrot" speed={5} translateY={parallax.y}>
                    <div className="parrot">
                        <div className="bg" style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/img/promo/parrot.svg'})`
                        }}>
                            <div className="card" style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/img/promo/card.svg'})`
                            }}>
                                <div className="card-info">
                                    <h3>memebers</h3>
                                    <span>29 128</span>
                                </div>
                                <svg width="48" height="56" viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M46.0001 25.2532C43.1808 12.8408 40.2699 0 22.2209 0C9.96887 0 0 10.0492 0 22.4V56H33.3314V47.6H36.109C39.1727 47.6 41.6643 45.0884 41.6643 42V33.6H48C48 33.6 46.3612 26.8576 46.0001 25.2532ZM22.2209 33.5664C22.2209 33.5664 11.1105 25.424 11.1105 19.3872C11.1105 13.6556 19.7516 11.1636 22.2209 18.6928C24.6902 11.1664 33.3314 13.6556 33.3314 19.3872C33.3314 25.424 22.2209 33.5664 22.2209 33.5664Z" fill="white" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </Parallax>
            </div>
        </div>
    )
}
