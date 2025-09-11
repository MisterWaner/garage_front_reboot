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

    const toggleMenu = () => setIsOpen(!isOpen);

    return <div>Navbar</div>;
}
