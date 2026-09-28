import React from 'react';
import Reveal from './Reveal';

const SectionTitle = ({ index, title, subtitle }) => (
  <Reveal className="mb-12 md:mb-16">
    <p className="font-mono text-sm text-accent mb-3">
      {String(index).padStart(2, '0')}.
    </p>
    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
      {title}
    </h2>
    {subtitle && <p className="mt-3 text-slate-400 text-base md:text-lg">{subtitle}</p>}
  </Reveal>
);

export default SectionTitle;
