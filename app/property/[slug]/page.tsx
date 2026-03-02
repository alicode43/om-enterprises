"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
    MapPin, Calendar, Heart, Share2,
    Phone, Mail, MessageSquare, ChevronLeft,
    ChevronRight, Building2, Droplets, Maximize,
    Car, Layers, Star, Download,
    CheckCircle2, Info, ChevronRight as ChevronRightIcon,
    GraduationCap, Coffee, Trees, School
} from 'lucide-react';
import Link from 'next/link';
import { properties } from '@/data/properties';

const PropertyDetails = () => {
    const { slug } = useParams();
    const router = useRouter();
    const property = properties.find(p => p.slug === slug);
    const [activeImage, setActiveImage] = useState(0);

    if (!property) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h1 className="text-4xl font-black text-slate-800 mb-4">Property Not Found</h1>
                    <p className="text-slate-400 mb-8 font-medium">The property you're looking for doesn't exist or has been removed.</p>
                    <Link href="/property" className="bg-emerald-700 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg shadow-emerald-700/30">
                        Back to Listings
                    </Link>
                </div>
            </div>
        );
    }

    const nextImage = () => setActiveImage((prev) => (prev + 1) % property.images.length);
    const prevImage = () => setActiveImage((prev) => (prev - 1 + property.images.length) % property.images.length);

    return (
        <main className="bg-slate-50 min-h-screen">
            {/* Header / Breadcrumbs */}
            <div className="pt-32 pb-12 bg-emerald-50/30">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h1 className="text-4xl font-black text-slate-800 tracking-tight uppercase">{property.title}</h1>
                            <div className="flex items-center gap-2 text-slate-400 font-medium mt-2">
                                <Link href="/" className="hover:text-emerald-700">Home</Link>
                                <span>/</span>
                                <Link href="/property" className="hover:text-emerald-700">Properties</Link>
                                <span>/</span>
                                <span className="text-emerald-700 font-bold">{property.title}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm hover:bg-emerald-50 hover:text-emerald-700 transition-all">
                                <Share2 size={20} />
                            </button>
                            <button className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm hover:bg-rose-50 hover:text-rose-600 transition-all">
                                <Heart size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left Column: Images & Details */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Image Gallery */}
                        <div className="bg-white p-4 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                            <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden group">
                                <img
                                    src={property.images[activeImage]}
                                    alt={property.title}
                                    className="w-full h-full object-cover transition-transform duration-700"
                                />
                                <button
                                    onClick={prevImage}
                                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-emerald-700 hover:text-white"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-emerald-700 hover:text-white"
                                >
                                    <ChevronRight size={24} />
                                </button>
                                <div className="absolute top-6 left-6 flex gap-2">
                                    <div className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-emerald-600/30">
                                        Premium Property
                                    </div>
                                </div>
                            </div>

                            {/* Thumbnails */}
                            <div className="grid grid-cols-5 gap-4 mt-6">
                                {property.images.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveImage(i)}
                                        className={`relative h-24 rounded-2xl overflow-hidden border-2 transition-all ${activeImage === i ? 'border-emerald-600 scale-95 ring-4 ring-emerald-50' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                    >
                                        <img src={img} alt="" className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Title & Location */}
                        <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div>
                                    <h2 className="text-4xl font-black text-slate-800 tracking-tight leading-none mb-2 uppercase">{property.title}</h2>
                                    <p className="text-slate-400 font-bold flex items-center gap-2">
                                        <MapPin className="text-emerald-600" size={18} /> {property.location}
                                    </p>
                                </div>
                                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                                    ID: #om_realty_{property.id}
                                </div>
                            </div>

                            {/* Price Card */}
                            <div className="mt-8 bg-emerald-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-emerald-900/30">
                                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-emerald-300/80 mb-2">Investment Price</div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-6xl font-black tracking-tight">{property.price}</span>
                                            <span className="text-emerald-300 font-bold">/one time</span>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-800/50 backdrop-blur px-6 py-4 rounded-2xl border border-emerald-700 text-sm font-medium">
                                        External Development Charges: ₹250/ Sq.Yd<br />
                                        Club Charges: ₹2,50,000/- One Time
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10">
                                {property.features.map((f, i) => (
                                    <div key={i} className="bg-slate-50 border border-slate-100 p-6 rounded-[2rem] text-center hover:bg-white hover:shadow-lg hover:shadow-slate-100 transition-all duration-300">
                                        <div className="text-emerald-600 flex justify-center mb-3">
                                            {f.icon === 'Home' && <Building2 size={24} />}
                                            {f.icon === 'Droplets' && <Droplets size={24} />}
                                            {f.icon === 'Maximize' && <Maximize size={24} />}
                                            {f.icon === 'Car' && <Car size={24} />}
                                            {f.icon === 'Layers' && <Layers size={24} />}
                                        </div>
                                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{f.label}</div>
                                        <div className="text-xl font-black text-slate-800 uppercase">{f.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                            <h3 className="text-2xl font-black text-slate-800 mb-6 uppercase tracking-tight">Plots Description</h3>
                            <p className="text-slate-500 leading-relaxed font-medium text-lg mb-10">
                                {property.description}
                            </p>

                            <div className="grid md:grid-cols-2 gap-12">
                                {/* Near By Section */}
                                <div className="space-y-6">
                                    <h4 className="text-xl font-black text-slate-800 uppercase tracking-tight">Near By</h4>
                                    <div className="space-y-4">
                                        {property.nearBy.map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 text-slate-500 font-bold">
                                                <CheckCircle2 size={18} className="text-emerald-500" />
                                                <span className="text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Amenities Section */}
                                <div className="space-y-6">
                                    <h4 className="text-xl font-black text-slate-800 uppercase tracking-tight">Amenities</h4>
                                    <div className="space-y-4">
                                        {property.amenities.map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 text-slate-500 font-bold">
                                                <CheckCircle2 size={18} className="text-emerald-500" />
                                                <span className="text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 grid md:grid-cols-2 gap-4">
                                <button className="flex items-center justify-center gap-3 bg-slate-800 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-emerald-700 transition-all shadow-lg shadow-slate-800/20 active:scale-95">
                                    <Download size={18} /> Download Brochure
                                </button>
                                <button className="flex items-center justify-center gap-3 bg-white border-2 border-slate-100 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all shadow-sm active:scale-95">
                                    View Master Plan
                                </button>
                            </div>
                        </div>

                        {/* Plots Plan */}
                        <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                            <h3 className="text-2xl font-black text-slate-800 mb-8 uppercase tracking-tight">Plots Plan</h3>
                            <div className="rounded-[2rem] overflow-hidden border border-slate-100 shadow-lg mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80&w=1200"
                                    alt="Plot Plan"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-2xl font-black text-slate-800 uppercase">{property.title} – Premium Farmland Project</h4>
                                <p className="text-slate-500 leading-relaxed font-medium">
                                    {property.title} is a well-planned premium farmland project located in Motipur Techzone, Greater Noida. Spread across a vast area, the project offers thoughtfully designed plots with proper demarcation, wide internal roads, green zones, and future development spaces. The layout includes dedicated areas for amenities, plantation, and recreational use, ensuring a balanced blend of nature and modern planning. With excellent connectivity to major roads and nearby urban infrastructure, {property.title} is ideal for farmhouse living, weekend retreats, and long-term investment. Developed with clear planning and growth vision, it promises peaceful living along with strong appreciation potential.
                                </p>
                            </div>
                        </div>

                        {/* Location Section */}
                        {property.mapUrl && (
                            <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 mt-12">
                                <h3 className="text-2xl font-black text-slate-800 mb-8 uppercase tracking-tight">Location</h3>
                                <div className="grid lg:grid-cols-12 gap-10">
                                    <div className="lg:col-span-12 xl:col-span-8">
                                        <div className="rounded-[2rem] overflow-hidden border border-slate-100 shadow-lg h-[400px]">
                                            <iframe
                                                src={property.mapUrl}
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0 }}
                                                allowFullScreen={true}
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            ></iframe>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-12 xl:col-span-4 space-y-6">
                                        <h4 className="text-xl font-black text-slate-800 uppercase tracking-tight">Neighborhood Highlights</h4>
                                        <div className="space-y-6">
                                            {property.neighborhoodHighlights?.map((item, i) => (
                                                <div key={i} className="flex gap-4 items-start p-3 rounded-2xl bg-slate-50 border border-slate-100">
                                                    <div className="bg-emerald-100 p-2 rounded-xl text-emerald-700 shrink-0">
                                                        {item.icon === 'GraduationCap' && <GraduationCap size={18} />}
                                                        {item.icon === 'Coffee' && <Coffee size={18} />}
                                                        {item.icon === 'Trees' && <Trees size={18} />}
                                                        {item.icon === 'School' && <School size={18} />}
                                                    </div>
                                                    <div className="min-w-0">
                                                        <h5 className="font-black text-slate-800 text-sm leading-snug mb-0.5 line-clamp-2">{item.label}</h5>
                                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{item.distance}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Actions & Agent */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Schedule Viewing */}
                        <div className="bg-white p-8 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 sticky top-32">
                            <button className="w-full bg-[#047857] text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[13px] shadow-xl shadow-emerald-700/20 hover:bg-emerald-800 transition-all mb-4 flex items-center justify-center gap-3 active:scale-[0.98]">
                                <Calendar size={20} strokeWidth={2.5} /> Schedule Viewing
                            </button>
                            <div className="grid grid-cols-2 gap-4 mb-12">
                                <button className="flex items-center justify-center gap-2 py-5 rounded-2xl border border-slate-100 font-bold text-slate-600 hover:bg-slate-50 transition-all text-sm shadow-sm">
                                    <Heart size={18} /> Save
                                </button>
                                <button className="flex items-center justify-center gap-2 py-5 rounded-2xl border border-slate-100 font-bold text-slate-600 hover:bg-slate-50 transition-all text-sm shadow-sm">
                                    <Share2 size={18} /> Share
                                </button>
                            </div>

                            {/* Contact Form */}
                            <div className="pt-8 border-t border-slate-100">
                                <h3 className="text-2xl font-black text-[#1e293b] mb-8 uppercase tracking-tight">Request Information</h3>
                                <form className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full bg-[#f8fafc] border border-slate-100 rounded-2xl px-6 py-5 text-sm font-medium focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all placeholder:text-slate-400"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full bg-[#f8fafc] border border-slate-100 rounded-2xl px-6 py-5 text-sm font-medium focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all placeholder:text-slate-400"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full bg-[#f8fafc] border border-slate-100 rounded-2xl px-6 py-5 text-sm font-medium focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all placeholder:text-slate-400"
                                    />
                                    <textarea
                                        rows={5}
                                        placeholder="I'm interested in this property..."
                                        className="w-full bg-[#f8fafc] border border-slate-100 rounded-2xl px-6 py-5 text-sm font-medium focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all resize-none placeholder:text-slate-400"
                                    ></textarea>
                                    <button className="w-full bg-[#047857] text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[13px] shadow-xl shadow-emerald-700/20 hover:bg-emerald-800 transition-all active:scale-[0.98]">
                                        Send Request
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Price List Section */}
                        <div className="bg-white p-8 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                            <h3 className="text-xl font-black text-slate-800 mb-6 uppercase tracking-tight">Prize list</h3>
                            <div className="space-y-4">
                                {[
                                    { label: "Booking Amount", value: "10%" },
                                    { label: "Within 30 Days", value: "40%" },
                                    { label: "Within 60 Days Booking", value: "50%" },
                                    { label: "Corner", value: "10% of BSP" },
                                    { label: "Club Facing", value: "5% of BSP" },
                                    { label: "Club Charges", value: "₹2,50,000" }
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0 border-dashed">
                                        <span className="text-slate-500 font-bold text-sm tracking-tight">{item.label}</span>
                                        <span className="text-slate-800 font-black text-sm">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 bg-emerald-50 rounded-2xl p-4 flex justify-between items-center border border-emerald-100">
                                <span className="text-emerald-900 font-black uppercase text-sm">Cost</span>
                                <span className="text-emerald-700 font-black text-xl uppercase italic tracking-tighter">₹ 7200 SQ/YD</span>
                            </div>
                        </div>

                        {/* Similar Properties Section */}
                        <div className="bg-white p-8 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                            <h3 className="text-xl font-black text-slate-800 mb-6 uppercase tracking-tight">Similar Properties</h3>
                            <div className="space-y-4">
                                {properties.filter(p => p.id !== property.id).slice(0, 2).map((p, i) => (
                                    <Link href={`/property/${p.slug}`} key={i} className="flex gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group">
                                        <div className="w-24 h-16 rounded-xl overflow-hidden shrink-0">
                                            <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h4 className="text-sm font-black text-slate-800 group-hover:text-emerald-700 transition-colors uppercase leading-tight line-clamp-1">{p.title}</h4>
                                            <div className="text-emerald-600 font-black text-sm">{p.price}</div>
                                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5 line-clamp-1">Kids Play Area • Parking • {p.size}</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PropertyDetails;
