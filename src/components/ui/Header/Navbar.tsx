'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import type { NavbarLink } from '@/lib/types';

const links: NavbarLink[] = [
    { href: '/', label: 'Accueil' },
    { href: '/mecanique', label: 'Mécanique' },
    { href: '/carrosserie', label: 'Carrosserie' },
    { href: '/achat', label: 'Nos Occasions' },
    { href: '/contact', label: 'Contact' },
    { href: '/connexion', label: 'Connexion' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className='bg-black text-slate-50 font-montserrat font-bold w-full'>
            <ul className='hidden lg:flex items-center justify-end w-full'>
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <li key={link.href} className='lg:mr-8'>
                            <Link
                                href={link.href}
                                className={`relative after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full ${
                                    isActive
                                        ? 'after:w-full'
                                        : 'after:w-0 hover:after:w-full'
                                }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <ul
                className={`lg:hidden absolute top-28 left-0 w-full bg-black/90 backdrop-blur-sm z-50 flex flex-col space-y-5 items-center py-5 transition-all duration-300 ease-in ${
                    isOpen
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y5 pointer-events-none'
                }`}
            >
                {links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                ))}
            </ul>

            <button
                onClick={toggleMenu}
                className='lg:hidden absolute z-50 top-10 right-4 border-0 p-1 w-9 h-9'
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </nav>
    );
}
