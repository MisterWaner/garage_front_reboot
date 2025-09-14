'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CircleArrowDown } from 'lucide-react';
import landingImage from '../../assets/images/landing.jpg';
import { animate } from 'framer-motion';

export default function BlurIntro() {
    useEffect(() => {
        const imgElement =
            document.querySelector<HTMLImageElement>('.bg-image');
        const overlayElement =
            document.querySelector<HTMLDivElement>('.overlay');
        const titleElement =
            document.querySelector<HTMLHeadingElement>('#title');
        const scrollBtn =
            document.querySelector<HTMLAnchorElement>('.scroll-btn');

        if (!imgElement || !overlayElement || !titleElement || !scrollBtn)
            return;

        animate(0, 100, {
            duration: 2.5,
            ease: 'easeInOut',
            onUpdate: (latest) => {
                const blurValue = Math.max(20 - latest / 5, 0);
                imgElement.style.filter = `blur(${blurValue}px)`;

                const overlayOpacity = Math.max(0.6 - latest / 200, 0);
                overlayElement.style.backgroundColor = `rgba(255, 255, 255, ${overlayOpacity})`;
            },
            onComplete: () => {
                titleElement.style.fontSize = 'clamp(2rem, 5vw, 4rem)';
                titleElement.style.opacity = '1';
                scrollBtn.style.opacity = '1';
            },
        });
    }, []);

    return (
        <div className='relative w-full h-[calc(100vh-var(--header-height))] overflow-hidden'>
            <Image
                width={1920}
                height={1080}
                src={landingImage}
                alt='Landing image'
                className='bg-image absolute top-0 left-0 w-full h-full object-cover blur-sm'
            />
            <div className='overlay absolute inset-0 bg-white/90 flex items-end justify-center'>
                <h1
                    className='font-bold w-full opacity-0 font-montserrat text-white text-center py-4 mb-32'
                    id='title'
                >
                    Bienvenue au Garage Vincent Parrot
                </h1>
                <Link
                    href='#about'
                    className='scroll-btn absolute bottom-5 left-1/2 transform opacity-0 -translate-x-1/2 border-0 cursor-pointer'
                >
                    <CircleArrowDown
                        className='w-10 h-10 text-white text-center animate-bounce '
                        aria-label='Scroll down'
                    />
                </Link>
            </div>
        </div>
    );
}
