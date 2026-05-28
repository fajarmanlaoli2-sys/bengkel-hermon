import { useState } from 'react';
import { testimonials } from '../data/testimonials';
import { TestimonialItem } from '../types';
import { Star, MessageSquare, Check, Sparkles, User, HelpCircle } from 'lucide-react';

interface TestimonialsProps {
  darkMode: boolean;
}

export default function Testimonials({ darkMode }: TestimonialsProps) {
  const [selectedHighlight, setSelectedHighlight] = useState<string>('semua');

  const highlightTags = [
    { id: 'semua', label: 'Semua Ulasan' },
    { id: 'pelayanan', label: 'Pelayanan Ramah (21)' },
    { id: 'rem', label: 'Rem & Tromol (8)' },
    { id: 'harga', label: 'Harga Pas / Worth It (12)' },
    { id: 'rumah', label: 'Panggilan Pagi / Rumah (9)' },
  ];

  const filteredTestimonials = testimonials.filter((item) => {
    if (selectedHighlight === 'semua') return true;
    return item.highlightCategory?.includes(selectedHighlight);
  });

  return (
    <section
      id="testimonials"
      className={`py-20 sm:py-28 transition-colors duration-300 ${
        darkMode ? 'bg-neutral-950 text-white' : 'bg-gray-150/40 text-neutral-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <h2 className="text-xs uppercase font-mono font-bold tracking-widest text-red-500">TESTIMONI PELANGGAN</h2>
          <p className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Kisah Puas Dari Pemilik Kendaraan
          </p>
          <div className="w-16 h-1 mb-6 bg-red-600 mx-auto"></div>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Dua puluh tujuh ulasan dengan penilaian mutlak bintang lima di Google Maps adalah kehormatan besar bagi kami. Berikut penuturan jujur dari riwayat pelanggan setia kami.
          </p>
        </div>

        {/* Big Overall Google Maps Rating Scorecard Panel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className={`p-6 sm:p-10 rounded-3xl border flex flex-col md:flex-row items-center justify-between gap-8 ${
            darkMode ? 'bg-[#0f0f0f] border-white/10' : 'bg-white border-gray-100 shadow-xl'
          }`}>
            {/* Left Info block scorecard */}
            <div className="text-center md:text-left space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-2.5">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Maps_icon_%282020%29.svg"
                  alt="Google Maps Logo"
                  className="w-7 h-7"
                />
                <span className="text-sm font-bold text-gray-400 font-mono tracking-widest uppercase">GOOGLE MAPS</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl leading-none">
                Ulasan Bengkel Hermon (Panggilan)
              </h3>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Jl. Graha Bukit Raya III, Cilame, Ngamprah, Kabupaten Bandung Barat
              </p>
            </div>

            {/* Middle rating scorecard */}
            <div className="flex flex-col items-center justify-center bg-red-600/5 px-8 py-5 border border-red-500/10 rounded-2xl">
              <span className="text-5xl sm:text-6xl font-display font-black text-white leading-none block">5.0</span>
              <div className="flex gap-0.5 text-yellow-400 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>
              <span className="text-[11px] uppercase tracking-wider font-mono text-red-500 font-bold block">
                ⭐ 27+ Ulasan Riil (100% Puas)
              </span>
            </div>
          </div>
        </div>

        {/* Testimonial Feature Filters Tag selectors */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-12 max-w-2xl mx-auto">
          {highlightTags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => setSelectedHighlight(tag.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all uppercase cursor-pointer border ${
                selectedHighlight === tag.id
                  ? 'bg-red-650 border-red-650 text-white shadow-md shadow-red-600/15'
                  : darkMode
                  ? 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                  : 'bg-gray-100 border-gray-100 text-gray-500 hover:text-neutral-900 hover:bg-gray-200'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Testimonials Masonry or grid layouts */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              id={`review-card-${item.id}`}
              className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between text-left space-y-6 transition-all duration-300 hover:scale-[1.01] ${
                darkMode ? 'bg-white/5 border-white/10 shadow-lg hover:border-red-500/30' : 'bg-white border-gray-100 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                {/* Reviewer Meta Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* User profile initial avatar circular placeholder */}
                    <div className="w-10 h-10 rounded-full bg-red-600/10 border border-red-500/20 flex items-center justify-center font-bold text-red-500 text-sm">
                      {item.author.charAt(0)}
                    </div>
                    <div>
                      <span className="text-sm font-extrabold text-white block">
                        {item.author}
                      </span>
                      {/* Sub text attributes */}
                      <span className="text-[10px] text-gray-400 block mt-0.5 flex items-center gap-1">
                        {item.isLocalGuide && <span className="text-yellow-500 font-extrabold text-[9px] uppercase tracking-wider">Local Guide •</span>}
                        {item.reviewCount ? `${item.reviewCount} ulasan` : 'Pelanggan'}
                      </span>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono text-gray-500`}>
                    {item.timeAgo}
                  </span>
                </div>

                {/* Stars Indicator */}
                <div className="flex gap-0.5 text-yellow-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Actual Message comment body */}
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              {/* Owner's response indented, if exists */}
              {item.ownerResponse && (
                <div className="bg-neutral-950/40 p-4 rounded-2xl border-l-2 border-red-500 border-y border-r border-neutral-800/15">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="text-[10px] font-bold tracking-widest text-red-500 uppercase font-mono">
                      Balasan dari Pemilik Bengkel
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  </div>
                  <p className={`text-xs italic leading-normal ${darkMode ? 'text-gray-400' : 'text-gray-650'}`}>
                    &ldquo;{item.ownerResponse}&rdquo;
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
