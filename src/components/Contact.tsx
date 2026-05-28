import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Sparkles,
  ExternalLink,
  Navigation
} from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [formSent, setFormSent] = useState(false);

  const [activeTab, setActiveTab] = useState<'whatsapp' | 'email'>('whatsapp');
  
  // WhatsApp Response Generator States
  const [waName, setWaName] = useState('');
  const [waVehicle, setWaVehicle] = useState('');
  const [waLocation, setWaLocation] = useState('');
  const [waProblem, setWaProblem] = useState('Mesin mati total saat di perjalanan dan tidak bisa distarter.');
  const [waCategory, setWaCategory] = useState<'darurat' | 'estimasi' | 'aki' | 'ecu'>('darurat');

  const generateWhatsAppLink = () => {
    const categoryLabels = {
      darurat: '🚨 EMERGENSI / MOGOK JALAN (24 JAM)',
      estimasi: '💰 ESTIMASI HARGA & TUNE-UP',
      aki: '🔋 GANTI AKI PANGGILAN SIAGA',
      ecu: '💻 SCAN ECU & KELISTRIKAN KOMPLEKS'
    };

    const text = `*BENGKEL HERMON - PENAWARAN & INQUIRY PANGGILAN*
---------------------------------------
*Kategori*: ${categoryLabels[waCategory]}
*Nama*: ${waName || '(Belum diisi)'}
*Kendaraan*: ${waVehicle || '(Belum diisi)'}
*Lokasi*: ${waLocation || '(Belum diisi)'}
*Detail Keluhan*: ${waProblem || '(Belum diisi)'}
---------------------------------------
_Dikirim otomatis via WhatsApp Generator Bengkel Hermon_`;

    return `https://wa.me/6282129590179?text=${encodeURIComponent(text)}`;
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !msg) {
      alert('Silakan lengkapi nama Anda dan deskripsi pesan.');
      return;
    }
    // Simulate contact form submission
    setFormSent(true);
    setName('');
    setEmail('');
    setMsg('');
    setTimeout(() => {
      setFormSent(false);
    }, 5000);
  };

  // Google Maps URL matching: "5G29+CFJ Cilame, Kabupaten Bandung Barat, Jawa Barat - Pin Lokasi : (-6.8489196, 107.5186309)"
  const mapEmbedUrl = "https://maps.google.com/maps?q=-6.8489196,107.5186309&z=16&output=embed";

  return (
    <section
      id="kontak"
      className={`py-20 sm:py-28 transition-colors duration-300 relative ${
        darkMode ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <h2 className="text-xs uppercase font-mono font-bold tracking-widest text-red-500">KONTAK & WORKSHOP</h2>
          <p className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Hubungi Kami Kapan Saja (24 Jam)
          </p>
          <div className="w-16 h-1 mb-6 bg-red-600 mx-auto"></div>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Mengalami masalah di jalan? Butuh estimasi biaya turun mesin atau tune up? Hubungi nomor admin atau langsung kirim pesan konsultasi di bawah ini.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch mb-16">
          {/* Left panel: Info + Quick Form (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6 text-left">
              <h3 className="font-display text-2xl font-black tracking-tight">
                Informasi Kontak Utama
              </h3>

              <div className="space-y-4">
                {/* Contact: HP/WhatsApp */}
                <a
                  href="tel:0821-2959-0179"
                  className={`flex items-start gap-4 p-4 rounded-2xl border transition-all ${
                    darkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-gray-50 border-gray-150 hover:bg-white shadow-sm'
                  }`}
                >
                  <div className="p-3 bg-red-600/10 rounded-xl text-red-500 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-gray-500 font-bold block mb-0.5">TELEPON & WHATSAPP</span>
                    <p className="font-bold text-base text-white">0821-2959-0179</p>
                    <p className="text-xs text-red-500 font-semibold mt-0.5">Bisa Ditelfon / Chat Respons Sesaat</p>
                  </div>
                </a>

                {/* Contact: Alamat */}
                <div
                  className={`flex items-start gap-4 p-4 rounded-2xl border ${
                    darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-150 shadow-sm'
                  }`}
                >
                  <div className="p-3 bg-red-600/10 rounded-xl text-red-500 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-gray-500 font-bold block mb-0.5">ALAMAT WORKSHOP</span>
                    <p className="font-bold text-sm text-white">5G29+CFJ Cilame, Kabupaten Bandung Barat, Jawa Barat</p>
                    <p className="text-xs font-mono text-red-500 font-semibold mt-0.5">Pin Lokasi: (-6.8489196, 107.5186309)</p>
                  </div>
                </div>

                {/* Contact: Hari operasional */}
                <div
                  className={`flex items-start gap-4 p-4 rounded-2xl border ${
                    darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-150 shadow-sm'
                  }`}
                >
                  <div className="p-3 bg-red-600/10 rounded-xl text-red-500 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-gray-500 font-bold block mb-0.5">JAM OPERASIONAL</span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                      </span>
                      <p className="font-bold text-sm text-green-500">Buka 24 Jam Non-Stop</p>
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5">Senin sampai Minggu (Hari libur nasional tetap buka)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive WhatsApp Response Generator vs Simple Inquiry Form */}
            <div className={`p-6 rounded-3xl border text-left flex flex-col justify-between ${
              darkMode ? 'bg-white/5 border-white/10 shadow-xl' : 'bg-gray-50 border-gray-200 shadow-sm'
            }`}>
              <div>
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-red-500 block mb-0.5">DIRECT CUSTOMER PORTAL</span>
                <h4 className={`font-display font-black text-xl mb-4 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Konsultasi & Tanya Biaya</h4>

                {/* Tabs button */}
                <div className="grid grid-cols-2 gap-2 mb-4 p-1 bg-neutral-950/40 rounded-xl border border-white/5">
                  <button
                    type="button"
                    onClick={() => setActiveTab('whatsapp')}
                    className={`py-2 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none ${
                      activeTab === 'whatsapp'
                        ? 'bg-red-650 text-white shadow-md'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    WA Template
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('email')}
                    className={`py-2 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none ${
                      activeTab === 'email'
                        ? 'bg-red-650 text-white shadow-md'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    Form Web
                  </button>
                </div>
              </div>

              {activeTab === 'whatsapp' ? (
                <div className="space-y-4 animate-fadeIn">
                  {/* Category select tags */}
                  <div>
                    <label className="text-[10px] font-mono tracking-wider text-gray-400 font-bold uppercase block mb-1.5">Pilih Keluhan / Kebutuhan</label>
                    <div className="grid grid-cols-2 gap-1.5">
                      {[
                        { id: 'darurat', label: '🚑 Mogok Jalan' },
                        { id: 'estimasi', label: '💰 Estimasi Biaya' },
                        { id: 'aki', label: '🔋 Layanan Aki' },
                        { id: 'ecu', label: '💻 Scanner ECU' },
                      ].map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => {
                            setWaCategory(cat.id as any);
                            if (cat.id === 'darurat') setWaProblem('Mesin mati total saat di perjalanan dan tidak bisa distarter.');
                            if (cat.id === 'estimasi') setWaProblem('Tanya perkiraan biaya tune up penuh dan check kelistrikan.');
                            if (cat.id === 'aki') setWaProblem('Butuh ganti aki mobil / motor panggilan ke lokasi rumah.');
                            if (cat.id === 'ecu') setWaProblem('Indikator mesin menyala terus, butuh deteksi scanner ECU komputer.');
                          }}
                          className={`px-2.5 py-1.5 text-left rounded-lg border text-[10px] font-bold transition-all flex items-center justify-between cursor-pointer ${
                            waCategory === cat.id
                              ? 'bg-red-650 border-[#e11d48] text-white shadow'
                              : 'bg-black/20 border-white/5 text-gray-400 hover:bg-black/40 hover:text-white'
                          }`}
                        >
                          <span>{cat.label}</span>
                          {waCategory === cat.id && <Sparkles className="w-2.5 h-2.5 text-white fill-current animate-pulse" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="space-y-2.5">
                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label className="text-[9px] font-mono font-bold tracking-wider text-gray-500 uppercase block mb-1">Nama Lengkap</label>
                        <input
                          type="text"
                          placeholder="Budi"
                          value={waName}
                          onChange={(e) => setWaName(e.target.value)}
                          className={`w-full px-2.5 py-1.5 rounded-lg border text-[11px] focus:outline-none focus:ring-1 focus:ring-red-500 ${
                            darkMode ? 'bg-neutral-900 border-neutral-800 text-white placeholder-gray-500' : 'bg-white border-gray-200 text-neutral-900'
                          }`}
                        />
                      </div>
                      <div>
                        <label className="text-[9px] font-mono font-bold tracking-wider text-gray-500 uppercase block mb-1">Merek & Tipe Kendaraan</label>
                        <input
                          type="text"
                          placeholder="Avanza 2018"
                          value={waVehicle}
                          onChange={(e) => setWaVehicle(e.target.value)}
                          className={`w-full px-2.5 py-1.5 rounded-lg border text-[11px] focus:outline-none focus:ring-1 focus:ring-red-500 ${
                            darkMode ? 'bg-neutral-900 border-neutral-800 text-white placeholder-gray-500' : 'bg-white border-gray-200 text-neutral-900'
                          }`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[9px] font-mono font-bold tracking-wider text-gray-500 uppercase block mb-1">Lokasi Panggilan</label>
                      <input
                        type="text"
                        placeholder="Perum Graha Bukit Raya, Cilame"
                        value={waLocation}
                        onChange={(e) => setWaLocation(e.target.value)}
                        className={`w-full px-2.5 py-1.5 rounded-lg border text-[11px] focus:outline-none focus:ring-1 focus:ring-red-500 ${
                          darkMode ? 'bg-neutral-900 border-neutral-800 text-white placeholder-gray-500' : 'bg-white border-gray-200 text-neutral-900'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="text-[9px] font-mono font-bold tracking-wider text-gray-500 uppercase block mb-1">Deskripsi Tambahan</label>
                      <textarea
                        rows={2}
                        placeholder="Deskripsi singkat masalah..."
                        value={waProblem}
                        onChange={(e) => setWaProblem(e.target.value)}
                        className={`w-full px-2.5 py-1.5 rounded-lg border text-[11px] focus:outline-none focus:ring-1 focus:ring-red-500 ${
                          darkMode ? 'bg-neutral-900 border-neutral-800 text-white placeholder-gray-500' : 'bg-white border-gray-200 text-neutral-900'
                        }`}
                      ></textarea>
                    </div>
                  </div>

                  {/* Template live output preview */}
                  <div className="p-2.5 bg-neutral-950/70 border border-white/5 rounded-xl">
                    <span className="text-[8px] font-mono font-bold text-red-500 tracking-widest uppercase block mb-1">LIVE TEMPLATE PREVIEW</span>
                    <div className="font-mono text-[9px] text-gray-400 leading-normal max-h-[85px] overflow-y-auto select-none whitespace-pre-wrap">
                      <strong>*BENGKEL HERMON - INQUIRY*</strong><br />
                      *Nama*: {waName || '_______'}<br />
                      *Kendaraan*: {waVehicle || '_______'}<br />
                      *Lokasi*: {waLocation || '_______'}<br />
                      *Keluhan*: {waProblem || '_______'}
                    </div>
                  </div>

                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    Kirim template WhatsApp Instan
                  </a>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4 animate-fadeIn">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Nama Anda"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`px-3 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-1 focus:ring-red-500 ${
                        darkMode ? 'bg-neutral-900 border-neutral-800 text-white placeholder-gray-500' : 'bg-white border-gray-200 text-neutral-900'
                      }`}
                    />
                    <input
                      type="email"
                      placeholder="Email (Opsional)"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`px-3 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-1 focus:ring-red-500 ${
                        darkMode ? 'bg-neutral-900 border-neutral-800 text-white placeholder-gray-500' : 'bg-white border-gray-200 text-neutral-900'
                      }`}
                    />
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Ketik isi pertanyaan atau konsultasi di sini..."
                    required
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className={`w-full px-3 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-1 focus:ring-red-500 ${
                      darkMode ? 'bg-neutral-900 border-neutral-800 text-white placeholder-gray-500' : 'bg-white border-gray-200 text-neutral-900'
                    }`}
                  ></textarea>

                  {formSent ? (
                    <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl text-xs flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" />
                      <span>Pesan berhasil diterima! Tim Bengkel Hermon akan membalas via HP/Email sesaat lagi.</span>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 focus:outline-none cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Kirim Pertanyaan
                    </button>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Right panel: Full Google Maps (Col 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div className={`p-4 rounded-3xl border flex-1 flex flex-col min-h-[350px] ${
              darkMode ? 'bg-[#0f0f0f] border-white/10 shadow-xl' : 'bg-gray-50 border-gray-150 shadow-sm'
            }`}>
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="text-left">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-red-500 font-extrabold block">LIVE INTERACTIVE MAP</span>
                  <h4 className="font-display font-black text-base text-white">Area Layanan Utama Se-Bandung Raya</h4>
                </div>
                <a
                  href="https://maps.app.goo.gl/XNoZX9c5Hv8VFUFt5"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-xs text-red-500 font-bold hover:underline"
                >
                  <Navigation className="w-3 h-3 text-red-500 fill-red-500" />
                  Buka Aplikasi Maps
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Responsive Embedded Iframe */}
              <div className="flex-1 rounded-2xl overflow-hidden border border-neutral-800/25 relative min-h-[320px] shadow-inner bg-neutral-900">
                <iframe
                  title="Peta Lokasi Bengkel Hermon"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: darkMode ? "invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.9)" : "none" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* FLOATING WHATSAPP BUTTON (Persistent Corner Widget with Notification Bubble) */}
        <div className="fixed bottom-6 right-6 z-40 group flex flex-col items-end gap-2 animate-bounce-slow">
          {/* Notification bubble tooltip */}
          <div className={`px-4 py-2.5 rounded-2xl shadow-xl text-xs font-bold border max-w-[240px] text-left leading-normal animate-fadeIn pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            darkMode ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-gray-100 text-neutral-900'
          }`}>
            <span className="relative flex h-2 w-2 mb-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <strong className="text-red-500 block mb-0.5">Butuh Mekanik Panggilan?</strong>
            Klik di sini untuk langsung chat WhatsApp dengan Bang Hermon (24 Jam Jaminan Gercep!).
          </div>

          {/* Floating trigger button */}
          <a
            id="floating-whatsapp-action"
            href="https://wa.me/6282129590179?text=Halo%2520Bengkel%2520Hermon%2520(Panggilan)%252C%2520saya%2520membutuhkan%2520bantuan%2520servis%2520darurat%2520atau%2520ingin%2520booking%252520di%252520rumah."
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/25 border border-green-450 hover:bg-green-600 hover:scale-110 active:scale-95 transition-all text-white focus:outline-none relative"
            title="Hubungi Kami Sekarang (WA)"
          >
            <MessageSquare className="w-6 h-6 fill-white text-green-500" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full border border-white flex items-center justify-center text-[8px] font-black text-white">
              1
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
