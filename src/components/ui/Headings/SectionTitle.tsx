import React from 'react';

export default function SectionTitle({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <h2
            className={`text-2xl font-semibold font-montserrat mb-4 ${className}`}
        >
            {children}
        </h2>
    );
}
