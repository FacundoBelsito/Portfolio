import React from 'react';
import { HiOutlineAcademicCap, HiOutlineBookOpen } from 'react-icons/hi';
import { useLanguage } from '../../i18n/LanguageContext';
import SectionTitle from '../common/SectionTitle';
import Reveal from '../common/Reveal';

const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="section">
      <div className="container-pf">
        <SectionTitle index={4} title={t.education.title} subtitle={t.education.subtitle} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.education.items.map((item, i) => {
            const Icon = i === 0 || i === t.education.items.length - 1 ? HiOutlineAcademicCap : HiOutlineBookOpen;
            return (
              <Reveal key={item.title} delay={i * 60} className="h-full">
                <article
                  className={`card h-full p-6 transition-colors duration-300 hover:border-accent/40 ${
                    item.current ? 'border-accent/40 bg-accent/[0.04]' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Icon className="text-2xl text-accent" />
                    {item.current && (
                      <span className="text-[11px] font-mono uppercase tracking-wider rounded-full bg-accent/15 text-accent px-2.5 py-1">
                        {t.education.inProgress}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.place}</p>
                  <p className="mt-3 text-sm text-slate-300">{item.desc}</p>
                  <p className="mt-4 font-mono text-xs text-slate-500">{item.period}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
