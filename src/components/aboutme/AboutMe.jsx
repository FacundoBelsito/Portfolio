import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { useLanguage } from '../../i18n/LanguageContext';
import SectionTitle from '../common/SectionTitle';
import Reveal from '../common/Reveal';
import { LINKS } from '../common/links';
import './AboutMe.css';

const AboutMe = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <div className="container-pf">
        <SectionTitle index={1} title={t.about.title} />

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-start">
          <Reveal>
            <div className="space-y-5 text-slate-300 text-base md:text-lg leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
              {t.about.stats.map((s) => (
                <div key={s.label} className="card p-4 sm:p-5">
                  <p className="font-display text-2xl sm:text-3xl font-bold text-accent">{s.value}</p>
                  <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href={LINKS.cv} download className="btn-primary">
                <FiDownload /> {t.about.cv}
              </a>
              <a href="#contact" className="btn-ghost">
                {t.about.contact}
              </a>
            </div>
          </Reveal>

          <Reveal delay={150} className="flex justify-center md:justify-end">
            <div className="photo-frame">
              <img src={LINKS.photo} alt="Facundo Belsito" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
