import React from 'react';
import Link from 'next/link';
import {
  Search,
  MapPin,
  Home as HomeIcon,
  Building,
  ChevronDown,
  Star,
  MessageCircle,
  Users,
  ArrowRight,
  Phone,
  TrendingUp,
  Mail,
  CheckCircle,
  Clock,
  Award
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const HomePage = () => (
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

        <div className="space-y-6">
          <div className="relative">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000" alt="Green Field" className="w-full h-[550px] object-cover" />

              {/* Overlay Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

              {/* Price and Location Overlay */}
              <div className="absolute bottom-10 left-10 text-white space-y-4">
                <h2 className="text-5xl font-black tracking-tight">₹72 Lakh*</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-lg font-medium opacity-90">
                    <MapPin size={20} className="text-emerald-400" />
                    <span>TechZone</span>
                  </div>
                  <div className="flex items-center gap-2 text-lg font-medium opacity-90">
                    <HomeIcon size={20} className="text-emerald-400" />
                    <span>1008 Gaz (9,072 sq. ft.)</span>
                  </div>
                </div>
              </div>

              {/* Floating Images */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 scale-90 lg:scale-100 origin-right">
                <div className="w-48 h-48 rounded-3xl overflow-hidden border-4 border-white shadow-2xl skew-y-3 -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=300" alt="Plot View 1" className="w-full h-full object-cover" />
                </div>
                <div className="w-48 h-48 rounded-3xl overflow-hidden border-4 border-white shadow-2xl -skew-y-3 rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img src="https://images.unsplash.com/photo-1510673398445-94f476ef2cbc?auto=format&fit=crop&q=80&w=300" alt="Plot View 2" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Director Profile Card */}
          <div className="bg-white p-4 rounded-3xl shadow-xl border border-slate-100 max-w-md ml-4 -mt-8 relative z-20 flex items-center justify-between group hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-500 p-0.5">
                  <img src="image/amrita.jpeg" alt="Director" className="w-full h-full rounded-full object-cover" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800">Amrita Jha</h4>
                <p className="text-slate-500 font-medium text-sm">Director</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span className="text-xs font-bold text-slate-600">5.0 (94 reviews)</span>
                </div>
              </div>
            </div>
            <button className="bg-emerald-600 p-3 rounded-full text-white shadow-lg shadow-emerald-600/20 group-hover:bg-emerald-700 transition-colors">
              <MessageCircle size={20} fill="currentColor" />
            </button>
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

    {/* About Our Company Section */}
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="rounded-[40px] overflow-hidden shadow-2xl relative">
            <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000" alt="Centurion Group Land" className="w-full aspect-[4/3] object-cover" />
            <div className="absolute top-8 left-8 bg-emerald-800 text-white p-6 rounded-3xl shadow-xl text-center min-w-[140px]">
              <div className="text-4xl font-black mb-1">5+</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-80">Years<br />Experience</div>
            </div>
          </div>
          <div className="absolute -bottom-12 -right-6 w-2/3 rounded-3xl overflow-hidden border-8 border-white shadow-2xl hidden md:block">
            <img src="https://images.unsplash.com/photo-1510673398445-94f476ef2cbc?auto=format&fit=crop&q=80&w=600" alt="Property Inset" className="w-full aspect-video object-cover" />
          </div>
        </div>
        <div className="space-y-8">
          <SectionHeading
            badge="About Our Company"
            title="Get To Know About Om Enterprises"
          />
          <p className="text-slate-600 text-lg leading-relaxed">
            An Om Enterprises luxury farmhouse near Jewar Airport on the Yamuna Expressway with a starting price of 99 lakhs. The Luxury farmhouse comes up with a range of amenities, such as spacious living quarters, well-maintained gardens, swimming pools, security services, and sometimes even private helipads. The specific amenities will vary depending on the property. It has modern and opulent design. The starting price of 99 lakhs for a luxury farmhouse is relatively affordable compared to luxury properties in many other parts of the world.
          </p>
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700">
                <HomeIcon size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800">50+ plots Sold</h4>
                <p className="text-slate-500 font-medium">Successfully completed transactions</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700">
                <Users size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800">98% Client Satisfaction</h4>
                <p className="text-slate-500 font-medium">Happy customers recommend us</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-8 pt-8">
            <Link href="/about" className="bg-emerald-800 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-emerald-800/20 hover:bg-emerald-900 transition-all flex items-center gap-3 group">
              Discover Our Story <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-emerald-700">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Call us today</p>
                <p className="text-lg font-bold text-slate-800">+91-95995-47191</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Featured Properties Section */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center space-y-4 mb-16">
        <h2 className="text-5xl font-black text-slate-800">Featured Properties</h2>
        <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full" />
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">Explore our featured properties with premium locations, modern amenities, best prices, and limited-time investment opportunities available now.</p>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-8">
        {/* Large Main Card */}
        <div className="lg:col-span-2 bg-white rounded-[40px] overflow-hidden shadow-xl border border-slate-100 group">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200" alt="Lotus Farms" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-6 left-6 bg-purple-600 text-white px-5 py-1.5 rounded-full text-sm font-black uppercase tracking-widest">PREMIUM</div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4">
              <div className="bg-black/30 backdrop-blur-md px-4 py-2 rounded-xl text-white flex items-center gap-2 border border-white/20">
                <HomeIcon size={16} className="text-emerald-400" />
                <span className="text-sm font-bold">Farm Land</span>
              </div>
              <div className="bg-black/30 backdrop-blur-md px-4 py-2 rounded-xl text-white flex items-center gap-2 border border-white/20">
                <Search size={16} className="text-emerald-400" />
                <span className="text-sm font-bold">CCTV Surveillance</span>
              </div>
              <div className="bg-black/30 backdrop-blur-md px-4 py-2 rounded-xl text-white flex items-center gap-2 border border-white/20">
                <TrendingUp size={16} className="text-emerald-400" />
                <span className="text-sm font-bold">1008 Sq.Yd.</span>
              </div>
            </div>
          </div>
          <div className="p-10 space-y-6">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <h3 className="text-4xl font-black text-slate-800">Lotus Farms Land</h3>
                <p className="text-slate-400 flex items-center gap-2 font-medium">
                  <MapPin size={18} className="text-emerald-600" /> Behind WTC, Techzone Greater Noida
                </p>
              </div>
              <div className="bg-emerald-800 text-white px-8 py-3 rounded-2xl text-3xl font-black shadow-lg shadow-emerald-800/20">
                ₹72,00,000
              </div>
            </div>
            <p className="text-slate-500 text-lg leading-relaxed">
              Lotus Farm House is a premium farmhouse project designed to offer a peaceful lifestyle surrounded by nature. The project features well-planned plots, open green spaces, and a calm environment away from city noise. With good road connectivity and essential amenities, it ensures both comfort and convenience. Lotus Farm House is an ideal choice for weekend homes, long-term living, and smart investment opportunities. Its serene surroundings, fresh air, and future growth potential make it perfect for families and investors seeking a balanced and relaxed lifestyle.
            </p>
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-4">
                <button className="bg-emerald-800 text-white px-8 py-4 rounded-2xl font-black shadow-lg shadow-emerald-800/20 hover:bg-emerald-900 transition-all">SCHEDULE TOUR</button>
                <button className="border-2 border-emerald-800 text-emerald-800 px-8 py-4 rounded-2xl font-black hover:bg-emerald-50 transition-all">VIEW GALLERY</button>
              </div>
              <div className="flex flex-col items-end">
                <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-xs font-black uppercase mb-1">FOR SALE</span>
                <span className="text-slate-400 text-sm font-medium">Listed today</span>
              </div>
            </div>
          </div>
        </div>

        {/* Small Cards Column */}
        <div className="space-y-8">
          {[
            { title: "The Lake Country Side Farms", loc: "Aligarh - Palwal State Highway, Tappal Dist. Aligarh U.P", price: "₹1,50,00,000", tag: "HOT DEAL", tagCol: "bg-orange-500", img: "https://images.unsplash.com/photo-1510673398445-94f476ef2cbc?auto=format&fit=crop&q=80&w=500" },
            { title: "Grandthum", loc: "Plot no, A2, 2 road, Techzone 4, Patwari, Greater Noida, Uttar Pradesh", price: "₹3,50,00,000", tag: "NEW LISTING", tagCol: "bg-emerald-500", img: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=500" }
          ].map((p, idx) => (
            <div key={idx} className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-slate-50 group flex flex-col h-[calc(50%-16px)]">
              <div className="relative h-56 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className={`absolute top-4 right-4 ${p.tagCol} text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest`}>{p.tag}</div>
              </div>
              <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="text-2xl font-black text-slate-800 leading-tight">{p.title}</h4>
                  <p className="text-slate-400 text-xs flex items-center gap-1 font-medium"><MapPin size={12} className="text-emerald-600" /> {p.loc}</p>
                </div>
                <div className="flex items-center gap-3 text-[10px] font-bold text-slate-500 uppercase">
                  <span className="flex items-center gap-1"><HomeIcon size={12} className="text-emerald-500" /> Farm Land</span>
                  <span className="flex items-center gap-1 text-emerald-700">Flower Gardens</span>
                  <span className="flex items-center gap-1">1008 Sq.Yd.</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <div className="text-2xl font-black text-slate-800">{p.price}</div>
                  <button className="bg-emerald-800 text-white px-5 py-2 rounded-xl text-[10px] font-black hover:bg-emerald-900 shadow-md">VIEW</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Medium Bottom Card */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-slate-50 grid md:grid-cols-2 group">
            <div className="relative min-h-[300px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800" alt="AVS Homes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-6 left-6 bg-purple-700 text-white px-5 py-1 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <Star size={12} fill="currentColor" /> EXCLUSIVE
              </div>
            </div>
            <div className="p-10 space-y-6 flex flex-col justify-center">
              <div className="space-y-2">
                <h3 className="text-4xl font-black text-slate-800">AVS Homes</h3>
                <p className="text-slate-400 flex items-center gap-2 font-medium">
                  <MapPin size={18} className="text-emerald-600" /> Sector-17B Dankaur
                </p>
                <div className="flex items-center gap-6 pt-2 font-bold text-slate-500 text-sm">
                  <span className="flex items-center gap-2"><HomeIcon size={16} className="text-emerald-600" /> Plot</span>
                  <span className="flex items-center gap-2 uppercase">Nagar Panchayat</span>
                  <span className="flex items-center gap-2">100 Gaz</span>
                </div>
              </div>
              <p className="text-slate-500 text-lg leading-relaxed line-clamp-3">
                AVS Homes Plots premium residential plots offer the perfect blend of location, connectivity, and investment value. Designed for modern living, these plots provide clear titles, planned infrastructure, and a peaceful environment—ideal for building your dream home or securing a smart, long-term real estate investment.
              </p>
              <div className="flex justify-between items-center pt-4">
                <div className="text-3xl font-black text-slate-800">₹40,00,000</div>
                <button className="bg-emerald-700 text-white px-8 py-3 rounded-2xl font-black shadow-lg shadow-emerald-700/20 hover:bg-emerald-800 uppercase tracking-widest text-sm">VIEW DETAILS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Featured Agents Section */}
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 text-center space-y-4 mb-16">
        <h2 className="text-5xl font-black text-slate-800">Featured Agents</h2>
        <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full" />
        <p className="text-slate-600 text-lg max-w-4xl mx-auto leading-relaxed">
          Our agents at Century Group are experienced professionals with deep knowledge of plots and farm land projects. They provide personalized guidance, transparent communication, and complete support throughout the buying and selling process.
        </p>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { name: "Shivam Kumar", role: "SALES EXECUTIVE", badge: "STAR AGENT", bCol: "bg-yellow-400", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
          { name: "Vikash Kumar", role: "SALES EXECUTIVE", badge: "EXPERT", bCol: "bg-emerald-700", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
          { name: "Diwakar Singh", role: "SALES EXECUTIVE", badge: "RISING STAR", bCol: "bg-emerald-500", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400", active: true },
          { name: "Pragati Pandey", role: "SALES EXECUTIVE", badge: "RISING STAR", bCol: "bg-purple-600", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" }
        ].map((a, i) => (
          <div key={i} className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-slate-100 group transition-all duration-500 hover:-translate-y-3">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={a.img} alt={a.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className={`absolute top-6 left-6 ${a.bCol} text-white px-5 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase`}>{a.badge}</div>

              {a.active && (
                <div className="absolute inset-0 bg-emerald-900/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-4">
                    <button className="bg-white text-emerald-700 p-4 rounded-full shadow-2xl hover:bg-emerald-50 transition-colors"><Phone size={24} /></button>
                    <button className="bg-white text-emerald-700 p-4 rounded-full shadow-2xl hover:bg-emerald-50 transition-colors"><Mail size={24} /></button>
                  </div>
                </div>
              )}
            </div>
            <div className="p-8 text-center space-y-2">
              <h4 className="text-2xl font-black text-slate-800">{a.name}</h4>
              <p className="text-emerald-700 font-black text-xs tracking-widest">{a.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Why Us Section */}
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-5xl font-black text-slate-800">Why Us</h2>
          <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full" />
          <p className="text-slate-500 text-lg max-w-4xl mx-auto leading-relaxed">
            Om Enterprises is a trusted name in real estate, known for transparent deals, prime locations, and customer-first service. With years of experience, quality developments, and strong after-sales support, Om Enterprises helps clients invest safely and grow their future with confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <h3 className="text-4xl font-black text-slate-800 leading-tight">
              Why Choose Om Enterprises for Real Estate Partners?
            </h3>
            <p className="text-slate-500 text-lg">
              With over two decades of experience in the real estate market, we've built our reputation on trust, expertise, and exceptional results. Our dedicated team of local experts understands the nuances of every neighborhood and market trend.
            </p>

            <div className="space-y-6">
              {[
                { title: "Local Market Expertise", desc: "Deep knowledge of neighborhoods, pricing trends, and market conditions in your area." },
                { title: "Verified Listings Only", desc: "Every property is thoroughly vetted and verified before listing to ensure accuracy and quality." },
                { title: "24/7 Client Support", desc: "Our dedicated support team is available around the clock to assist with your real estate needs." },
                { title: "Proven Track Record", desc: "Consistently delivering results with over 500 successful transactions and 98% client satisfaction." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-700/20 group-hover:scale-110 transition-transform">
                    <CheckCircle size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-slate-800">{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed border-b border-slate-100 pb-4">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <Link href="/about" className="bg-emerald-800 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-800/20">Learn More About Us</Link>
              <Link href="/contact" className="border-2 border-emerald-800 text-emerald-800 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition-all">Contact Our Team</Link>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <HomeIcon />, val: "500+", label: "Plots Sold", sub: "Successfully closed transactions across all property types and price ranges." },
                { icon: <Users />, val: "98%", label: "Client Satisfaction", sub: "Exceptional service quality rated by our satisfied homeowners and investors." },
                { icon: <Clock />, val: "20+", label: "Years Experience", sub: "Two decades of expertise navigating changing market conditions successfully." },
                { icon: <Award />, val: "45+", label: "Industry Awards", sub: "Recognition for excellence in real estate service and client satisfaction." }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-[40px] shadow-xl border border-slate-50 space-y-4 hover:shadow-2xl transition-all duration-500 group">
                  <div className="text-emerald-700 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="space-y-1">
                    <div className="text-4xl font-black text-slate-800">{stat.val}</div>
                    <div className="font-bold text-slate-700">{stat.label}</div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* Testimonial Quote */}
            <div className="bg-emerald-700 rounded-[40px] p-10 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <div className="text-4xl font-serif mb-6 opacity-30">“</div>
              <p className="text-xl font-medium leading-relaxed relative z-10 italic">
                Working with this team made buying our first plot a seamless experience. Their knowledge of the local market and dedication to finding the perfect property exceeded our expectations.
              </p>
              <div className="mt-8 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" alt="Khushi Rajpoot" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="font-bold">Khushi Rajpoot</h5>
                  <p className="text-xs opacity-70">General Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Big Help CTA Section */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center space-y-10">
        <h2 className="text-6xl font-black text-slate-800 tracking-tight leading-tight">
          Need Help Finding Your Dream <br /> Plots?
        </h2>
        <p className="text-slate-500 text-xl max-w-3xl mx-auto leading-relaxed">
          Om Enterprises is here to guide you at every step. From verified listings and prime locations to transparent pricing and expert support, we make buying and investing in real estate simple, secure, and stress-free. Let us turn your property goals into reality.
        </p>
        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <Link href="/contact" className="bg-emerald-800 text-white px-10 py-5 rounded-full font-black text-lg shadow-xl shadow-emerald-800/20 hover:bg-emerald-900 transition-all">Contact Us Today</Link>
          <Link href="tel:+919599547191" className="border-2 border-emerald-800 text-emerald-800 px-10 py-5 rounded-full font-black text-lg hover:bg-emerald-50 transition-all">Schedule a Call</Link>
        </div>
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
          <Link href="/contact" className="bg-white text-emerald-900 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-colors">Book a Consultation</Link>
          <Link href="/property" className="border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">Explore Plots</Link>
        </div>
      </div>
    </section>
  </>
);

export default HomePage;
