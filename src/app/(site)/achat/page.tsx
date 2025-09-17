import MainWrapper from "@/components/ui/MainWrapper";
import CarCard from "@/components/Cars/CarCard";

export default function page() {
    return (
        <MainWrapper centered={false}>
            <h1 className='text-center text-2xl my-6 sm:text-3xl lg:text-5xl font-montserrat underline underline-offset-4 decoration-red-500'>
                Nos Occasions
            </h1>
            <section className="flex flex-col gap-4 md:flex-row items-center md:items-stretch font-roboto">
                <ul className="flex flex-wrap justify-center gap-6 w-full px-4">
                    {/* TODO */}
                </ul>
            </section>
        </MainWrapper>
    );
}
