import Image from 'next/image';
import MainWrapper from '@/components/ui/MainWrapper';
import AnimatedArticle from '@/components/Animated/AnimatedArticle';
import mecanique from '@/assets/images/mecanique.jpg';
import frein from '@/assets/images/frein.jpg';
import moteur from '@/assets/images/moteur.jpg';
import imageSlider2 from '@/assets/images/image_slider2.jpg';

export default function page() {
    return (
        <MainWrapper centered={false}>
            <h1 className='text-center text-2xl my-6 sm:text-3xl lg:text-5xl font-montserrat underline underline-offset-4 decoration-red-500'>
                Mécanique
            </h1>
            <AnimatedArticle>
                <h2 className='text-2xl font-bold font-montserrat mb-4'>
                    Notre{' '}
                    <span className='underline underline-offset-4 decoration-red-500'>
                        Expertise
                    </span>{' '}
                    Mécanique
                </h2>
                <section className='flex flex-col gap-4 md:flex-row items-center md:items-stretch font-roboto'>
                    <Image
                        src={mecanique}
                        alt='un mécanicien travaillant sur une voiture'
                        width={400}
                        height={300}
                        className='rounded-lg shadow-md'
                    />
                    <p className='text-sm md:text-lg md:ml-10'>
                        Avec des années d&apos;expérience dans le domaine de la
                        mécanique automobile, notre équipe de mécaniciens
                        qualifiés est prête à relever tous les défis mécaniques.
                        <br />
                        Que ce soit pour une réparation, un entretien préventif
                        ou une restauration complète, nous mettons à profit
                        notre savoir-faire pour garantir que votre véhicule soit
                        toujours dans un état optimal de fonctionnement.
                    </p>
                </section>
            </AnimatedArticle>

            <AnimatedArticle>
                <h2 className='underline underline-offset-4 decoration-red-500 text-2xl font-bold font-montserrat mb-4'>
                    Qualité et Engagement.
                </h2>
                <section className='flex flex-col gap-4 md:flex-row-reverse items-center md:items-stretch font-roboto'>
                    <Image
                        src={frein}
                        alt='un mécanicien travaillant sur un système de freinage'
                        width={400}
                        height={300}
                        className='rounded-lg shadow-md'
                    />
                    <p className='text-sm md:text-lg md:mr-10'>
                        La qualité est notre credo. Nous nous engageons à
                        n&apos;utiliser que des pièces de rechange de haute
                        qualité et les dernières technologies pour réparer et
                        entretenir votre véhicule. <br />
                        Notre objectif est de prolonger la durée de vie de votre
                        voiture tout en maintenant ses performances à leur
                        meilleur niveau.
                    </p>
                </section>
            </AnimatedArticle>

            <AnimatedArticle>
                <h2 className='underline underline-offset-4 decoration-red-500 text-2xl font-bold font-montserrat mb-4'>
                    Service Personnalisé.
                </h2>
                <section className='flex flex-col gap-4 md:flex-row items-center md:items-stretch font-roboto'>
                    <Image
                        src={moteur}
                        width={400}
                        height={300}
                        className='rounded-lg shadow-md'
                        alt='Un moteur de voiture'
                    />
                    <p className='text-sm md:text-lg md:ml-10'>
                        Chez Garage Vincent Parrot, nous considérons chaque
                        client comme un membre de notre famille automobile.
                        Notre approche personnalisée signifie que nous écoutons
                        attentivement vos besoins, discutons des options et vous
                        tenons informés à chaque étape du processus de
                        réparation. Votre satisfaction est notre priorité
                        absolue.
                    </p>
                </section>
            </AnimatedArticle>

            <AnimatedArticle>
                <h2 className='underline underline-offset-4 decoration-red-500 text-2xl font-bold font-montserrat mb-4'>
                    Nous Contacter
                </h2>
                <section className='flex flex-col gap-4 md:flex-row-reverse items-center md:items-stretch font-roboto'>
                    <Image
                        src={imageSlider2}
                        width={400}
                        height={300}
                        className='rounded-lg shadow-md'
                        alt='Un moteur de voiture'
                    />
                    <p className='text-sm md:text-lg md:mr-10'>
                        N&apos;hésitez pas à nous{' '}
                        <a
                            href='/contact'
                            className='underline underline-offset-4 decoration-red-500'
                        >
                            contacter
                        </a>{' '}
                        pour discuter de vos besoins en matière de mécanique
                        automobile. Que vous ayez besoin d&apos;une simple
                        révision, d&apos;une réparation majeure ou de conseils
                        d&apos;entretien, notre équipe est là pour vous. Nous
                        sommes impatients de vous aider à garder votre véhicule
                        en parfait état de fonctionnement.
                        <br />
                        <br />
                        Chez Garage Vincent Parrot, la mécanique automobile est
                        notre passion et notre promesse de qualité.
                    </p>
                </section>
            </AnimatedArticle>
        </MainWrapper>
    );
}
