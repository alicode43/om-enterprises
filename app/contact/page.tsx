import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const ContactPage = () => (
    <section className="pt-40 pb-20">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
                <div className="space-y-12">
                    <SectionHeading
                        badge="Get In Touch"
                        title="Invest Smartly with Om Enterprises Realty"
                        subtitle="Have questions about a property? Want a site visit? Fill out the form or reach us directly."
                    />

                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <div className="bg-emerald-100 p-4 rounded-2xl text-emerald-700 h-fit"><Phone /></div>
                            <div>
                                <h4 className="font-bold text-lg">Call Us</h4>
                                <p className="text-slate-500">+91 98765 43210</p>
                                <p className="text-slate-500">+91 91234 56789</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="bg-emerald-100 p-4 rounded-2xl text-emerald-700 h-fit"><Mail /></div>
                            <div>
                                <h4 className="font-bold text-lg">Email Us</h4>
                                <p className="text-slate-500">info@omrealty.in</p>
                                <p className="text-slate-500">sales@omrealty.in</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="bg-emerald-100 p-4 rounded-2xl text-emerald-700 h-fit"><MapPin /></div>
                            <div>
                                <h4 className="font-bold text-lg">Our Office</h4>
                                <p className="text-slate-500">Head Office: Om Bhawan, Suite 402, Sector 150, Noida, UP</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-slate-50">
                    <h3 className="text-2xl font-bold mb-8">Send Us a Message</h3>
                    <form className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Subject</label>
                            <input type="text" placeholder="Property Inquiry" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Message</label>
                            <textarea rows={4} placeholder="How can we help you?" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"></textarea>
                        </div>
                        <button className="w-full bg-emerald-800 text-white py-4 rounded-xl font-bold hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-800/20">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
);

export default ContactPage;
