"use client";

import React from 'react';
import { MapPin, Home as HomeIcon } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const PropertiesPage = () => {
    const properties = [
        { id: 1, title: "Emerald Valley Plots", loc: "Sector 150, Noida", price: "₹65 Lakh*", size: "900 Sq. Ft.", type: "Residential", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400" },
        { id: 2, title: "Grand Farmhouses", loc: "Yamuna Expressway", price: "₹1.2 Cr*", size: "2000 Sq. Ft.", type: "Farmhouse", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400" },
        { id: 3, title: "Tech City Residency", loc: "Greater Noida West", price: "₹45 Lakh*", size: "750 Sq. Ft.", type: "Residential", img: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=400" },
        { id: 4, title: "Om Green Estates", loc: "Jewar Airport Side", price: "₹88 Lakh*", size: "1200 Sq. Ft.", type: "Premium Plot", img: "https://images.unsplash.com/photo-1510673398445-94f476ef2cbc?auto=format&fit=crop&q=80&w=400" },
        { id: 5, title: "Skyline Avenue", loc: "Knowledge Park V", price: "₹55 Lakh*", size: "850 Sq. Ft.", type: "Residential", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=400" },
        { id: 6, title: "Riverview Estate", loc: "Sector 128", price: "₹2.5 Cr*", size: "5000 Sq. Ft.", type: "Luxury Plot", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400" },
    ];

    return (
        <section className="pt-40 pb-20">
            <div className="container mx-auto px-6">
                <SectionHeading
                    badge="Property Listings"
                    title="Explore Our Exclusive Plots"
                    subtitle="Carefully curated plots in the most sought-after locations for investment and residency."
                />

                {/* Filters Placeholder */}
                <div className="flex flex-wrap gap-4 mb-12">
                    {["All Properties", "Residential", "Farmhouse", "Commercial"].map((f, i) => (
                        <button key={i} className={`px-6 py-2 rounded-full font-medium transition-all ${i === 0 ? 'bg-emerald-700 text-white shadow-lg' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}>
                            {f}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map(p => (
                        <div key={p.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
                            <div className="relative h-64 overflow-hidden">
                                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-emerald-800 text-xs font-bold uppercase tracking-wider">
                                    {p.type}
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800">{p.title}</h3>
                                    <p className="text-slate-400 text-sm flex items-center gap-1 mt-1"><MapPin size={12} /> {p.loc}</p>
                                </div>
                                <div className="flex justify-between items-center py-4 border-y border-slate-100">
                                    <div className="text-slate-500 text-sm flex items-center gap-1"><HomeIcon size={14} /> {p.size}</div>
                                    <div className="text-emerald-700 font-bold text-lg">{p.price}</div>
                                </div>
                                <button className="w-full py-3 rounded-xl border-2 border-slate-100 font-bold text-slate-800 hover:bg-emerald-700 hover:text-white hover:border-emerald-700 transition-all">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PropertiesPage;
