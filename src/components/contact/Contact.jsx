import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi';
import { useLanguage } from '../../i18n/LanguageContext';
import SectionTitle from '../common/SectionTitle';
import Reveal from '../common/Reveal';
import { LINKS } from '../common/links';

const Contact = () => {
  const { t } = useLanguage();

  const channels = [
    { icon: HiOutlineMail, title: 'Email', label: LINKS.email, href: `mailto:${LINKS.email}` },
    { icon: HiOutlinePhone, title: t.contact.phone, label: LINKS.phone, href: LINKS.phoneHref },
    { icon: FaLinkedin, title: 'LinkedIn', label: 'Facundo Belsito', href: LINKS.linkedin, external: true },
    { icon: FaGithub, title: 'GitHub', label: 'FacundoBelsito', href: LINKS.github, external: true },
  ];

  return (
    <section id="contact" className="section bg-ink-2">
      <div className="container-pf">
        <SectionTitle index={5} title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {channels.map(({ icon: Icon, title, label, href, external }, i) => (
            <Reveal key={href} delay={i * 80} className="h-full">
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="card h-full flex flex-col items-start gap-4 p-6 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <span className="grid place-items-center h-12 w-12 rounded-lg bg-accent/10 text-accent text-2xl">
                  <Icon />
                </span>
                <span>
                  <span className="block font-display text-lg font-semibold text-white group-hover:text-accent transition-colors">
                    {title}
                  </span>
                  <span className="block mt-1 text-[13px] text-slate-400 break-words">{label}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 flex items-center gap-2 text-sm text-slate-500">
            <HiOutlineLocationMarker /> {t.hero.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
