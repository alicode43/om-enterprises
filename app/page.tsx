"use client";

import React, { useState, useEffect } from 'react';
import {
  Search,
  MapPin,
  Home as HomeIcon,
  Users,
  TrendingUp,
  ArrowRight,
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  ChevronDown,
  Star,
  CheckCircle,
  Menu,
  X,
  Building,
  Mail,
  Calendar,
  Clock,
  ShieldCheck,
  Award
} from 'lucide-react';

// --- Shared Components ---

const SectionHeading = ({ badge, title, subtitle, light = false }: {
  badge?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) => (
  <div className="space-y-4 mb-12">
    {badge && (
      <div className="inline-block bg-emerald-100/80 px-4 py-1.5 rounded-full text-emerald-800 text-sm font-semibold uppercase tracking-wider">
        {badge}
      </div>
    )}
    <h2 className={`text-4xl lg:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-slate-800'}`}>
      {title}
    </h2>
    {subtitle && <p className={`max-w-2xl text-lg ${light ? 'text-slate-300' : 'text-slate-600'}`}>{subtitle}</p>}
  </div>
);

// --- Page Components ---

const HomePage = ({ setPage }: { setPage: (page: string) => void }) => (
  <>
    {/* Hero Section */}
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/50 -z-10 rounded-bl-[100px]" />
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-emerald-100/80 px-4 py-1.5 rounded-full text-emerald-800 text-sm font-semibold">
            <HomeIcon size={14} />
            <span>Dream Plots Await</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 leading-[1.1]">
            Find Your Ideal Plots with <span className="text-emerald-800">Expert Guidance</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
            We offer premium residential plots and farmhouses designed for smart investment and peaceful living by Om Enterprises Realty.
          </p>
          {/* Search Box */}
          <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-2xl border border-slate-100 relative z-10">
            <h3 className="text-2xl font-bold text-center mb-1">Start Your Property Search</h3>
            <p className="text-slate-400 text-center text-sm mb-8">Discover verified listings</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500" size={18} />
                  <input type="text" placeholder="Enter city" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Property Type</label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500" size={18} />
                  <select className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl appearance-none focus:outline-none">
                    <option>All Types</option>
                    <option>Residential Plot</option>
                    <option>Farmhouse</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                </div>
              </div>
            </div>
            <button className="w-full mt-8 bg-emerald-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-700/20">
              <Search size={20} /> Find Properties
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000" alt="Green Field" className="w-full h-[600px] object-cover" />
            <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-md p-6 rounded-2xl text-white border border-white/10">
              <p className="text-3xl font-bold">₹72 Lakh*</p>
              <div className="flex items-center gap-4 mt-2 text-sm opacity-90">
                <span className="flex items-center gap-1"><MapPin size={14} /> TechZone</span>
                <span className="flex items-center gap-1"><HomeIcon size={14} /> 1008 Gaz</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
        {[
          { v: "450+", l: "Active Clients" },
          { v: "89+", l: "Expert Agents" },
          { v: "96%", l: "Success Rate" }
        ].map((s, i) => (
          <div key={i} className="group">
            <div className="text-5xl font-bold text-emerald-800 mb-2">{s.v}</div>
            <div className="text-slate-500 font-medium uppercase tracking-widest text-xs">{s.l}</div>
            <div className="w-12 h-1 bg-emerald-600/20 mx-auto mt-4 group-hover:w-24 transition-all" />
          </div>
        ))}
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[120px]" />
      </div>
      <div className="container mx-auto px-6 text-center space-y-8 relative">
        <h2 className="text-4xl md:text-5xl font-bold">Ready to secure your future?</h2>
        <p className="text-emerald-100 max-w-xl mx-auto text-lg">Join hundreds of satisfied investors who found their perfect plots with Om Enterprises Realty.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => setPage('contact')} className="bg-white text-emerald-900 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-colors">Book a Consultation</button>
          <button onClick={() => setPage('properties')} className="border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">Explore Plots</button>
        </div>
      </div>
    </section>
  </>
);

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

