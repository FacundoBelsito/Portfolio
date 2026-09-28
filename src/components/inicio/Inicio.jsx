import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone, HiArrowDown } from 'react-icons/hi';
import { FiDownload } from 'react-icons/fi';
import { useLanguage } from '../../i18n/LanguageContext';
import { LINKS } from '../common/links';
import './Inicio.css';

const Inicio = () => {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 pb-20 w-full ">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            {t.hero.available}
          </span>

          <p className="mt-6 text-slate-400 text-lg">{t.hero.greeting}</p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.05]">
            Facundo <span className="text-gradient">Belsito</span>
          </h1>
          <p className="mt-4 font-mono text-sm sm:text-base text-accent">{t.hero.role}</p>
          <p className="mt-6 max-w-xl text-slate-300 text-base sm:text-lg leading-relaxed">{t.hero.tagline}</p>
          <p className="mt-4 flex items-center gap-2 text-sm text-slate-500">
            <HiOutlineLocationMarker /> {t.hero.location}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              {t.hero.ctaContact}
            </a>
            <a href={LINKS.cv} download className="btn-ghost">
              <FiDownload /> {t.hero.ctaCv}
            </a>
          </div>

          <div className="mt-9 flex items-center gap-5 text-2xl text-slate-400">
            <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent transition-colors">
              <FaGithub />
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors">
              <FaLinkedin />
            </a>
            <a href={`mailto:${LINKS.email}`} aria-label="Email" className="hover:text-accent transition-colors">
              <HiOutlineMail />
            </a>
            <a href={LINKS.phoneHref} aria-label={LINKS.phone} className="hover:text-accent transition-colors">
              <HiOutlinePhone />
            </a>
          </div>
        </div>
      </div>

      <a href="#about" aria-label="Scroll" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-accent animate-bounce hidden md:block">
        <HiArrowDown className="text-2xl" />
      </a>
    </section>
  );
};

export default Inicio;
