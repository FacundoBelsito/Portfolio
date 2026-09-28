import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { useLanguage } from '../../i18n/LanguageContext';
import { LINKS } from '../common/links';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container-pf flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Facundo Belsito. {t.footer.rights}</p>
        <div className="flex items-center gap-5 text-lg">
          <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent"><FaGithub /></a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent"><FaLinkedin /></a>
          <a href={`mailto:${LINKS.email}`} aria-label="Email" className="hover:text-accent"><HiOutlineMail /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
