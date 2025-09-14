import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className='bg-black text-slate-50 mt-24'>
            <article className='grid lg:grid-cols-3'>
                <section className='p-4 lg:my-auto'>
                    <p className='font-bold italic text-center'>
                        Suivez-nous sur les réseaux sociaux :
                    </p>
                    <div className='flex gap-4 justify-center mt-8'>
                        <Link
                            href='https://www.facebook.com'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <FontAwesomeIcon
                                icon={faFacebook}
                                className='text-slate-50'
                                size='2xl'
                            />
                        </Link>
                        <Link
                            href='https://www.instagram.com'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className='text-slate-50'
                                size='2xl'
                            />
                        </Link>
                        <Link
                            href='https://www.linkedin.com'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className='text-slate-50'
                                size='2xl'
                            />
                        </Link>
                    </div>
                </section>
                <section>planning</section>
                <section className='p-4 lg:my-auto'>
                    <p className='font-bold italic text-center'>
                        Nous contacter :
                    </p>
                    <div className='flex flex-col items-center gap-4 justify-center mt-4'>
                        <p>
                            via le formulaire de{' '}
                            <Link
                                href='/contact'
                                className='underline underline-offset-4 decoration-red-500'
                            >
                                contact
                            </Link>
                        </p>
                        <p className='flex gap-2'>
                            Par mail:
                            <a href='mailto:' className='cursor-pointer'>
                                <FontAwesomeIcon icon={faEnvelope} size='xl' />
                            </a>
                        </p>
                        <p className='flex gap-2'>
                            Par téléphone:
                            <a href='tel:' className='cursor-pointer'>
                                <FontAwesomeIcon icon={faPhone} size='xl' />
                            </a>
                        </p>
                    </div>
                </section>
            </article>
            <hr className='my-4 border-slate-600 w-1/2 mx-auto' />
            <article className='grid lg:grid-cols-2'>
                <section className='p-4 text-center text-xs'>
                    <p>
                        Pour plus d&apos;informations sur l&apos;utilisation de
                        vos données, veuillez consulter{' '}
                        <Link
                            href='/confidentialite'
                            className='underline underline-offset-4 decoration-red-500'
                        >
                            notre politique de confidentialité
                        </Link>
                        .
                    </p>
                </section>
                <section className='p-4 text-center text-xs'>
                    <p>Tous droits réservés &copy; Erwan Soulas - 2025</p>
                </section>
            </article>
        </footer>
    );
}
