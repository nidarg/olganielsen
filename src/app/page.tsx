

'use client';

import { motion, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { aboutTexts } from '@/data/aboutTexts';
import { skillsAndCharacteristics } from '@/data/skillsAndCharacteristics';
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'board', 'boardMember', 'podcast', 'contact'];
      const currentSection = sections.find(section => {
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
    <div className="flex flex-col lg:grid lg:grid-cols-4 bg-gray-900 text-white min-h-screen">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-gray-800 rounded-lg shadow-lg lg:hidden hover:bg-gray-700"
      >
        <div className="w-6 h-0.5 bg-amber-500 mb-1"></div>
        <div className="w-6 h-0.5 bg-amber-500 mb-1"></div>
        <div className="w-6 h-0.5 bg-amber-500"></div>
      </button>

      <div className="w-full lg:col-span-3">
       

        <section id="about" className="min-h-screen w-full py-12 pattern-bg">
          <div className="section-content">
            <RevealOnScroll>
            <div className="relative w-full h-[350px] sm:h-[600px] mt-4 sm:mt-0 mb-6 sm:mb-12 rounded-lg overflow-hidden">
  <Image
    src="/olga-photos/hero-photo.jpg"
    alt="Landing page image"
    fill
    className="object-contain sm:object-cover"
    priority
  />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />
</div>

              <h2 className="text-3xl font-bold mb-12 text-amber-500">About</h2>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ gridAutoRows: '1fr' }}>
              {aboutTexts.map((box, index) => (
                <RevealOnScroll key={index}>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-[400px] flex flex-col hover-card">
                    <h3 className="text-xl font-semibold mb-4 text-amber-500 flex-shrink-0">{box.title}</h3>
                    <div className="flex-1 overflow-y-auto pr-2 scrollbar">
                      {box.content.split("\n").map((line, i) => (
                        <p key={i} className="text-gray-300 mt-2">{line}</p>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <div className="section-divider" />
            <h3 className="text-xl font-semibold mb-4 text-amber-500 mt-20">Projects for among others DFDS, L'Oreal, University of Copenhagen, Sampension, IN Groupe / Nets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ gridAutoRows: '1fr' }}>
              {skillsAndCharacteristics.map((box, index) => (
                <RevealOnScroll key={index}>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-[600px] flex flex-col hover-card">
                    <h3 className="text-xl font-semibold mb-4 text-amber-500 flex-shrink-0">{box.title}</h3>
                    <div className="flex-1 overflow-y-auto pr-2 scrollbar">
                      {box.content.split("\n").map((line, i) => (
                        line.trim() && (
                          <div key={i} className="flex items-start gap-2 mt-2">
                            <ArrowRight className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                            <p className="text-gray-300">{line}</p>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        <section id="board" className="min-h-screen py-12 pattern-bg">
          <div className="section-content">
            <RevealOnScroll>
              <h2 className="text-3xl font-bold mb-8 text-amber-500">EUROPEAN DPO ASSOCIATION board member</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover-card">
                <p className="text-gray-300">Content goes here...</p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <div className="section-divider" />

        <section id="boardMember" className="min-h-screen py-12 pattern-bg">
          <div className="section-content">
            <RevealOnScroll>
              <h2 className="text-3xl font-bold mb-8 text-amber-500">Board Member</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover-card">
                <p className="text-gray-300">Content goes here...</p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <div className="section-divider" />

        <section id="podcast" className="min-h-screen py-12 pattern-bg">
          <div className="section-content">
            <RevealOnScroll>
              <h2 className="text-3xl font-bold mb-12 text-amber-500">PODCAST "Confessions of a DPO"</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ gridAutoRows: '1fr' }}>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-[400px] flex flex-col hover-card">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src="https://picsum.photos/100/100"
                      alt="Podcast icon"
                      width={60}
                      height={60}
                      className="rounded-lg"
                    />
                    <h3 className="text-xl font-semibold text-amber-500 flex-shrink-0">About the Podcast</h3>
                  </div>
                  <div className="flex-1 overflow-y-auto pr-2 scrollbar">
                    <p className="text-gray-300">
                      "Confessions of a DPO" is a podcast that dives deep into the world of data protection, privacy, and information security. Join me as I share insights, experiences, and practical advice from my journey as a Data Protection Officer.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-[400px] flex flex-col hover-card">
                  <h3 className="text-xl font-semibold mb-4 text-amber-500 flex-shrink-0">Listen on Spotify</h3>
                  <div className="flex-1 overflow-y-auto pr-2 scrollbar">
                    <a 
                      href="https://spotify.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-300 hover:text-amber-500 transition-colors"
                    >
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                      </svg>
                      Listen to the latest episodes
                    </a>
                    <p className="mt-4 text-gray-300">
                      New episodes are released weekly, featuring discussions on:
                    </p>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Data Protection Best Practices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">GDPR Compliance Tips</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Information Security Insights</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Real-world DPO Experiences</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <div className="section-divider" />

        <section id="contact" className="min-h-screen py-12 pattern-bg">
          <div className="section-content">
            <RevealOnScroll>
              <h2 className="text-3xl font-bold mb-8 text-amber-500">Contact</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg hover-card">
                  <h3 className="text-xl font-semibold mb-4 text-amber-500">Get in touch</h3>
                  <div className="flex flex-col space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-amber-500 mb-2">Olga Nielsen</h4>
                      <p className="text-gray-300">
                        CEO and Managing Partner @ Nordic Data Compliance Centre
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-amber-500 mb-2">Contact Information</h4>
                      <p className="text-gray-300">
                        Email: <a href="mailto:olganielsen@datacompliancecentre.com" className="hover:text-amber-500 transition-colors">olganielsen@datacompliancecentre.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg hover-card">
                  <h3 className="text-xl font-semibold mb-4 text-amber-500">Connect with me</h3>
                  <div className="flex flex-col space-y-4">
                    <a 
                      href="https://www.linkedin.com/in/olganielsen-gdpr-nis2-ai-dpoasaservice-datacomplianceauditor-datacompliancedailyoperations/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-amber-500 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </div>

      <div className={`
        fixed lg:top-0 right-0 top-0 w-full md:w-1/4 h-screen bg-gray-800 shadow-lg p-6 
        transform transition-transform duration-300 z-40
        lg:col-span-1
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
      `}>
        <nav className="flex flex-col space-y-6">
          {[
           
            { id: 'about', label: 'About' },
            { id: 'board', label: 'European DPO Association' },
            { id: 'boardMember', label: 'Board Member' },
            { id: 'podcast', label: 'PODCAST "Confessions of a DPO"' },
            { id: 'contact', label: 'Contact' }
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`
                menu-item text-lg font-semibold px-4 py-2 rounded-lg transition-colors
                ${activeSection === id 
                  ? 'bg-amber-500 text-white' 
                  : 'text-amber-500 hover:bg-gray-700'}
              `}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
}