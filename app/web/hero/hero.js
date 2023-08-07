'use client'

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive'

import { EffectFade } from 'swiper';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import './hero.css'

import dataImg from './images.json'

export default function Hero() {
    const isTabletOrMobile = useMediaQuery({ maxWidth: 980 })

    const dataImagenes = dataImg.dataFotos;
    const slidesImagenes = [];
    if (dataImagenes != null) {
        for (var j = 0; j < dataImagenes.length; j++) {
            if (dataImagenes[j] != null) {
                slidesImagenes.push(
                    <SwiperSlide>
                        <div className='brip-hero-gradient'></div>
                        {isTabletOrMobile ?
                            <Image width={800} height={600} quality={60} className='brip-hero-slide-img' src={dataImagenes[j].imageMobile} alt={`conoce ${dataImagenes[j].tittle} viajando con nosotros`} />
                            :
                            <Image width={1400} height={1080} quality={60} className='brip-hero-slide-img' src={dataImagenes[j].image} alt={`conoce ${dataImagenes[j].tittle} viajando con nosotros`} />
                        }
                        <div className='container-text-hero'>
                            <h3 className='brip-hero-tittle'>Viajá al mejor precio!</h3>
                            <h1 className='brip-hero-subtittle'>{dataImagenes[j].tittle}</h1>
                        </div>
                    </SwiperSlide>
                )
            }
        }
    }

    return (
        <>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                effect="fade"
            >
                {slidesImagenes}
            </Swiper>
        </>
    )
}
