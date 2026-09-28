import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaGitAlt, FaGithub, FaSalesforce } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss, SiMysql, SiFirebase, SiClaude } from 'react-icons/si';
import { RiOpenaiFill } from 'react-icons/ri';
import { TbPalette } from 'react-icons/tb';
import { PiMicrosoftExcelLogoFill, PiMicrosoftWordLogoFill, PiMicrosoftPowerpointLogoFill } from 'react-icons/pi';
import { HiCheck } from 'react-icons/hi';
import { useLanguage } from '../../i18n/LanguageContext';
import SectionTitle from '../common/SectionTitle';
import Reveal from '../common/Reveal';
import './Skills.css';

const GROUPS = [
  {
    key: 'tools',
    items: [
      { name: 'Claude', icon: SiClaude, color: '#d97757' },
      { name: 'ChatGPT', icon: RiOpenaiFill, color: '#10a37f' },
      { name: 'Git', icon: FaGitAlt, color: '#f05032' },
      { name: 'GitHub', icon: FaGithub, color: '#ffffff' },
      { name: 'Salesforce', icon: FaSalesforce, color: '#00a1e0' },
      { name: 'Excel', icon: PiMicrosoftExcelLogoFill, color: '#21a366' },
      { name: 'Word', icon: PiMicrosoftWordLogoFill, color: '#2b7cd3' },
      { name: 'PowerPoint', icon: PiMicrosoftPowerpointLogoFill, color: '#d35230' },
      { name: 'Canva', icon: TbPalette, color: '#00c4cc' },
    ],
  },
  {
    key: 'frontend',
    items: [
      { name: 'HTML5', icon: FaHtml5, color: '#e34f26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572b6' },
      { name: 'JavaScript', icon: IoLogoJavascript, color: '#f7df1e' },
      { name: 'React', icon: FaReact, color: '#61dafb' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#38bdf8' },
    ],
  },
  {
    key: 'backend',
    items: [
      { name: 'Python', icon: FaPython, color: '#3776ab' },
      { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
      { name: 'Firebase', icon: SiFirebase, color: '#ffca28' },
    ],
  },
];

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section">
      <div className="container-pf">
        <SectionTitle index={3} title={t.skills.title} subtitle={t.skills.subtitle} />

        <div className="space-y-12">
          {GROUPS.map((group) => (
            <div key={group.key}>
              <Reveal>
                <h3 className="font-mono text-sm uppercase tracking-widest text-slate-400 mb-5">
                  {t.skills.groups[group.key]}
                </h3>
              </Reveal>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                {group.items.map(({ name, icon: Icon, color }, i) => (
                  <Reveal key={name} delay={i * 50}>
                    <div className="skill-card card" style={{ '--skill-color': color }}>
                      <Icon className="text-3xl sm:text-4xl skill-icon" />
                      <span className="mt-3 text-xs sm:text-sm text-slate-300">{name}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}

          <div>
            <Reveal>
              <h3 className="font-mono text-sm uppercase tracking-widest text-slate-400 mb-5">
                {t.skills.groups.soft}
              </h3>
            </Reveal>
            <Reveal>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {t.skills.soft.map((s) => (
                  <li key={s} className="card px-4 py-3 flex items-center gap-3 text-slate-300">
                    <HiCheck className="text-accent shrink-0" /> {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
