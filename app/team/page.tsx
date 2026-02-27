import React from 'react';
import { MessageCircle, Facebook, Instagram } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const TeamPage = () => {
    const members = [
        { name: "Amrita Jha", role: "CEO", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
        // { name: "Verma", role: "Head of Sales", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
        // { name: "Sharma", role: "Customer Relations", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
        // { name: "Kapoor", role: "Legal Advisor", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
    ];

    return (
        <section className="pt-40 pb-20">
            <div className="container mx-auto px-6 text-center">
                <SectionHeading
                    badge="Our Team"
                    title="Experts at Om Enterprises Realty"
                    subtitle="Our dedicated professionals work tirelessly to ensure your investment journey is smooth and rewarding."
                />
                <div className="flex ">
                    {members.map((m, i) => (
                        <div key={i} className="bg-white p-8 rounded-[40px] shadow-lg border border-slate-50 group hover:-translate-y-2 transition-transform">
                            <div className="relative w-32 h-32 mx-auto mb-6">
                                <img src={m.img} alt={m.name} className="w-full h-full rounded-full object-cover ring-4 ring-emerald-50" />
                                <div className="absolute bottom-0 right-0 bg-emerald-700 p-2 rounded-full text-white">
                                    <MessageCircle size={16} />
                                </div>
                            </div>
                            <h3 className="font-bold text-xl mb-1">{m.name}</h3>
                            <p className="text-slate-500 text-sm mb-4">{m.role}</p>
                            <div className="flex justify-center gap-3">
                                <button className="text-slate-400 hover:text-blue-600 transition-colors"><Facebook size={18} /></button>
                                <button className="text-slate-400 hover:text-pink-600 transition-colors"><Instagram size={18} /></button>
                                <button className="text-slate-400 hover:text-emerald-600 transition-colors"><MessageCircle size={18} /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamPage;
