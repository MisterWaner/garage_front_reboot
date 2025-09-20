import Image from 'next/image';
import MainWrapper from '@/components/ui/MainWrapper';
import PageTitle from '@/components/ui/Headings/PageTitle';
import SectionTitle from '@/components/ui/Headings/SectionTitle';
import AnimatedArticle from '@/components/Animated/AnimatedArticle';
import carrosserie from '@/assets/images/carrosserie.jpg';
import imageSlider3 from '@/assets/images/image_slider3.jpg';
import carCustomized from '@/assets/images/car-customized.jpg';
import nissan from '@/assets/images/nissan_gtr_nismo_2022.jpg';

export default function page() {
    return (
        <MainWrapper centered={false}>
            <PageTitle>Carrosserie</PageTitle>
            <AnimatedArticle>
                <SectionTitle>
                    Notre{' '}
                    <span className='underline underline-offset-4 decoration-red-500'>
                        Expertise
                    </span>{' '}
                    en Carrosserie
                </SectionTitle>
                <section className='flex flex-col gap-4 md:flex-row items-center md:items-stretch font-roboto'>
                    <Image
                        src={carrosserie}
                        alt='un carrossier travaillant sur une voiture'
                        width={400}
                        height={300}
                        className='rounded-lg shadow-md'
                    />
                    <p className='text-sm md:text-lg md:ml-10'>
                        Avec des années d&apos;expérience dans le domaine de la
                        carrosserie automobile, notre équipe de spécialistes
                        qualifiés est prête à redonner à votre véhicule son
                        éclat d&apos;origine. Que ce soit pour la réparation de
                        bosses, la peinture, la rénovation de la carrosserie ou
                        la restauration après un accident, nous mettons notre
                        savoir-faire à votre disposition pour que votre véhicule
                        retrouve son aspect neuf.
                    </p>
                </section>
            </AnimatedArticle>

            <AnimatedArticle>
                <SectionTitle className='underline underline-offset-4 decoration-red-500 '>
                    Qualité et Engagement.
                </SectionTitle>
                <section className='flex flex-col gap-4 md:flex-row-reverse items-center md:items-stretch font-roboto'>
                    <Image
                        src={imageSlider3}
                        alt='un carrossier travaillant sur une voiture'
                        width={400}
                        height={300}
                        className='rounded-lg shadow-md'
                    />
                    <p className='text-sm md:text-lg md:mr-10'>
                        La qualité est notre credo. Nous nous engageons à
                        utiliser les meilleurs matériaux et techniques de
                        réparation pour garantir que votre carrosserie soit
                        restaurée avec le plus grand soin. Votre véhicule mérite
                        d&apos;être traité avec une attention minutieuse, et
                        c&apos;est précisément ce que nous offrons.
                    </p>
                </section>
            </AnimatedArticle>

            <AnimatedArticle>
                <SectionTitle className='underline underline-offset-4 decoration-red-500'>
                    Service Personnalisé.
                </SectionTitle>
                <section className='flex flex-col gap-4 md:flex-row items-center md:items-stretch font-roboto'>
                    <Image
                        src={carCustomized}
                        alt='une voiture personnalisée'
                        width={400}
                        height={300}
                        className='rounded-lg shadow-md'
                    />
                    <p className='text-sm md:text-lg md:ml-10'>
                        Chez Garage V. Parrot, chaque véhicule a son histoire
                        unique, et nous en sommes conscients. Notre approche
                        personnalisée signifie que nous écoutons attentivement
                        vos besoins, discutons des options et travaillons en
                        étroite collaboration avec vous pour vous tenir informé
                        de chaque étape du processus de restauration. Votre
                        satisfaction est notre priorité absolue.
                    </p>
                </section>
            </AnimatedArticle>

            <AnimatedArticle>
                <SectionTitle className='underline underline-offset-4 decoration-red-500'>
                    Nous Contacter
                </SectionTitle>
                <section className='flex flex-col gap-4 md:flex-row-reverse items-center md:items-stretch font-roboto'>
                    <Image
                        src={nissan}
                        alt='une voiture nissan'
                        width={400}
                        height={300}
                        className='rounded-lg shadow-md'
                    />
                    <p className='text-sm md:text-lg md:mr-10'>
                        N&apos;hésitez pas à nous{' '}
                        <a
                            href='/contact'
                            className='underline underline-offset-4 decoration-red-500 font-semibold'
                        >
                            contacter
                        </a>{' '}
                        pour discuter de vos besoins en matière de carrosserie
                        automobile. Que vous ayez besoin d&apos;une réparation
                        mineure, d&apos;une rénovation de carrosserie complète
                        ou d&apos;une peinture sur mesure, notre équipe est là
                        pour vous. Nous sommes impatients de redonner à votre
                        véhicule son aspect d&apos;origine, voire de le
                        transformer en une œuvre d&apos;art roulante.
                        <br />
                        <br />
                        Merci de nous faire confiance pour prendre soin de
                        l&apos;apparence de votre précieux moyen de transport.
                        Chez Garage V. Parrot, la carrosserie automobile est
                        plus qu&apos;une réparation, c&apos;est une restauration
                        de l&apos;âme de votre véhicule.
                    </p>
                </section>
            </AnimatedArticle>
        </MainWrapper>
    );
}
