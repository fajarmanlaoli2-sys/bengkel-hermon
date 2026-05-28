import { Wrench, Phone, CalendarCheck, Star, Award, Shield, Timer } from 'lucide-react';
import Logo from './Logo';

interface HeroProps {
  darkMode: boolean;
  onBookingClick: () => void;
}

export default function Hero({ darkMode, onBookingClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Underlay - Dark Premium Automotive Image with Overlay Grains */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1600"
          alt="Premium Dark Automotive Background"
          className="w-full h-full object-cover brightness-[0.22] contrast-[1.05] grayscale-[20%]"
        />
        {/* Elegant Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/40 to-transparent"></div>
        {/* Subtle grid patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center lg:text-left">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Tagline / Indicator */}
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/20 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-red-500 uppercase mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              BENGKEL PANGGILAN 24 JAM SE BANDUNG RAYA
            </div>

            {/* Core Headings */}
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.1] sm:leading-none">
              BENGKEL <span className="text-red-500 relative inline-block">HERMON<span className="absolute left-0 bottom-1 w-full h-[6px] bg-red-600/30 -z-10"></span></span>
              <span className="block mt-1 sm:mt-2 text-2xl sm:text-3xl md:text-4xl text-gray-300 font-medium">
                Servis Cepat, Tepat, dan Profesional
              </span>
            </h1>

            {/* Descriptors */}
            <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Mekanik mobil panggilan terpercaya berpusat di <span className="text-white font-semibold">Cilame (Bandung Raya)</span>. Kami langsung meluncur ke lokasi Anda (rumah, kantor, atau jalan) kapan saja di saat darurat atau sekadar servis rutin. Tanpa overprice, jujur, telaten, dan rapi!
            </p>

            {/* CTAs Button Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-booking-cta"
                onClick={onBookingClick}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-red-600/20 hover:shadow-red-600/35 hover:-translate-y-0.5 transition-all text-base focus:outline-none cursor-pointer"
              >
                <CalendarCheck className="w-5 h-5" />
                Booking Servis Online
              </button>

              <a
                id="hero-wa-cta"
                href="https://wa.me/6282129590179?text=Halo%20Bengkel%20Hermon,%20saya%20ingin%20memesan%20jasa%20montir%20panggilan%20darurat%20/%20servis%20di%20rumah.%20Berikut%20detail%20kebanyakan%20kendala%20saya..."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-neutral-900 border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800 text-white font-extrabold px-8 py-4 rounded-xl transition-all text-base focus:outline-none"
              >
                <Phone className="w-5 h-5 text-green-500 fill-green-500/20" />
                Hubungi WhatsApp
              </a>
            </div>

            {/* Values highlights */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 border-t border-neutral-800/80 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left space-y-1">
                <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs font-bold text-gray-400 capitalize">
                  <Shield className="w-3.5 h-3.5 text-red-500" />
                  Mekanik Jujur
                </div>
                <span className="text-[11px] text-gray-500 block leading-tight">Penjelasan informatif & teliti</span>
              </div>
              <div className="text-center lg:text-left space-y-1">
                <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs font-bold text-gray-400 capitalize">
                  <Timer className="w-3.5 h-3.5 text-red-500" />
                  Siaga 24 Jam
                </div>
                <span className="text-[11px] text-gray-500 block leading-tight">Panggilan malam/pagi buta</span>
              </div>
              <div className="text-center lg:text-left space-y-1">
                <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs font-bold text-gray-400 capitalize">
                  <Award className="w-3.5 h-3.5 text-red-500" />
                  Harga Worth It
                </div>
                <span className="text-[11px] text-gray-500 block leading-tight">Harga pas, hasil tuntas</span>
              </div>
            </div>
          </div>

          {/* Hero Right Content - Aesthetic Premium Dashboard Widget Card */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex flex-col items-center justify-center">
            {/* Real Brand Badge Seal */}
            <div className="mb-6 filter drop-shadow-[0_0_20px_rgba(225,29,72,0.25)] hover:scale-105 transition-transform duration-500">
              <Logo size={160} darkMode={true} className="mx-auto" />
            </div>

            {/* Visual Glassmorphism Card */}
            <div className="w-full relative mx-auto max-w-sm sm:max-w-md rounded-3xl p-6 sm:p-8 bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md shadow-2xl space-y-6 text-left">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase">OFFICIAL RATING</span>
                </div>
                <div className="flex gap-0.5 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Large Metric Indicator */}
              <div className="flex items-end justify-between border-b border-neutral-800 pb-5">
                <div>
                  <span className="text-4xl sm:text-5xl font-display font-black text-white">5.0</span>
                  <span className="text-sm text-gray-400 font-semibold ml-2">Google Maps Skor</span>
                </div>
                <span className="text-xs text-red-500 hover:underline font-bold cursor-pointer">
                  27+ Real Ulasan
                </span>
              </div>

              {/* Animated Stats Carousel/Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-950/40 p-4 rounded-2xl border border-neutral-800/40">
                  <span className="text-xs text-gray-400 block mb-1 font-semibold">Mobil Di-servis</span>
                  <span className="text-2xl sm:text-3xl font-display font-bold text-white block">1.200+</span>
                  <span className="text-[10px] text-gray-500 block mt-0.5">Swift, Avanza, KIA, Ertiga...</span>
                </div>
                <div className="bg-neutral-950/40 p-4 rounded-2xl border border-neutral-800/40">
                  <span className="text-xs text-gray-400 block mb-1 font-semibold">Pelanggan Puas</span>
                  <span className="text-2xl sm:text-3xl font-display font-bold text-white block">500+</span>
                  <span className="text-[10px] text-gray-500 block mt-0.5">Rating Sempurna 5.0 ★</span>
                </div>
              </div>

              {/* Verified Badge / Quote */}
              <div className="bg-gradient-to-r from-red-600/10 to-transparent p-3.5 rounded-xl border-l-2 border-red-600">
                <p className="text-xs text-gray-300 italic">
                  &ldquo;Montir panggilan langgananku. Semua masalah mobil ku selalu teratasi. Pengerjaan rapi, teliti, informatif, dan harganya worth it banget...&rdquo;
                </p>
                <span className="text-[10px] text-red-500 font-bold block mt-2 text-right">
                  — Rosaria Nirna (Google Guide Review)
                </span>
              </div>
            </div>

            {/* Elegant glowing background dots in behind */}
            <div className="absolute top-1/2 -translate-y-1/2 left-1/4 -z-10 w-44 h-44 bg-red-600/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
