'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Car } from '@/lib/types';
import CarModal from './CarModal';

export default function CarCard({ car }: { car: Car }) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        console.log('Modal toggled');
    };
    return (
        <>
            <div className='overflow-hidden rounded-lg bg-slate-50 w-80 text-slate-950 mt-5 h-fit md:mt-0 shadow-md'>
                <figure>
                    <Image
                        src={`${car.images}`}
                        alt=''
                        className='aspect-video w-full'
                    />
                </figure>
                <div className='p-6'>
                    <header className='mb-4'>
                        <h3 className='text-xl font-medium text-slate-950'>
                            {car.brand} {car.model}
                        </h3>
                        <p className='text-slate-400'>{car.price} €</p>
                    </header>
                    <div>
                        <ul>
                            <li className='mb-2 flex w-3/4 justify-between'>
                                <p className='font-bold'>Année: </p>
                                <p>{car.year}</p>
                            </li>
                            <li className='mb-2 flex w-3/4 justify-between'>
                                <p className='font-bold'>Kilométrage: </p>
                                <p>{car.mileage} km</p>
                            </li>
                            <li className='mb-2 flex w-3/4 justify-between'>
                                <p className='font-bold'>Couleur: </p>
                                <p>{car.color}</p>
                            </li>
                            <li className='mb-2 flex w-3/4 justify-between'>
                                <p className='font-bold'>Carburant: </p>
                                <p>{car.fuel}</p>
                            </li>
                            <li className='mb-2 flex w-3/4 justify-between'>
                                <p className='font-bold'>Transmission: </p>
                                <p>
                                    {car.transmission.charAt(0).toUpperCase() +
                                        car.transmission.slice(1)}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-end p-6 pt-0'>
                    <button
                        className='bg-slate-950 text-slate-50 hover:bg-slate-800 cursor-pointer active:scale-[0.99] font-semibold py-2 px-4 w-full rounded-md'
                        onClick={() => toggleModal()}
                    >
                        En savoir plus
                    </button>
                </div>
            </div>
            {isModalOpen && <CarModal toggleModal={toggleModal} />}
        </>
    );
}
