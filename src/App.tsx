import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Desktop defaults to Premium Dark Mode as requested by user
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [preSelectedService, setPreSelectedService] = useState<string>('');

  // Handle auto pre-selection of service choice & smooth scrolling to form!
  const handleSelectServiceForBooking = (serviceTitle: string) => {
    setPreSelectedService(serviceTitle);
    const element = document.querySelector('#booking');
    if (element) {
      const top = (element as HTMLElement).offsetTop - 75;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  };

  // Quick helper to scroll from Hero directly to booking form
  const handleScrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      const top = (element as HTMLElement).offsetTop - 75;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  };

  // Sync state HTML classes for Tailwind CSS
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.style.backgroundColor = '#0a0a0a'; // Neutral-950
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#ffffff';
    }
  }, [darkMode]);

  return (
    <div
      id="app-root-container"
      className={`min-h-screen font-sans antialiased transition-colors duration-300 ${
        darkMode ? 'bg-neutral-950 text-white' : 'bg-white text-neutral-900'
      }`}
    >
      {/* Dynamic Header Navbar with scrollspy and trigger toggler */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Sections */}
      <main className="relative">
        {/* 1. Hero Section: Premium Dark Automotive Wallpaper & Stats indicators */}
        <Hero darkMode={darkMode} onBookingClick={handleScrollToBooking} />

        {/* 2. Tentang Kami: History, Profiles, & Values */}
        <About darkMode={darkMode} />

        {/* 3. Layanan Bengkel: Clean card layouts with Lucide Icons */}
        <Services darkMode={darkMode} onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* 4. Booking Servis Online: Intelligent form, Date rules, WA linker, and Local history */}
        <BookingForm
          darkMode={darkMode}
          preSelectedService={preSelectedService}
          setPreSelectedService={setPreSelectedService}
        />

        {/* 5. Galeri Bengkel: Filterable tabs & custom Lightbox overlays */}
        <Gallery darkMode={darkMode} />

        {/* 6. Testimoni Pelanggan: Live ratings metrics, reviewers profiles, & owners replies */}
        <Testimonials darkMode={darkMode} />

        {/* 7. Kontak & Lokasi: embedded live map, consultation forms, & pulsing fixed WA overlay */}
        <Contact darkMode={darkMode} />
      </main>

      {/* 8. Footer Section */}
      <Footer darkMode={darkMode} />
    </div>
  );
}
