import React, { useEffect, useState } from 'react';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { useLanguage } from '../../i18n/LanguageContext';

const SECTIONS = ['about', 'experience', 'skills', 'education', 'contact'];

const NavBar = () => {
  const { t, lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = '';
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      });
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      setActive(atBottom ? SECTIONS[SECTIONS.length - 1] : current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const LangButton = ({ className = '' }) => (
    <button
      onClick={toggleLang}
      aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
      className={`font-mono text-xs rounded-full border border-white/15 px-3 py-1.5 hover:border-accent transition-colors ${className}`}
    >
      <span className={lang === 'es' ? 'text-accent' : 'text-slate-500'}>ES</span>
      <span className="text-slate-600 mx-1">/</span>
      <span className={lang === 'en' ? 'text-accent' : 'text-slate-500'}>EN</span>
    </button>
  );

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-ink/85 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-end">
        <ul className="hidden md:flex items-center gap-7 text-sm">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`transition-colors hover:text-accent ${
                  active === id ? 'text-accent' : 'text-slate-300'
                }`}
              >
                {t.nav[id]}
              </a>
            </li>
          ))}
          <li>
            <LangButton />
          </li>
        </ul>

        <div className="flex md:hidden items-center gap-3">
          <LangButton />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
            className="text-white text-2xl p-1"
          >
            {open ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden h-[calc(100dvh-4rem)] bg-ink px-6 pt-8">
          <ul className="flex flex-col gap-6">
            {SECTIONS.map((id, i) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-white hover:text-accent"
                >
                  <span className="font-mono text-sm text-accent mr-3">0{i + 1}.</span>
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
