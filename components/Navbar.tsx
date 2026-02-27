"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Building, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/property', label: 'Properties' },
        { href: '/team', label: 'Team' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
    ];

    const isHome = pathname === '/';

    return (
        <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled || !isHome ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 cursor-pointer">
                    <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-lg border border-slate-100">
                        <Building className="text-emerald-700" size={24} />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-slate-800">Om Enterprises Realty</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`transition-colors font-medium ${pathname === link.href ? 'text-emerald-700' : 'text-slate-600 hover:text-emerald-600'}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="bg-slate-800 text-white px-6 py-2 rounded-full font-medium hover:bg-emerald-700 transition-colors shadow-lg shadow-slate-800/20"
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile Burger */}
                <button className="lg:hidden p-2 text-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 bg-white z-[90] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {navLinks.map(link => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`text-2xl font-bold ${pathname === link.href ? 'text-emerald-700' : 'text-slate-400'}`}
                    >
                        {link.label}
                    </Link>
                ))}
                <Link
                    href="/contact"
                    className="mt-4 bg-emerald-700 text-white px-10 py-4 rounded-2xl font-bold"
                >
                    Get In Touch
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
