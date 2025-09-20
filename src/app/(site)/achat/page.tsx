import MainWrapper from '@/components/ui/MainWrapper';
import PageTitle from '@/components/ui/Headings/PageTitle';
import CarCard from '@/components/Cars/CarCard';
import CarFilter from '@/components/Cars/CarFilter';
import { fakedCars } from '@/lib/fakedata';

export default function page() {
    return (
        <MainWrapper centered={true}>
            <PageTitle>Nos Occasions</PageTitle>
            <section className='md:flex gap-6 font-roboto'>
                <CarFilter />
                <ul className='flex flex-wrap justify-center gap-6 w-full px-4'>
                    {fakedCars.map((car) => (
                        <li key={car.immatriculation}>
                            <CarCard car={car} />
                        </li>
                    ))}
                </ul>
            </section>
        </MainWrapper>
    );
}
