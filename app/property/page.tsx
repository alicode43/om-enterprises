"use client";

import React, { useState } from 'react';
import { MapPin, Home as HomeIcon, Search, ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Link from 'next/link';
import { properties } from '@/data/properties';

const PropertiesPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedType, setSelectedType] = useState("Any Type");
    const [maxPrice, setMaxPrice] = useState("Any Price");
    const [selectedSize, setSelectedSize] = useState("Any");

    const filteredProperties = properties.filter(p => {
        const matchesSearch = p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = selectedType === "Any Type" || p.type === selectedType;
        const matchesSize = selectedSize === "Any" || p.size.includes(selectedSize);

        return matchesSearch && matchesType && matchesSize;
    });

    return (
        <section className="pt-40 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6">
                <SectionHeading
                    badge="Property Listings"
                    title="Find Your Dream Property"
                    subtitle="Discover our range of premium plots, farmhouses, and residential spaces."
                />

                {/* Search Bar - Matching the screenshot style */}
                <div className="bg-white rounded-[2rem] shadow-xl p-8 mb-16 border border-slate-100 -mt-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Location</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter city or Pincode"
                                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Type</label>
                            <div className="relative">
                                <select
                                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-slate-700 outline-none appearance-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                                    value={selectedType}
                                    onChange={(e) => setSelectedType(e.target.value)}
                                >
                                    <option>Any Type</option>
                                    <option>Residential</option>
                                    <option>Farmhouse</option>
                                    <option>Appartments</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Price</label>
                            <div className="relative">
                                <select
                                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-slate-700 outline-none appearance-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(e.target.value)}
                                >
                                    <option>Any Price</option>
                                    <option>Under 50 Lakh</option>
                                    <option>50 Lakh - 1 Cr</option>
                                    <option>Above 1 Cr</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                            </div>
                        </div>

                        <div className="space-y-2 lg:col-span-1">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Plot Size</label>
                            <div className="flex bg-slate-50 rounded-xl p-1 border border-slate-100">
                                {["Any", "100", "200", "300"].map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${selectedSize === size ? 'bg-white text-emerald-700 shadow-sm border border-slate-100' : 'text-slate-500 hover:text-slate-700'}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-700/20 group">
                            <Search size={20} className="group-hover:scale-110 transition-transform" />
                            Search
                        </button>
                    </div>
                </div>

                <div className="flex justify-between items-center mb-8 px-2">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">Available Properties</h2>
                        <p className="text-slate-400 text-sm mt-1">Showing {filteredProperties.length} properties in Greater Noida, UP</p>
                    </div>
                    <div className="flex gap-2">
                        <select className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-medium text-slate-600 outline-none">
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Latest Listed</option>
                        </select>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProperties.map(p => (
                        <div key={p.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 group hover:shadow-2xl hover:shadow-emerald-700/10 transition-all duration-500">
                            <div className="relative h-72 overflow-hidden px-4 pt-4">
                                <Link href={`/property/${p.slug}`}>
                                    <div className="relative h-full w-full rounded-[2rem] overflow-hidden">
                                        <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            {p.badge && (
                                                <div className="bg-emerald-600 text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-emerald-600/30">
                                                    {p.badge}
                                                </div>
                                            )}
                                            <div className="bg-orange-500 text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-orange-500/30">
                                                Featured
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="p-8 space-y-6">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <h3 className="text-2xl font-black text-slate-800 group-hover:text-emerald-700 transition-colors uppercase tracking-tight leading-none">
                                            {p.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm font-medium flex items-center gap-1.5">
                                            <MapPin size={14} className="text-emerald-600" /> {p.locationShort || p.location}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Starting Price</p>
                                        <div className="text-3xl font-black text-emerald-700 tracking-tight leading-none">{p.price}</div>
                                    </div>
                                    <div className="bg-slate-50 px-4 py-2 rounded-2xl border border-slate-100 group-hover:bg-emerald-50 transition-colors">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Category</p>
                                        <p className="text-xs font-black text-emerald-800 uppercase tracking-widest">{p.type}</p>
                                    </div>
                                </div>

                                <Link href={`/property/${p.slug}`} className="block">
                                    <button className="w-full py-4 rounded-2xl bg-white border-2 border-slate-100 font-black text-slate-800 group-hover:bg-emerald-700 group-hover:text-white group-hover:border-emerald-700 transition-all duration-300 uppercase tracking-widest text-xs shadow-lg shadow-slate-100 active:scale-95">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PropertiesPage;
