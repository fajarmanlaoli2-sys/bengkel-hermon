import { useState } from 'react';
import { galleryList } from '../data/gallery';
import { GalleryItem } from '../types';
import { Play, ZoomIn, Eye, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  darkMode: boolean;
}

export default function Gallery({ darkMode }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'servis' | 'bengkel' | 'before_after' | 'sparepart'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterCategories = [
    { id: 'all', label: 'Semua Foto' },
    { id: 'servis', label: 'Aktivitas Servis' },
    { id: 'bengkel', label: 'Bengkel & Alat' },
    { id: 'before_after', label: 'Sebelum / Sesudah' },
    { id: 'sparepart', label: 'Suku Cadang' },
  ];

  // Map and filter active sets
  const displayedItems = galleryList.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const openLightbox = (index: number) => {
    // Find the original index of the item inside the filtered pool
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % displayedItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + displayedItems.length) % displayedItems.length);
    }
  };

  const currentLightboxItem = lightboxIndex !== null ? displayedItems[lightboxIndex] : null;

  return (
    <section
      id="galeri"
      className={`py-20 sm:py-28 transition-colors duration-300 ${
        darkMode ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <h2 className="text-xs uppercase font-mono font-bold tracking-widest text-red-500">GALERI GARASI</h2>
          <p className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Dokumentasi & Portofolio Kerja Nyata
          </p>
          <div className="w-16 h-1 mb-6 bg-red-600 mx-auto"></div>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Intip penampakan posko utama kami, kesiapan peralatan yang kami bawa di armada panggilan, serta contoh pengerjaan piringan rem, carbon cleaning, hingga pengerjaan kabel bodi yang rapi.
          </p>
        </div>

        {/* Categories Tab Selector filter */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-12 max-w-2xl mx-auto">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all uppercase cursor-pointer border ${
                activeFilter === cat.id
                  ? 'bg-red-650 border-red-650 text-white shadow-md'
                  : darkMode
                  ? 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                  : 'bg-gray-100 border-gray-100 text-gray-500 hover:text-neutral-900 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Dynamic Masonry / Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md hover:shadow-2xl border border-neutral-800/10 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Image Asset with loading optimizations */}
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Black Tint Overlay backdrop */}
              <div className="absolute inset-0 bg-neutral-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left">
                {/* Micro Category Badge */}
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-red-500 mb-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-red-500" />
                  {item.category.replace('_', ' ')}
                </span>
                <h4 className="font-display font-semibold text-sm sm:text-base text-white leading-snug">
                  {item.title}
                </h4>
                <p className="text-[10px] text-gray-300 mt-1 line-clamp-2">
                  {item.description}
                </p>

                {/* Quick Eye Zoom Action Overlay Anchor */}
                <div className="absolute top-4 right-4 p-2 bg-red-600 text-white rounded-xl shadow shadow-black/40">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              {/* Special Badge on 'Before-After' visual comparing */}
              {item.category === 'before_after' && (
                <div className="absolute top-3 left-3 bg-red-600 text-white text-[9px] font-mono font-black uppercase px-2 py-1 rounded shadow shadow-black/20 tracking-wider">
                  Before vs After
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Lightbox Overlay Modal Screen */}
        {currentLightboxItem && (
          <div className="fixed inset-0 z-50 flex flex-col justify-between p-4 bg-neutral-950/95 transition-all">
            {/* Top Toolbar Action controls */}
            <div className="flex items-center justify-between text-white py-2 px-3 border-b border-neutral-900">
              <div className="text-left">
                <span className="text-[9px] tracking-widest font-mono text-red-500 uppercase block">
                  Interactive Lightbox — {lightboxIndex! + 1} dari {displayedItems.length}
                </span>
                <h5 className="font-semibold text-sm sm:text-base">{currentLightboxItem.title}</h5>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl border border-neutral-800 transition-colors cursor-pointer"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Central Media Sandbox with Prev/Next buttons */}
            <div className="flex-1 flex items-center justify-between gap-4 max-w-7xl mx-auto w-full py-8">
              {/* Prev Button trigger */}
              <button
                onClick={handlePrev}
                className="p-3 bg-neutral-900/60 hover:bg-neutral-800 text-white rounded-full border border-neutral-800 transition-colors cursor-pointer flex-shrink-0"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Image Preview Sandbox Frame */}
              <div className="max-w-4xl max-h-[60vh] sm:max-h-[70vh] overflow-hidden flex items-center justify-center">
                {currentLightboxItem.category === 'before_after' && currentLightboxItem.beforeImageUrl ? (
                  /* Unique Side-By-Side Grid Layout representing Before VS After values! */
                  <div className="grid grid-cols-2 gap-3 max-w-full">
                    <div className="relative rounded-2xl overflow-hidden border border-neutral-800">
                      <img
                        src={currentLightboxItem.beforeImageUrl}
                        alt="Kondisi Sebelum Servis"
                        className="w-full max-h-[55vh] object-cover"
                      />
                      <span className="absolute bottom-3 left-3 bg-neutral-900/80 text-white text-[10px] sm:text-xs font-mono font-bold px-2 py-1 rounded border border-neutral-800">
                        SEBELUM (Old/Rembes)
                      </span>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border border-red-500/30 shadow-lg shadow-red-650/5">
                      <img
                        src={currentLightboxItem.imageUrl}
                        alt="Kondisi Sesudah Diperbaiki"
                        className="w-full max-h-[55vh] object-cover"
                      />
                      <span className="absolute bottom-3 left-3 bg-red-600/95 text-white text-[10px] sm:text-xs font-mono font-bold px-2 py-1 rounded shadow">
                        SESUDAH (Beres/Rapi)
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Standard Image Box screen */
                  <img
                    src={currentLightboxItem.imageUrl}
                    alt={currentLightboxItem.title}
                    className="max-h-[60vh] sm:max-h-[70vh] rounded-2xl object-contain border border-neutral-900"
                  />
                )}
              </div>

              {/* Next Button trigger */}
              <button
                onClick={handleNext}
                className="p-3 bg-neutral-900/60 hover:bg-neutral-800 text-white rounded-full border border-neutral-800 transition-colors cursor-pointer flex-shrink-0"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption and info layout */}
            <div className="max-w-2xl mx-auto text-center text-white py-4 px-6 border-t border-neutral-900 space-y-2">
              <span className="inline-block px-2.5 py-0.5 bg-red-600/10 text-red-500 border border-red-500/10 text-[9px] font-mono rounded font-bold uppercase">
                {currentLightboxItem.category.replace('_', ' ')}
              </span>
              <p className="text-gray-400 text-xs sm:text-sm">
                {currentLightboxItem.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
