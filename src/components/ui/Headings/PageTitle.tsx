import React from 'react';

export default function PageTitle({children}: {children: React.ReactNode}) {
    return (
        <h1 className='text-center font-bold text-2xl my-6 sm:text-3xl lg:text-5xl font-montserrat underline underline-offset-4 decoration-red-500'>
            {children}
        </h1>
    );
}
