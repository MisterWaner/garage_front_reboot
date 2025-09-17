import Image from 'next/image';
import logo from '../../public/logo.png';
import mecanique from '../assets/images/mecanique.jpg';
import carwash from '../assets/images/carwash.jpg';
import route from '../assets/images/route.jpg';
import ReviewSection from '@/components/Reviews/ReviewSection';
import MainWrapper from '@/components/ui/MainWrapper';
import BlurIntro from '@/components/ui/BlurIntro';

export default function Home() {
    return (
        <>
            <BlurIntro />
            <MainWrapper centered={false}>
                <article id='about' className='mt-24'>
                    <h2 className='text-2xl font-semibold font-montserrat mb-4'>
                        Découvrez notre{' '}
                        <span className='underline underline-offset-4 decoration-red-500'>
                            Univers.
                        </span>
                    </h2>

                    <section className='flex flex-col gap-4 md:flex-row items-center md:items-stretch font-roboto'>
                        <Image
                            src={logo}
                            alt='Logo du Garage Vincent Parrot'
                            width={500}
                            height={500}
                            className='md:w-64 rounded-lg'
                            loading='lazy'
                        />
                        <p className='text-lg md:ml-10'>
                            Chez Garage Vincent Parrot, nous croyons que
                            l&apos;automobile est bien plus qu&apos;un simple
                            moyen de transport.
                            <br /> C&apos;est une passion, une extension de
                            votre vie et un symbole de liberté. Notre équipe
                            d&apos;experts est là pour vous accompagner dans
                            tous vos projets automobiles, qu&apos;il
                            s&apos;agisse de l&apos;entretien de votre véhicule,
                            de la réparation de carrosserie ou de la
                            personnalisation de votre voiture. <br />
                            <strong>Notre engagement :</strong> Vous offrir un
                            service de qualité, adapté à vos besoins et à votre
                            budget.
                        </p>
                    </section>
                    <section className='my-10 flex flex-col gap-4 md:flex-row-reverse items-center md:items-stretch font-roboto'>
                        <Image
                            src={mecanique}
                            alt='Un garagiste faisant de la mécanique'
                            width={400}
                            height={400}
                            className='rounded-lg'
                            loading='lazy'
                        />
                        <p className='text-lg md:mr-10'>
                            Notre garage est bien plus qu&apos;un endroit où
                            l&apos;on répare des voitures.
                            <br />
                            C&apos;est un lieu où les moteurs chantent, où les
                            problèmes sont résolus, et où les rêves prennent
                            forme. <br />
                            Que vous ayez besoin de notre service de mécanique
                            pour redonner vie à votre bolide ou de notre service
                            de carrosserie pour lui rendre sa splendeur
                            d&apos;antan, nous sommes là pour répondre à vos
                            besoins avec expertise et passion.
                        </p>
                    </section>
                </article>
                <article>
                    <h2 className='text-2xl font-semibold font-montserrat mb-4'>
                        <span className='underline underline-offset-4 decoration-red-500'>
                            L&apos;Expertise
                        </span>{' '}
                        qui fait la différence.
                    </h2>
                    <section className='flex flex-col gap-4 md:flex-row items-center md:items-stretch font-roboto'>
                        <Image
                            src={carwash}
                            alt='Un lavage de voiture'
                            width={400}
                            height={400}
                            className='rounded-lg'
                            loading='lazy'
                        />
                        <p className='text-lg md:ml-10'>
                            Notre équipe de mécaniciens et de spécialistes en
                            carrosserie est composée de passionné de
                            l&apos;automobile. Chacun d&apos;entre nous est fier
                            de son rôle dans la préservation et
                            l&apos;amélioration de votre véhicule. <br />
                            <strong>Notre engagement :</strong> Vous fournir des
                            services de la plus haute qualité, en utilisant les
                            technologies les plus avancées et les meilleures
                            pratiques de l&apos;industrie.
                        </p>
                    </section>
                    <section className='my-10 flex flex-col gap-4 md:flex-row-reverse items-center md:items-stretch font-roboto'>
                        <Image
                            src={route}
                            alt='une route'
                            width={400}
                            height={400}
                            className='rounded-lg'
                            loading='lazy'
                        />
                        <p className='text-lg md:mr-10'>
                            Pour nous, les voitures sont plus qu&apos;un simple
                            métier, elles sont une passion qui nous anime. Nous
                            organisons régulièrement des événements et des
                            rencontres pour les amateurs de voitures, car nous
                            croyons en la communauté automobile. Rejoignez-nous
                            pour partager votre amour des voitures et découvrez
                            ce que signifie vraiment être un propriétaire de
                            voiture passionné.
                        </p>
                    </section>
                </article>
                <article>
                    <h2 className='text-2xl font-semibold font-montserrat mb-4'>
                        Votre{' '}
                        <span className='underline underline-offset-4 decoration-red-500'>
                            Satisfaction
                        </span>
                        , notre Priorité.
                    </h2>
                    <section className='font-roboto'>
                        <p className='text-lg'>
                            Chez Garage Vincent Parrot, votre satisfaction est
                            notre boussole. Nous comprenons à quel point votre
                            véhicule est important pour vous, c&apos;est
                            pourquoi nous nous efforçons de dépasser vos
                            attentes à chaque visite. <br />
                            Notre approche personnalisée signifie que nous
                            prenons le temps de vous écouter, de comprendre vos
                            besoins et de vous conseiller sur les meilleures
                            solutions pour votre véhicule.
                        </p>
                    </section>
                    <ReviewSection />
                </article>
                <article>
                    <h2 className='text-2xl font-semibold font-montserrat mb-4'>
                        Contactez-nous
                    </h2>
                    <section className='font-roboto'>
                        <p className='text-lg'>
                            Que vous soyez un passionné de voitures classiques,
                            un conducteur au quotidien ou simplement à la
                            recherche d&apos;un service de qualité pour votre
                            véhicule,{' '}
                            <span className='font-bold underline underline-offset-4 decoration-red-500'>
                                Garage Vincent Parrot
                            </span>{' '}
                            est là pour vous. <br />
                            Venez découvrir nos services de mécanique et de
                            carrosserie de classe mondiale et prenez le contrôle
                            de votre expérience automobile. <br />
                        </p>
                        <p className='text-lg mt-8'>
                            Merci de nous faire confiance pour prendre soin de
                            votre précieux moyen de transport. Chez nous
                            l&apos;automobile est bien plus qu&apos;un métier,
                            c&apos;est une passion que nous partageons avec
                            vous.
                        </p>
                    </section>
                </article>
            </MainWrapper>
        </>
    );
}
