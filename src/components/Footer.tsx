import React from 'react';
import { Wrench, Phone, MapPin, Star, MessageSquare } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = (element as HTMLElement).offsetTop - 70;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer
      id="main-footer"
      className={`border-t transition-colors duration-300 ${
        darkMode
          ? 'bg-neutral-950 border-neutral-800 text-white'
          : 'bg-gray-900 border-gray-800 text-gray-300'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-neutral-800">
          {/* Brand Left Widget (Col 5) */}
          <div className="md:col-span-4 space-y-4">
            <a
              href="#home"
              onClick={(e) => handleScrollToTop(e, '#home')}
              className="flex items-center gap-3.5 group"
            >
              <Logo size={42} darkMode={true} className="shrink-0 transition-transform duration-300 group-hover:scale-105" />
              <div>
                <span className="font-display text-lg sm:text-xl font-black tracking-tighter leading-none block text-white">
                  BENGKEL <span className="text-red-500">HERMON</span>
                </span>
                <span className="text-[10px] tracking-[0.15em] uppercase font-bold block text-red-500 -mt-0.5">
                  Automotive Specialist
                </span>
              </div>
            </a>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Layanan montir panggilan & servis motor/mobil berkualitas langsung ke garasi rumah, kantor, atau jalan mogok. Siaga 24 jam dengan jaminan pengerjaan rapi, teliti, saksama, dan harga paling bersahabat.
            </p>
            {/* Google Rating recap */}
            <div className="flex items-center gap-2 bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 inline-flex">
              <span className="text-sm font-bold text-white">⭐ 5.0 Rating</span>
              <span className="text-[10px] text-gray-500 font-mono">Diverifikasi oleh 27+ Pelanggan Google Maps</span>
            </div>
          </div>

          {/* Quick Links Menu (Col 3) */}
          <div className="md:col-span-3 space-y-4 text-xs sm:text-sm">
            <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs">Akses Navigasi</h4>
            <div className="grid grid-cols-2 gap-2 text-gray-450">
              <a href="#home" onClick={(e) => handleScrollToTop(e, '#home')} className="hover:text-red-500 transition-colors">Home</a>
              <a href="#tentang" onClick={(e) => handleScrollToTop(e, '#tentang')} className="hover:text-red-500 transition-colors">Tentang Kami</a>
              <a href="#layanan" onClick={(e) => handleScrollToTop(e, '#layanan')} className="hover:text-red-500 transition-colors">Daftar Layanan</a>
              <a href="#booking" onClick={(e) => handleScrollToTop(e, '#booking')} className="hover:text-red-500 transition-colors">Booking Servis</a>
              <a href="#galeri" onClick={(e) => handleScrollToTop(e, '#galeri')} className="hover:text-red-500 transition-colors">Galeri Bengkel</a>
              <a href="#testimonials" onClick={(e) => handleScrollToTop(e, '#testimonials')} className="hover:text-red-500 transition-colors">Testimonial</a>
              <a href="#kontak" onClick={(e) => handleScrollToTop(e, '#kontak')} className="hover:text-red-500 transition-colors">Toko & Kontak</a>
            </div>
          </div>

          {/* Core Services (Col 3) */}
          <div className="md:col-span-3 space-y-4 text-xs sm:text-sm">
            <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs">Layanan Utama</h4>
            <ul className="space-y-1.5 text-gray-400">
              <li>• Specialist Tune-up Gas</li>
              <li>• Perbaikan Kelistrikan Kompleks</li>
              <li>• Servis Rem Tromol & Cakram</li>
              <li>• Scanner ECU Komputerisasi</li>
              <li>• Ganti Oli Mesin & Transmisi</li>
              <li>• Ganti Aki Siaga Darurat 24 Jam</li>
            </ul>
          </div>

          {/* Quick Location info (Col 2) */}
          <div className="md:col-span-2 space-y-4 text-xs">
            <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs">Kontak Panggilan</h4>
            <div className="space-y-3 font-mono">
              <a href="tel:0821-2959-0179" className="flex items-center gap-1.5 text-white bg-red-650/10 hover:bg-red-650 border border-red-500/20 px-3 py-1.5 rounded-lg transition-all text-xs font-bold justify-center md:justify-start">
                <Phone className="w-3.5 h-3.5" />
                0821-2959-0179
              </a>
              <p className="text-[10px] text-gray-500 leading-tight">
                Alamat: 5G29+CFJ Cilame, Kabupaten Bandung Barat, Jawa Barat
              </p>
            </div>
          </div>
        </div>

        {/* Brand Bottom Metadata */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4 text-center md:text-left">
          <div className="space-y-1">
            <p>© {currentYear} Bengkel Hermon. Seluruh Hak Cipta Dilindungi Undang-Undang.</p>
            <p className="text-[10px] text-neutral-600">Company Profile & Marketing Platform • Specialist Montir Panggilan se-Bandung Raya.</p>
          </div>
          <div className="flex gap-4 text-[10px]">
            <a href="#tentang" onClick={(e) => handleScrollToTop(e, '#tentang')} className="hover:underline">Tentang Kami</a>
            <span>•</span>
            <a href="#booking" onClick={(e) => handleScrollToTop(e, '#booking')} className="hover:underline">Ketentuan Booking</a>
            <span>•</span>
            <a href="https://maps.app.goo.gl/XNoZX9c5Hv8VFUFt5" target="_blank" rel="noreferrer" className="hover:underline">Buka Google Maps</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
