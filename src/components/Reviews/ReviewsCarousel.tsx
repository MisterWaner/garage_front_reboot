'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

import ReviewSlide from './ReviewSlide';
import type { Review } from '@/lib/types';

interface ReviewsCarouselProps {
    reviews: Review[];
    interval?: number;
    snapThreshold?: number;
}

export default function ReviewsCarousel({
    reviews,
    interval = 3000,
    snapThreshold = 0.15,
}: ReviewsCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const viewportRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const startX = useRef<number | null>(null);
    const isDragging = useRef<boolean>(false);
    const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const isPaused = useRef<boolean>(false);

    const startAutoplay = useCallback(() => {
        if (autoplayRef.current) clearInterval(autoplayRef.current);

        if (!isPaused.current) {
            autoplayRef.current = setInterval(() => {
                setCurrentIndex(
                    (prevIndex) => (prevIndex + 1) % reviews.length
                );
            }, interval);
        }
    }, [interval, reviews.length]);

    const stopAutoplay = () => {
        if (autoplayRef.current) clearInterval(autoplayRef.current);
        autoplayRef.current = null;
    };

    useEffect(() => {
        startAutoplay();
        return () => stopAutoplay();
    }, [startAutoplay]);

    useEffect(() => {
        if (!trackRef.current) return;
        trackRef.current.style.transition = 'transform 0.5s ease';
        trackRef.current.style.transform = `translateX(-${
            currentIndex * 100
        }%)`;
    }, [currentIndex]);

    const startDrag = (clientX: number) => {
        isPaused.current = true;
        stopAutoplay();

        startX.current = clientX;
        isDragging.current = true;

        if (trackRef.current) {
            trackRef.current.style.transition = 'none';
        }
    };

    const moveDrag = (clientX: number) => {
        if (!isDragging.current || startX.current === null || !trackRef.current)
            return;

        const vw = viewportRef.current?.clientWidth ?? 1;
        const deltaX = clientX - startX.current;
        const percent = (deltaX / vw) * 100;

        trackRef.current.style.transform = `translateX(calc(${
            -currentIndex * 100 + percent
        }%))`;
    };

    const endDrag = (clientX: number) => {
        if (!isDragging.current || startX.current === null || !trackRef.current)
            return;

        const vw = viewportRef.current?.clientWidth ?? 1;
        const deltaX = clientX - startX.current;
        const shouldNext = deltaX < -vw * snapThreshold;
        const shouldPrev = deltaX > vw * snapThreshold;

        if (shouldNext) setCurrentIndex((prev) => (prev + 1) % reviews.length);
        else if (shouldPrev)
            setCurrentIndex(
                (prev) => (prev - 1 + reviews.length) % reviews.length
            );
        else {
            trackRef.current.style.transition = 'transform 0.5s ease';
            trackRef.current.style.transform = `translateX(-${
                currentIndex * 100
            }%)`;
        }

        // Reset drag state
        startX.current = null;
        isDragging.current = false;

        isPaused.current = false;
        startAutoplay();
    };

    return (
        <div
            ref={viewportRef}
            className='overflow-hidden mt-10 relative w-full max-w-4xl mx-auto select-none'
            onMouseEnter={() => {
                isPaused.current = true;
                stopAutoplay();
            }}
            onMouseLeave={(event) => {
                if (isDragging.current) endDrag(event.clientX);
                isPaused.current = false;
                startAutoplay();
            }}
            onMouseDown={(event) => startDrag(event.clientX)}
            onMouseMove={(event) =>
                isDragging.current && moveDrag(event.clientX)
            }
            onMouseUp={(event) => endDrag(event.clientX)}
            onTouchStart={(event) => startDrag(event.touches[0].clientX)}
            onTouchMove={(event) => moveDrag(event.touches[0].clientX)}
            onTouchEnd={(event) => endDrag(event.changedTouches[0].clientX)}
        >
            <div ref={trackRef} className='flex will-change-transform'>
                {reviews.map((review, index) => (
                    <div key={index} className='basis-full shrink-0 px-4'>
                        <ReviewSlide review={review} />
                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-4 gap-2'>
                {reviews.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                            index === currentIndex
                                ? 'bg-red-500'
                                : 'bg-gray-300'
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}
