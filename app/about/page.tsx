import React from 'react';
import { ShieldCheck, Award, CheckCircle, TrendingUp } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const AboutPage = () => (
    <section className="pt-40 pb-20">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                <div className="relative">
                    <div className="rounded-[40px] overflow-hidden shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000" alt="Landscape" className="w-full aspect-square object-cover" />
                    </div>
                    <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl hidden md:block border border-slate-100">
                        <p className="text-emerald-800 text-4xl font-bold">15+</p>
                        <p className="text-slate-500 font-medium">Years of Trust</p>
                    </div>
                </div>
                <div className="space-y-8">
                    <SectionHeading
                        badge="About Om Enterprises Realty"
                        title="Building a Legacy of Trust in Real Estate"
                        subtitle="Since our inception, we have been at the forefront of providing premium land investment opportunities near high-growth corridors like the Yamuna Expressway."
                    />
                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            { icon: <ShieldCheck />, t: "Secure Titles", d: "Legal verification and documentation for every plot." },
                            { icon: <Award />, t: "Premium Locations", d: "Strategically located near upcoming infrastructure projects." },
                            { icon: <CheckCircle />, t: "Transparent Pricing", d: "No hidden costs, straightforward dealings." },
                            { icon: <TrendingUp />, t: "High Appreciation", d: "Proven track record of property value growth." }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                                <div className="text-emerald-600 mb-4">{item.icon}</div>
                                <h4 className="font-bold text-lg mb-1">{item.t}</h4>
                                <p className="text-sm text-slate-500">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Vision/Mission */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-emerald-800 text-white p-12 rounded-[40px] space-y-4">
                    <h3 className="text-3xl font-bold">Our Mission</h3>
                    <p className="text-emerald-50 leading-relaxed">To empower individuals with high-value land investments that serve as a foundation for their dream homes and long-term financial security through transparent and professional guidance.</p>
                </div>
                <div className="bg-slate-800 text-white p-12 rounded-[40px] space-y-4">
                    <h3 className="text-3xl font-bold">Our Vision</h3>
                    <p className="text-slate-300 leading-relaxed">To be the most trusted name in real estate development, recognized for our commitment to quality, integrity, and transforming landscapes into vibrant, smart-living communities.</p>
                </div>
            </div>
        </div>
    </section>
);

export default AboutPage;
