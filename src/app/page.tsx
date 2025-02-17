'use client';

import { motion, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { aboutTexts } from '../data/aboutTexts';
import { skillsAndCharacteristics } from '../data/skillsAndCharacteristics';
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'board',
        'boardMember',
        'podcast',
        'dpo-handbook',
        'contact',
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <main className='flex flex-col lg:grid lg:grid-cols-4 bg-zinc-900 text-zinc-100 min-h-screen'>
      <motion.div
        className='progress-bar'
        style={{ scaleX: scrollYProgress }}
      />

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className='fixed top-4 right-4 z-50 p-2 bg-zinc-800/90 rounded border border-zinc-700 shadow-lg lg:hidden hover:bg-zinc-800'
      >
        <div className='w-6 h-0.5 bg-white mb-1'></div>
        <div className='w-6 h-0.5 bg-white mb-1'></div>
        <div className='w-6 h-0.5 bg-white'></div>
      </button>

      <div className='w-full lg:col-span-3'>
        <section id='about' className='min-h-screen w-full py-12 pattern-bg'>
          <div className='section-content'>
            <RevealOnScroll>
              <div className='relative w-full h-[350px] sm:h-[600px] mt-4 sm:mt-0 mb-6 sm:mb-12 rounded-lg overflow-hidden'>
                <Image
                  src='/olga-photos/hero-photo.jpg'
                  alt='Professional background'
                  fill
                  className='object-contain sm:object-cover grayscale hover:grayscale-0 transition-all duration-500'
                  priority
                />
                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900' />
              </div>
              <h2 className='text-3xl font-bold mb-12 text-white'>About</h2>
            </RevealOnScroll>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {aboutTexts.map((box, index) => (
                <RevealOnScroll key={`${box.title}-${index}`}>
                  <div className='hover-card rounded-lg p-6 h-[400px] flex flex-col'>
                    <h3 className='text-xl font-semibold mb-4 text-white'>
                      {box.title}
                    </h3>
                    <div className='flex-1 overflow-y-auto pr-2 scrollbar'>
                      {box.content.split('\n').map((line, i) => (
                        <p key={i} className='text-zinc-300 mt-2'>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <div className='section-divider' />

            <div className='flex flex-col gap-8'>
              <div className='relative'>
                <RevealOnScroll>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <Image
                      src='/olga-photos/skillsAndcharacteristicsImg.jpg'
                      alt='Skills and characteristics'
                      width={800}
                      height={800}
                      className='rounded-lg grayscale hover:grayscale-0 transition-all duration-500 w-full h-[400px] object-cover'
                      unoptimized
                    />
                    <div className='flex justify-center items-center'>
                      <h3 className='text-xl font-semibold text-white bg-zinc-900/80 p-4 rounded-lg backdrop-blur-sm'>
                        Projects for among others DFDS, L'Oreal, University of
                        Copenhagen, Sampension, IN Groupe / Nets
                      </h3>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
              <div className='section-divider' />

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {skillsAndCharacteristics.map((box, index) => (
                  <RevealOnScroll key={`${box.title}-${index}`}>
                    <div className='hover-card rounded-lg p-6 h-[400px] flex flex-col'>
                      <h3 className='text-lg font-semibold mb-4 text-white'>
                        {box.title}
                      </h3>
                      <div className='flex-1 overflow-y-auto pr-2 scrollbar'>
                        {box.content.split('\n').map(
                          (line, i) =>
                            line.trim() && (
                              <div
                                key={i}
                                className='flex items-start gap-2 mt-2'
                              >
                                <ArrowRight className='w-4 h-4 text-white mt-1 flex-shrink-0 opacity-50' />
                                <p className='text-zinc-300'>{line}</p>
                              </div>
                            )
                        )}
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className='section-divider' />

        <section id='board' className='min-h-screen py-12 pattern-bg'>
          <div className='section-content'>
            <RevealOnScroll>
              <h2 className='text-3xl font-bold mb-8 text-white'>
                European DPO Association
              </h2>
              <div className='hover-card rounded-lg p-6'>
                <p className='text-zinc-300'>
                  <p>
                    The European DPO Association will launch in 2025. Stay tuned
                    for updates and&nbsp;
                    <a
                      href='https://www.linkedin.com/groups/8578566/'
                      target='_blank'
                      className='underline'
                    >
                      join the LinkedIn group
                    </a>{' '}
                    in the meantime.
                  </p>
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <div className='section-divider' />

        <section id='boardMember' className='min-h-screen py-12 pattern-bg'>
          <div className='section-content'>
            <RevealOnScroll>
              <h2 className='text-3xl font-bold mb-8 text-white'>
                Board Member
              </h2>
              <div className='hover-card rounded-lg p-6'>
                <p className='text-zinc-300'>
                  Content is currently being updated.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <div className='section-divider' />

        <section id='podcast' className='min-h-screen py-12 pattern-bg'>
          <div className='section-content'>
            <RevealOnScroll>
              <h2 className='text-3xl font-bold mb-12 text-white'>
                PODCAST "Confessions of a DPO"
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='hover-card rounded-lg p-6 h-[400px] flex flex-col'>
                  <div className='flex items-center gap-4 mb-4'>
                    <Image
                      src='/olga-photos/podcast.jpg'
                      alt='Podcast icon'
                      width={200}
                      height={200}
                      className='rounded-lg  transition-all duration-500'
                    />
                    <h3 className='text-xl font-semibold text-white'>
                      About the Podcast
                    </h3>
                  </div>
                  <div className='flex-1 overflow-y-auto pr-2 scrollbar'>
                    <p className='text-zinc-300'>
                      The podcast series "Confessions of a DPO" was launched
                      following the EDPB’s January 2024 report (
                      <a
                        href='https://www.edpb.europa.eu/our-work-tools/our-documents/other/coordinated-enforcement-action-designation-and-position-data_en'
                        target='_blank'
                        className='underline '
                      >
                        Coordinated Enforcement Action, Designation and Position
                        of Data Protection Officers | European Data Protection
                        Board
                      </a>
                      ). It highlighted the ongoing need to focus on the DPO
                      role.
                    </p>

                    <p>
                      This podcast is nothing more than a friendly conversation
                      between DPOs.
                    </p>
                  </div>
                </div>

                <div className='hover-card rounded-lg p-6 h-[400px] flex flex-col'>
                  <h3 className='text-xl font-semibold mb-4 text-white'>
                    Listen on Spotify
                  </h3>
                  <div className='flex-1 overflow-y-auto pr-2 scrollbar'>
                    <a
                      href='https://spotify.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors'
                    >
                      <svg
                        className='w-8 h-8'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                      >
                        <path d='M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z' />
                      </svg>
                      Listen to the latest episodes
                    </a>
                    <p className='mt-4 text-zinc-300'>
                      New episodes are released weekly, featuring discussions
                      on:
                    </p>
                    <ul className='mt-2 space-y-2'>
                      <li className='flex items-start gap-2'>
                        <ArrowRight className='w-5 h-5 text-white mt-1 flex-shrink-0 opacity-50' />
                        <span className='text-zinc-300'>
                          Data Protection Best Practices
                        </span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <ArrowRight className='w-5 h-5 text-white mt-1 flex-shrink-0 opacity-50' />
                        <span className='text-zinc-300'>
                          GDPR Compliance Tips
                        </span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <ArrowRight className='w-5 h-5 text-white mt-1 flex-shrink-0 opacity-50' />
                        <span className='text-zinc-300'>
                          Information Security Insights
                        </span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <ArrowRight className='w-5 h-5 text-white mt-1 flex-shrink-0 opacity-50' />
                        <span className='text-zinc-300'>
                          Real-world DPO Experiences
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <div className='section-divider' />

        <section id='dpo-handbook' className='min-h-screen py-12 pattern-bg'>
          <div className='section-content'>
            <RevealOnScroll>
              <h2 className='text-3xl font-bold mb-12 text-white'>
                Data Protection Officer – a practical handbook
              </h2>
              <div className='hover-card rounded-lg p-6'>
                <p className='text-zinc-300'>
                  Data Protection Officer – a practical handbook has been a
                  project in progress for a while now. It is anticipated to
                  launch in 2025. Please stay tuned for updates.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <div className='section-divider' />

        <section id='contact' className='min-h-screen py-12 pattern-bg'>
          <div className='section-content'>
            <RevealOnScroll>
              <h2 className='text-3xl font-bold mb-8 text-white'>Contact</h2>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className='hover-card rounded-lg p-6'>
                  <h3 className='text-xl font-semibold mb-4 text-white'>
                    Get in touch
                  </h3>
                  <div className='flex flex-col space-y-4'>
                    <div>
                      <h4 className='text-lg font-medium text-white mb-2'>
                        Olga Nielsen
                      </h4>
                      <p className='text-zinc-300'>
                        CEO and Managing Partner @ Nordic Data Compliance Centre
                      </p>
                    </div>
                    <div>
                      <h4 className='text-lg font-medium text-white mb-2'>
                        Contact Information
                      </h4>
                      <p className='text-zinc-300'>
                        Email:{' '}
                        <a
                          href='mailto:olganielsen@datacompliancecentre.com'
                          className='hover:text-white transition-colors'
                        >
                          olganielsen@datacompliancecentre.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='hover-card rounded-lg p-6'>
                  <h3 className='text-xl font-semibold mb-4 text-white'>
                    Connect with me
                  </h3>
                  <div className='flex flex-col space-y-4'>
                    <a
                      href='https://www.linkedin.com/in/olganielsen-gdpr-nis2-ai-dpoasaservice-datacomplianceauditor-datacompliancedailyoperations/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 text-zinc-300 hover:text-white transition-colors'
                    >
                      <svg
                        className='w-6 h-6'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                      </svg>
                      LinkedIn Profile
                    </a>
                    <a
                      href='https://datacompliancecentre.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 text-zinc-300 hover:text-white transition-colors'
                    >
                      <svg
                        className='w-6 h-6'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1 16.947V17h-2v-.053c-1.062-.084-2.018-.532-2.512-1.209l1.115-1.193c.383.462 1.127.863 1.897.863.768 0 1.331-.422 1.331-1.002 0-.552-.414-.854-1.312-1.178l-.847-.307c-1.158-.421-2.042-1.178-2.042-2.422 0-1.327 1.058-2.246 2.37-2.422V7h2v1.077c.897.107 1.592.496 2.023 1.002l-1.048 1.193c-.383-.422-.897-.667-1.487-.667-.69 0-1.14.345-1.14.883 0 .537.383.787 1.216 1.1l.847.307c1.255.46 2.176 1.178 2.176 2.498 0 1.394-1.117 2.346-2.587 2.556z' />
                      </svg>
                      @Nordic Data Compliance Centre
                    </a>
                  </div>
                </div>
              </div>

              <div className='mt-8'>
                <Image
                  src='/olga-photos/olga4.jpg'
                  alt='Olga Nielsen'
                  width={800}
                  height={400}
                  className='w-full rounded-lg grayscale hover:grayscale-0 transition-all duration-500'
                  unoptimized
                />
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </div>

      <div
        className={`
        fixed lg:top-0 right-0 top-0 w-full md:w-1/4 h-screen bg-zinc-900/95 backdrop-blur-sm border-l border-zinc-800 shadow-lg p-6 
        transform transition-transform duration-300 z-40
        lg:col-span-1
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
      `}
      >
        <nav className='flex flex-col space-y-6'>
          {[
            { id: 'about', label: 'About' },
            { id: 'board', label: 'European DPO Association' },
            { id: 'boardMember', label: 'Board Member' },
            { id: 'podcast', label: 'PODCAST "Confessions of a DPO"' },
            { id: 'contact', label: 'Contact' },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`
                menu-item text-lg font-semibold px-4 py-2 rounded-lg transition-colors border border-transparent
                ${
                  activeSection === id
                    ? 'bg-white/10 text-white border-zinc-700'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }
              `}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30 lg:hidden'
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </main>
  );
}
