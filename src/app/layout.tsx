import type { Metadata } from 'next';
import { Roboto, Montserrat } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
config.autoAddCss = false; // Prevent fontawesome from adding the CSS automatically

import './globals.css';
import Header from '@/components/ui/Header/Header';
import Footer from '@/components/ui/Footer/Footer';

const roboto = Roboto({
    variable: '--font-roboto',
    subsets: ['latin'],
});

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Garage Vincent Parrot',
    description: 'Garage Vincent Parrot - Mécanique et Carrosserie',
};

interface RootLayoutProps {
    children: React.ReactNode;
    hero?: React.ReactNode;
    centered?: boolean;
}

export default function RootLayout({
    children,
    hero,
}: RootLayoutProps) {
    return (
        <html lang='en' className='scroll-smooth'>
            <body
                className={`${roboto.variable} ${montserrat.variable} antialiased bg-slate-50 flex flex-col min-h-screen scroll-smooth`}
            >
                <Header />
                <div className='mt-[var(--header-height)]'>{hero}</div>
                {children}
                <Footer />
            </body>
        </html>
    );
}
