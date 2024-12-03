"use client"

import React, { useEffect, useRef } from 'react';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

const Testimonial: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const keenSliderInstance = useRef<KeenSliderInstance | null>(null);

    useEffect(() => {
        if (sliderRef.current) {
            keenSliderInstance.current = new KeenSlider(sliderRef.current, {
                loop: true,
                defaultAnimation: { duration: 750 },
                slides: { perView: 1, spacing: 16 },
                breakpoints: {
                    '(min-width: 640px)': { slides: { perView: 1.5, spacing: 16 } },
                    '(min-width: 1024px)': { slides: { perView: 3, spacing: 16 } },
                },
                created(slider) {
                    updateSlideStatus(slider);
                },
                slideChanged(slider) {
                    updateSlideStatus(slider);
                },
            });
        }

        return () => {
            keenSliderInstance.current?.destroy();
        };
    }, []);

    const updateSlideStatus = (slider: KeenSliderInstance) => {
        slider.slides.forEach((slide, index) => {
            slide.classList.toggle('opacity-40', index !== slider.track.details.rel);
        });
    };

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
                <h2 className="text-center text-4xl font-bold text-gray-900">
                    Read trusted reviews from our customers
                </h2>

                <div className="mt-8 keen-slider" ref={sliderRef}>
                    <div className="keen-slider__slide opacity-40">
                        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm">
                            <div className="flex items-center gap-4">
                                <img
                                    alt="Customer"
                                    src="https://talksport.com/wp-content/uploads/sites/5/2024/09/Mobile-image.png?strip=all&w=750&h=352&crop=1"
                                    className="rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-lg font-medium text-gray-900">Paul Starr</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </blockquote>
                    </div>
                    {/* Additional slides */}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
