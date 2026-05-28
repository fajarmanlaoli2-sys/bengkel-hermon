import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sun, Moon, Wrench } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Booking Online', href: '#booking' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Testimoni', href: '#testimonials' },
    { name: 'Kontak', href: '#kontak' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple scroll spy logic
      const scrollPosition = window.scrollY + 100;
      for (const link of navLinks) {
        const element = document.querySelector(link.href);
        if (element) {
          const top = (element as HTMLElement).offsetTop;
          const height = (element as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href.substring(1));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = (element as HTMLElement).offsetTop - 70; // Offset navbar height
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
      setActiveSection(href.substring(1));
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-[#0a0a0a]/90 border-b border-white/10 backdrop-blur-md shadow-lg shadow-black/30'
            : 'bg-white/95 border-b border-gray-100 backdrop-blur-md shadow-md'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            id="brand-logo"
            className="flex items-center gap-3.5 group cursor-pointer focus:outline-none"
          >
            <Logo size={42} darkMode={darkMode} className="shrink-0 transition-transform duration-300 group-hover:scale-105" />
            <div>
              <span className={`font-display text-lg sm:text-xl font-black tracking-tighter leading-none block ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                BENGKEL <span className="text-red-500">HERMON</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold block text-red-500 -mt-0.5">
                Automotive Specialist
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  id={`nav-${link.href.substring(1)}`}
                  className={`px-3 py-2 rounded-md text-sm font-semibold tracking-wide transition-all ${
                    activeSection === link.href.substring(1)
                      ? 'text-red-500 font-bold border-b-2 border-red-500 rounded-none'
                      : darkMode
                      ? 'text-gray-300 hover:text-white hover:bg-neutral-800/40'
                      : 'text-gray-600 hover:text-neutral-900 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 border-l pl-5 border-neutral-800/80">
              {/* Theme Settings Toggle */}
              <button
                id="theme-toggler"
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full cursor-pointer transition-colors ${
                  darkMode ? 'text-yellow-400 hover:bg-neutral-800' : 'text-neutral-600 hover:bg-gray-100'
                }`}
                aria-label="Toggle Dark/Light Mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Call Button */}
              <a
                id="navbar-wa-button"
                href="https://wa.me/6282129590179?text=Halo%20Bengkel%20Hermon,%20saya%20ingin%20konsultasi%20atau%20panggil%20mekanik%20ke%20lokasi saya"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md shadow-red-600/10 hover:bg-red-700 hover:scale-105 transition-all focus:outline-none"
              >
                <Phone className="w-4 h-4 fill-white text-red-600" />
                <span className="hidden xl:inline">Hubungi WA:</span> 0821-2959-0179
              </a>
            </div>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Quick Mobile Theme Button */}
            <button
              id="mobile-theme-toggler"
              onClick={() => setDarkMode(!darkMode)}
              className={`p-1.5 rounded-full ${
                darkMode ? 'text-yellow-400 hover:bg-neutral-800/50' : 'text-neutral-600 hover:bg-gray-100'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-trigger"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                darkMode ? 'text-gray-300 hover:text-white hover:bg-neutral-800' : 'text-neutral-600 hover:bg-gray-100'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop screen */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Drawer interface */}
          <div
            id="mobile-nav-panel"
            className={`fixed top-16 right-0 w-72 max-w-[85vw] h-[calc(100vh-4rem)] shadow-2xl p-6 overflow-y-auto flex flex-col justify-between transition-all duration-300 ${
              darkMode ? 'bg-neutral-900 border-l border-neutral-800 text-white' : 'bg-white border-l border-gray-100 text-neutral-900'
            }`}
          >
            <div className="space-y-4">
              <span className="text-xs uppercase font-semibold text-gray-400 tracking-wider block mb-2">Navigasi Halaman</span>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`block px-4 py-2.5 rounded-lg text-base font-semibold transition-all ${
                      activeSection === link.href.substring(1)
                        ? 'bg-red-600 text-white shadow-md shadow-red-600/15'
                        : darkMode
                        ? 'hover:bg-neutral-800/50 text-gray-300 hover:text-white'
                        : 'hover:bg-gray-100 text-gray-700 hover:text-neutral-900'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 border-t pt-6 border-neutral-800/80">
              <div className="p-3.5 bg-red-600/5 border border-red-500/10 rounded-xl">
                <span className="text-xs text-red-500 font-extrabold tracking-wide block uppercase mb-1">Butuh Mekanik Darurat?</span>
                <span className="text-xs text-gray-400 block mb-2">Kami melayani servis panggilan ke rumah & jalan 24 jam penuh.</span>
                <a
                  href="tel:0821-2959-0179"
                  className="flex items-center justify-center gap-2 bg-red-600 text-white py-2 rounded-lg font-bold text-sm shadow-md hover:bg-red-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-white fill-white" />
                  Telepon Sekarang
                </a>
              </div>

              <div className="text-center text-[10px] text-gray-500 font-mono">
                © {new Date().getFullYear()} Bengkel Hermon
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
