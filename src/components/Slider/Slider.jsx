import './Slider.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slide from '../Slide/Slide';

export default function Slider() {
    return (
        <div className="Slider">
            <Swiper
                pagination={{
                    clickable: true,
                    type: "fraction",
                }}
                slidesPerView={4}
                spaceBetween={50}
                loop={true}
                centeredSlides={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 4,
                        centeredSlides: false,
                    },
                }}
            >

                <SwiperSlide>
                    <div className="zero">
                        .
                    </div>
                    <Slide img="/assets/img/slider/slide3.svg" title="Avoid plastic">Taking on the issue of ensuring
                        access to safe water requires worldwide effort.
                    </Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide img="/assets/img/slider/slide4.svg" title="Choose organic">Taking on the issue of ensuring
                        access to safe water requires worldwide effort.
                    </Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide img="/assets/img/slider/slide5.svg" title="Save watter">Taking on the issue of ensuring
                        access to safe water requires worldwide effort.
                    </Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide img="/assets/img/slider/slide1.svg" title="Plant trees">Taking on the issue of ensuring
                        access to safe water requires worldwide effort.
                    </Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide img="/assets/img/slider/slide2.svg" title="Save watter">Taking on the issue of ensuring
                        access to safe water requires worldwide effort.
                    </Slide>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
