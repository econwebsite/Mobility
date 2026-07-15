import React, { useState, useEffect } from 'react';
import './Homebanner.css';
import banner1 from '../../../assets/homepage/home-banner.jpg';
import banner2 from '../../../assets/homepage/sturdecam57-home-banner.jpg';

const Homebanner = () => {
    const bannersData = [
        {
            id: 1,
            src: banner1,
            alt: 'Banner 1',
            link: null,
        },
        // {
        //     id: 2,
        //     src: banner2,
        //     alt: 'Banner 2',
        //     link: 'https://www.e-consystems.com/nvidia-cameras/jetson-agx-orin-cameras/5mp-ox05b1s-rgb-ir-global-shutter-gmsl2-camera.asp',
        // },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % bannersData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [bannersData.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const renderBannerContent = (banner) => {
        const imageElement = (
            <img
                src={banner.src}
                alt={banner.alt}
                className="homecarousel-image"
            />
        );

        if (banner.link) {
            return (
                <a
                    key={banner.id}
                    href={banner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="banner-link"
                >
                    {imageElement}
                </a>
            );
        }

        return (
            <div key={banner.id} className="banner-item">
                {imageElement}
            </div>
        );
    };

    return (
        <div className="carouselContainer">
            <div
                className="homeBanner"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                role="region"
                aria-label="Image carousel"
            >
                {bannersData.map((banner) => renderBannerContent(banner))}
            </div>
        </div>
    );
};

export default Homebanner;
