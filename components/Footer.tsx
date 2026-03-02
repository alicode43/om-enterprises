import React from 'react';
import Link from 'next/link';
import { Building, Facebook, Instagram, MessageCircle, Phone } from 'lucide-react';

const Footer = () => {
    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/property', label: 'Properties' },
        { href: '/team', label: 'Team' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <footer className="bg-slate-900 text-white py-20">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <img
                                src="/image/logo.png"
                                alt="Om Enterprises Logo"
                                className="h-14 w-auto object-contain brightness-0 invert"
                            />
                            <div className="flex flex-col">
                                <span className="text-2xl font-black text-white uppercase leading-none tracking-tight">Om Enterprises</span>
                                <span className="text-xs font-bold text-emerald-400 tracking-[0.3em] uppercase">Realty</span>
                            </div>
                        </div>
                        <p className="text-slate-400 max-w-sm leading-relaxed">
                            Premium plot investments and luxury farmhouse developments designed for growth, community, and lasting value.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, MessageCircle, Phone].map((Icon, i) => (
                                <button key={i} className="p-3 rounded-full bg-slate-800 text-slate-400 hover:bg-emerald-700 hover:text-white transition-all"><Icon size={18} /></button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-slate-400">
                            {navLinks.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-emerald-400 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-6">Legal</h4>
                        <ul className="space-y-3 text-slate-400">
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Legal Documents</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Investment Disclaimer</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                    © 2026 Om Enterprises Realty. Designed for smart investors.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