const TeamPage = () => {
  const members = [
    { name: "Arpita Jha", role: "CEO", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" },
    { name: "Verma", role: "Head of Sales", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
    { name: "Sharma", role: "Customer Relations", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
    { name: "Kapoor", role: "Legal Advisor", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
  ];

  return (
    <section className="pt-40 pb-20">
      <div className="container mx-auto px-6 text-center">
        <SectionHeading
          badge="Our Team"
          title="Experts at Om Enterprises Realty"
          subtitle="Our dedicated professionals work tirelessly to ensure your investment journey is smooth and rewarding."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

const BlogPage = () => {
  const posts = [
    { id: 1, title: "Why Land Investment is the next Goldmine", date: "Feb 24, 2026", cat: "Investment", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=500" },
    { id: 2, title: "Checklist for Buying a Residential Plot in 2026", date: "Feb 18, 2026", cat: "Guide", img: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=500" },
    { id: 3, title: "Real Estate Trends: What to Expect this Year", date: "Feb 10, 2026", cat: "Market News", img: "https://images.unsplash.com/photo-1510673398445-94f476ef2cbc?auto=format&fit=crop&q=80&w=500" },
  ];

  return (
    <section className="pt-40 pb-20">
      <div className="container mx-auto px-6">
        <SectionHeading
          badge="Blog & Updates"
          title="Insights from Om Enterprises Realty"
          subtitle="Stay updated with market trends, legal tips, and investment advice from our experts."
        />
        <div className="grid lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-lg group">
              <div className="h-56 overflow-hidden relative">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute top-4 left-4 bg-emerald-700 text-white px-3 py-1 rounded-lg text-xs font-bold">
                  {post.cat}
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-4 text-slate-400 text-sm">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> 5 min read</span>
                </div>
                <h3 className="text-xl font-bold leading-tight group-hover:text-emerald-700 transition-colors">
                  {post.title}
                </h3>
                <button className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                  Read Full Article <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

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

// --- Main App Component ---

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  }, [currentPage]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'properties', label: 'Properties' },
    { id: 'team', label: 'Team' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setPage={setCurrentPage} />;
      case 'about': return <AboutPage />;
      case 'properties': return <PropertiesPage />;
      case 'team': return <TeamPage />;
      case 'blog': return <BlogPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* Floating Action Buttons */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        <button className="bg-blue-600 p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform"><Facebook size={20} /></button>
        <button className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform"><Instagram size={20} /></button>
        <button className="bg-emerald-500 p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform"><MessageCircle size={20} /></button>
        <button className="bg-blue-500 p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform"><Phone size={20} /></button>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled || currentPage !== 'home' ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-lg border border-slate-100">
              <Building className="text-emerald-700" size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-800">Om Enterprises Realty</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => setCurrentPage(link.id)}
                className={`transition-colors font-medium ${currentPage === link.id ? 'text-emerald-700' : 'text-slate-600 hover:text-emerald-600'}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage('contact')}
              className="bg-slate-800 text-white px-6 py-2 rounded-full font-medium hover:bg-emerald-700 transition-colors shadow-lg shadow-slate-800/20"
            >
              Contact
            </button>
          </div>

          <button className="lg:hidden p-2 text-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-white z-[90] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => setCurrentPage(link.id)}
              className={`text-2xl font-bold ${currentPage === link.id ? 'text-emerald-700' : 'text-slate-400'}`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage('contact')}
            className="mt-4 bg-emerald-700 text-white px-10 py-4 rounded-2xl font-bold"
          >
            Get In Touch
          </button>
        </div>
      </nav>

      {/* Page Content */}
      <main className="animate-fade-in">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white flex items-center justify-center rounded-lg">
                  <Building className="text-slate-900" size={24} />
                </div>
                <span className="text-2xl font-bold">Om Enterprises Realty</span>
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
                  <li key={link.id}><button onClick={() => setCurrentPage(link.id)} className="hover:text-emerald-400 transition-colors">{link.label}</button></li>
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

      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

export default Home;
