import React from 'react';

interface SectionHeadingProps {
    badge?: string;
    title: string;
    subtitle?: string;
    light?: boolean;
}

const SectionHeading = ({ badge, title, subtitle, light = false }: SectionHeadingProps) => (
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

export default SectionHeading;
