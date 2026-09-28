import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { useLanguage } from '../../i18n/LanguageContext';
import SectionTitle from '../common/SectionTitle';
import Reveal from '../common/Reveal';

const Experience = () => {
  const { t } = useLanguage();
  const { jobs } = t.experience;

  return (
    <section id="experience" className="section bg-ink-2">
      <div className="container-pf">
        <SectionTitle index={2} title={t.experience.title} subtitle={t.experience.subtitle} />

        <ol className="relative border-l border-white/10 ml-2 md:ml-3 space-y-12">
          {jobs.map((job, i) => {
            const current = job.period.includes(t.experience.present);
            return (
              <Reveal as="li" key={job.company} delay={i * 80} className="pl-8 md:pl-10 relative">
                <span
                  className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                    current ? 'bg-accent border-accent shadow-[0_0_12px_#17e1f7]' : 'bg-ink border-slate-500'
                  }`}
                />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-white">
                    {job.role} <span className="text-accent">@ {job.company}</span>
                  </h3>
                  <span className="font-mono text-xs md:text-sm text-slate-400 whitespace-nowrap">{job.period}</span>
                </div>
                {job.location && (
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                    <HiOutlineLocationMarker /> {job.location}
                  </p>
                )}
                <ul className="mt-4 space-y-2 text-slate-300">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="text-accent mt-1.5 text-xs">▹</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
