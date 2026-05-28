import { useState } from 'react';
import { servicesList } from '../data/services';
import { ServiceItem } from '../types';
import * as Icons from 'lucide-react';
import { ChevronRight, Star, Clock, Sparkles } from 'lucide-react';

interface ServicesProps {
  darkMode: boolean;
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

// Simple lookup component to dynamically map string keys to Lucide icons
function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    return <Icons.Settings className={className} />;
  }
  return <IconComponent className={className} />;
}

export default function Services({ darkMode, onSelectServiceForBooking }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<'semua' | 'perawatan' | 'perbaikan' | 'darurat'>('semua');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Tabs structure
  const tabs = [
    { id: 'semua', label: 'Semua Layanan' },
    { id: 'perawatan', label: 'Perawatan Berkala' },
    { id: 'perbaikan', label: 'Perbaikan Spesialis' },
    { id: 'darurat', label: 'Siaga & Darurat' },
  ];

  // Map categorization keys
  const filteredServices = servicesList.filter((service) => {
    if (activeTab === 'semua') return true;
    return service.category === activeTab;
  });

  const handleOpenDetails = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleBookService = (serviceTitle: string) => {
    onSelectServiceForBooking(serviceTitle);
    setSelectedService(null); // Close modal
  };

  return (
    <section
      id="layanan"
      className={`py-20 sm:py-28 transition-colors duration-300 ${
        darkMode ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <h2 className="text-xs uppercase font-mono font-bold tracking-widest text-red-500">DAFTAR LAYANAN</h2>
          <p className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Solusi Otomotif Terlengkap & Terpercaya
          </p>
          <div className="w-16 h-1 mb-6 bg-red-600 mx-auto"></div>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Kami melayani segala jenis perbaikan motor dan mobil (segala merk pabrikan). Tim mekanik utama kami membawa peralatan setara bengkel resmi langsung ke garasi rumah Anda.
          </p>
        </div>

        {/* Tab Selection Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-2xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all uppercase cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-red-650 text-white shadow-lg shadow-red-600/15'
                  : darkMode
                  ? 'bg-neutral-800 text-gray-400 hover:text-white hover:bg-neutral-700/80'
                  : 'bg-gray-100 text-gray-500 hover:text-neutral-900 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className={`group relative rounded-2xl p-6 sm:p-8 border flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                darkMode
                  ? 'bg-white/5 border-white/10 hover:border-red-500/40 hover:bg-[#0f0f0f] shadow-lg'
                  : 'bg-gray-50 border-gray-100 hover:border-red-200 hover:bg-white shadow-sm'
              }`}
            >
              <div>
                {/* Accent Top Decorative Badge */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-red-600/10 text-red-500 rounded-xl group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    <ServiceIcon name={service.iconName} className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-bold tracking-widest font-mono uppercase bg-neutral-950/20 px-2 py-1 rounded text-red-400 ${
                    service.category === 'darurat' ? 'border border-red-500/20 text-red-500 animate-pulse' : ''
                  }`}>
                    {service.category === 'darurat' ? '🚨 EMERGENCY' : service.category === 'perbaikan' ? '🔧 Repair' : '⚙️ Maintenance'}
                  </span>
                </div>

                <h3 className="font-display font-black text-lg sm:text-xl group-hover:text-red-500 transition-colors mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className={`text-xs sm:text-sm line-clamp-3 leading-relaxed mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {service.description}
                </p>
              </div>

              <div className="border-t border-neutral-800/15 group-hover:border-neutral-800/80 pt-4 flex items-center justify-between">
                <span className="text-[11px] font-bold text-gray-500 tracking-wide">
                  Estimasi Biaya Transparan
                </span>
                <button
                  onClick={() => handleOpenDetails(service)}
                  id={`btn-detail-${service.id}`}
                  className="flex items-center gap-1 text-xs font-extrabold text-red-500 group-hover:text-red-600 group-hover:translate-x-1 transition-all focus:outline-none cursor-pointer"
                >
                  Detail & Tarif
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Service Dialog Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Dark opaque overlay panel */}
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            ></div>

            {/* Modal Body Container */}
            <div
              id="service-detail-modal"
              className={`relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto border shadow-2xl transition-all ${
                darkMode ? 'bg-[#0f0f0f] border-white/10 text-white' : 'bg-white border-gray-100 text-neutral-900'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className={`absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-800/30 transition-colors cursor-pointer text-gray-400`}
                aria-label="Tutup Detail"
              >
                <Icons.X className="w-5 h-5" />
              </button>

              <div className="flex flex-col gap-6">
                {/* Modal Title and Icon Banner */}
                <div className="flex items-center gap-4 border-b border-neutral-800/30 pb-5">
                  <div className="p-4 bg-red-600 text-white rounded-2xl shadow-lg shadow-red-600/15">
                    <ServiceIcon name={selectedService.iconName} className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono font-bold tracking-widest text-red-500">LAYANAN BENGKEL HERMON</span>
                    <h4 className="font-display font-black text-xl sm:text-2xl tracking-tight mt-0.5">{selectedService.title}</h4>
                  </div>
                </div>

                {/* Substantive Details */}
                <div className="space-y-4 text-left leading-relaxed">
                  <div>
                    <span className="text-xs font-bold text-gray-400 block mb-1">Deksripsi Layanan Lengkap</span>
                    <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {selectedService.fullDetails}
                    </p>
                  </div>

                  <div className="bg-red-600/5 border border-red-500/10 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold text-red-500 uppercase tracking-wider block">Harga Jasa & Bahan</span>
                      <p className="font-display font-black text-lg sm:text-xl text-white mt-0.5">
                        {selectedService.priceEstimate || 'Tarif Menyesuaikan Tingkat Kerusakan'}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
                      <Clock className="w-4 h-4 text-red-500" />
                      Estimasi Pengerjaan: 1 - 2 Jam (Rata-rata)
                    </div>
                  </div>

                  {/* Operational Quality Bullet Checks */}
                  <div className="grid sm:grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span>Pelayanan ramah, teliti, & bergaransi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span>Alternatif part original atau aftermarket berkualitas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span>Menerima panggilan malam/pagi di jalan mogok</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 flex-shrink-0" />
                      <span>Jaminan kepuasan konsumen 5.0 ★</span>
                    </div>
                  </div>
                </div>

                {/* Confirm Book CTA */}
                <div className="pt-4 border-t border-neutral-800/30 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleBookService(selectedService.title)}
                    className="flex-1 bg-red-600 text-white font-extrabold py-3.5 rounded-xl hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/15 transition-all text-center focus:outline-none cursor-pointer"
                  >
                    Booking Layanan Ini Sekarang
                  </button>
                  <button
                    onClick={() => setSelectedService(null)}
                    className={`px-6 py-3.5 rounded-xl border font-bold text-sm transition-all text-center focus:outline-none cursor-pointer ${
                      darkMode ? 'bg-neutral-800 border-neutral-700 hover:bg-neutral-700' : 'bg-gray-150 border-gray-200 hover:bg-gray-200 text-neutral-850'
                    }`}
                  >
                    Tutup Detail
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
