import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

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

export default BlogPage;
