import React from 'react';

interface MainWrapperProps {
    centered?: boolean;
    children: React.ReactNode;
}

export default function MainWrapper({
    centered = false,
    children,
}: MainWrapperProps) {
    return (
        <main
            className={`flex-grow ${
                centered
                    ? 'grid place-items-center mx-10 lg:mx-20'
                    : 'mx-10 lg:mx-20 xl:mx-auto xl:max-w-7xl'
            }`}
        >
            {children}
        </main>
    );
}
