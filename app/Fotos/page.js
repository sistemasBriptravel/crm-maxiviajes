'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

import { EffectFade } from 'swiper';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';

export default function Fotos() {

    const [imageData, setImageData] = useState([]);

    // function shuffleArray(array) {
    //     const newArray = [...array];
    //     for (let i = newArray.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    //     }
    //     return newArray;
    // }
    //Paises a mostrar
    //const paisesMezclados = ['Buenos Aires', 'Cancun', 'Lima', 'Miami', 'Venezuela', 'Chile', 'Ecuador', 'Madrid', "Barcelona", 'Chile', 'Colombia'];
    const countriesSelected = ['Buenos Aires', 'Cancun', 'Lima', 'Miami', 'Venezuela', 'Chile', 'Ecuador', 'Madrid', "Barcelona", 'Chile', 'Colombia'];
    //const countriesSelected = shuffleArray(paisesMezclados);

    useEffect(() => {
        async function getServerSideProps() {
            for (var i = 0; i < 8; i++) {
                //const randomImage = Math.floor((Math.random() * (8 - 0 + 1)) + 0);
                //console.log(randomImage)
                const response = await fetch(`https://api.unsplash.com/search/photos?page=0&query=Miami&orientation=landscape&client_id=_Q5-Eko5fvRZ3poT_RakSm4v6Y9aJ7dYdKEntv0E7P8`);
                //const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${countriesSelected[i]}&orientation=landscape&client_id=_Q5-Eko5fvRZ3poT_RakSm4v6Y9aJ7dYdKEntv0E7P8`);
                const unsplashData = await response.json();
                console.log(unsplashData)
                const imageUrl = {
                    image: unsplashData.results[i].urls.raw + "&w=1920&dpr=2",
                    tittle: countriesSelected[i],
                };
                setImageData(prevImageData => [...prevImageData, imageUrl]);
            }
        };
        getServerSideProps();
    }, []);

    const slidesImagenes = [];
    if (imageData != null) {
        for (var j = 0; j < 8; j++) {
            if (imageData[j] != null) {
                slidesImagenes.push(
                    <Image width={1800} height={800} quality={100}
                        className='brip-hero-slide-img' src={imageData[j].image} priority style={{width: "100%"}} />
                )
            }
        }
    }

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {slidesImagenes}
            </div>
        </>
    )
}
