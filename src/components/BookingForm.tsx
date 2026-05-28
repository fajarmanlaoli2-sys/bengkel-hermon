import React, { useState, useEffect } from 'react';
import { BookingData } from '../types';
import { servicesList } from '../data/services';
import {
  Calendar,
  Clock,
  Car,
  User,
  Phone,
  MessageSquare,
  Sparkles,
  MapPin,
  CheckCircle,
  X,
  Trash2,
  ExternalLink,
  Plus
} from 'lucide-react';

interface BookingFormProps {
  darkMode: boolean;
  preSelectedService: string;
  setPreSelectedService: (val: string) => void;
}

export default function BookingForm({
  darkMode,
  preSelectedService,
  setPreSelectedService
}: BookingFormProps) {
  // Main form state
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [vehicleType, setVehicleType] = useState<'mobil' | 'motor'>('mobil');
  const [vehicleBrandModel, setVehicleBrandModel] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [complaint, setComplaint] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('09:00');
  const [serviceType, setServiceType] = useState<'panggilan' | 'ke_bengkel'>('panggilan');
  const [address, setAddress] = useState('');

  // Past Bookings State from localStorage
  const [bookingsList, setBookingsList] = useState<BookingData[]>([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [activeBookingForModal, setActiveBookingForModal] = useState<BookingData | null>(null);

  // Sync pre-selected service value from parent state
  useEffect(() => {
    if (preSelectedService) {
      setSelectedService(preSelectedService);
    }
  }, [preSelectedService]);

  // Load bookings from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('hermon_bookings');
    if (stored) {
      try {
        setBookingsList(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse bookings from cache');
      }
    }
  }, []);

  const saveToLocal = (newBookings: BookingData[]) => {
    setBookingsList(newBookings);
    localStorage.setItem('hermon_bookings', JSON.stringify(newBookings));
  };

  // Restrict calendar input to today or future dates
  const getTodayString = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  // Form submission handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName || !phoneNumber || !vehicleBrandModel || !bookingDate || !bookingTime || !selectedService) {
      alert('Silakan lengkapi semua kolom yang berlabel wajib (*)');
      return;
    }

    if (serviceType === 'panggilan' && !address) {
      alert('Layanan Panggilan membutuhkan alamat lengkap penjemputan / pengerjaan.');
      return;
    }

    const newBooking: BookingData = {
      id: 'book_' + Date.now(),
      customerName,
      phoneNumber,
      vehicleType,
      vehicleBrandModel,
      plateNumber: plateNumber || 'Lupa Plat',
      selectedService,
      complaint: complaint || 'Tidak ada keluhan spesifik (servis berkala)',
      bookingDate,
      bookingTime,
      serviceType,
      address: serviceType === 'panggilan' ? address : 'Graha Bukit Raya III Workshop Cilame',
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    const updated = [newBooking, ...bookingsList];
    saveToLocal(updated);

    // Reset Form Input State
    setCustomerName('');
    setPhoneNumber('');
    setVehicleBrandModel('');
    setPlateNumber('');
    setComplaint('');
    setBookingDate('');
    setBookingTime('09:00');
    setAddress('');
    setPreSelectedService('');

    // Open confirmation modal
    setActiveBookingForModal(newBooking);
    setShowConfirmModal(true);
  };

  // Generate WhatsApp formatted text link
  const triggerWhatsAppSend = (booking: BookingData) => {
    const brandLabel = booking.vehicleType === 'mobil' ? '🚗 Mobil' : '🏍️ Motor';
    const serviceTypeLabel = booking.serviceType === 'panggilan' ? '🏠 PANGGILAN (Ke Rumah/Jalan Mogok)' : '🛠️ DATANG KE BENGKEL';

    const text = `Halo Bengkel Hermon (Panggilan/Rumah) 👋
Saya ingin melakukan konfirmasi Booking Jasa Servis melalui website:

📌 *INFORMASI PELANGGAN*
- Nama: ${booking.customerName}
- No HP/WA: ${booking.phoneNumber}

📌 *DETAIL KENDARAAN*
- Jenis: ${brandLabel}
- Merk & Model: ${booking.vehicleBrandModel}
- Plat Nomor: ${booking.plateNumber.toUpperCase()}

📌 *KONSULTASI SERVIS*
- Layanan Utama: ${booking.selectedService}
- Jadwal Servis: ${booking.bookingDate} pada Pukul ${booking.bookingTime} WIB
- Tipe Servis: ${serviceTypeLabel}
${booking.serviceType === 'panggilan' ? `- Lokasi Penjemputan: ${booking.address}` : ''}
- Detail Keluhan / Keperluan: ${booking.complaint}

Mohon konfirmasi kesiapan mekanik ke lokasi saya ya pak. Terima kasih!`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/6282129590179?text=${encodedText}`;

    // Update status to sent
    const updated = bookingsList.map(b => b.id === booking.id ? { ...b, status: 'sent_to_whatsapp' as const } : b);
    saveToLocal(updated);

    window.open(waUrl, '_blank');
  };

  const handleCancelBooking = (id: string) => {
    if (confirm('Apakah Anda yakin ingin membatalkan jadwal booking servis ini?')) {
      const updated = bookingsList.map(b => b.id === id ? { ...b, status: 'cancelled' as const } : b);
      saveToLocal(updated);
    }
  };

  const handleDeleteBookingHistory = (id: string) => {
    const filtered = bookingsList.filter(b => b.id !== id);
    saveToLocal(filtered);
  };

  return (
    <section
      id="booking"
      className={`py-20 sm:py-28 transition-colors duration-300 ${
        darkMode ? 'bg-neutral-950 text-white' : 'bg-gray-150/40 text-neutral-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase font-mono font-bold tracking-widest text-red-500">BOOKING ONLINE</h2>
          <p className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Atur Jadwal Servis Rumah/Workshop
          </p>
          <div className="w-16 h-1 mb-6 bg-red-600 mx-auto"></div>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Isi formulir berikut secara lengkap. Kami menyediakan metode panggilan ke lokasi tempat tinggal, kantor, atau jalan raya (layanan darurat 24 jam) serta servis nyaman di posko utama kami.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Booking inputs form layout (Col 7) */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-10 rounded-3xl border ${
              darkMode ? 'bg-[#0f0f0f] border-white/10 shadow-2xl' : 'bg-white border-gray-100 shadow-xl'
            }`}>
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-neutral-800/20">
                <div className="p-2.5 bg-red-650/10 rounded-xl text-red-500">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h3 className="font-display font-bold text-lg">Formulir Servis Mandiri</h3>
                  <p className="text-xs text-gray-400">Instan, Tanpa dipotong biaya administrasi</p>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
                {/* Customer Profile Row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-red-500" />
                      Nama Lengkap Anda *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Fadillah Aditya"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-red-650 ${
                        darkMode
                          ? 'bg-neutral-950 border-neutral-800 text-white placeholder-gray-600'
                          : 'bg-gray-50 border-gray-200 text-neutral-900 placeholder-gray-400'
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-red-500" />
                      Nomor HP / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Contoh: 081234567xxx"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-red-650 ${
                        darkMode
                          ? 'bg-neutral-950 border-neutral-800 text-white placeholder-gray-600'
                          : 'bg-gray-50 border-gray-200 text-neutral-900 placeholder-gray-400'
                      }`}
                    />
                  </div>
                </div>

                {/* Vehicle details */}
                <div className="grid sm:grid-cols-3 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 flex items-center gap-1">
                      <Car className="w-3.5 h-3.5 text-red-500" />
                      Jenis Kendaraan *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setVehicleType('mobil')}
                        className={`py-3 rounded-xl font-bold text-xs border cursor-pointer focus:outline-none transition-all ${
                          vehicleType === 'mobil'
                            ? 'bg-red-600 border-red-600 text-white'
                            : darkMode
                            ? 'bg-neutral-950 border-neutral-800 text-gray-400'
                            : 'bg-gray-50 border-gray-200 text-gray-600'
                        }`}
                      >
                        🚗 Mobil
                      </button>
                      <button
                        type="button"
                        onClick={() => setVehicleType('motor')}
                        className={`py-3 rounded-xl font-bold text-xs border cursor-pointer focus:outline-none transition-all ${
                          vehicleType === 'motor'
                            ? 'bg-red-600 border-red-600 text-white'
                            : darkMode
                            ? 'bg-neutral-950 border-neutral-800 text-gray-400'
                            : 'bg-gray-50 border-gray-200 text-gray-600'
                        }`}
                      >
                        🏍️ Motor
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-xs font-bold text-gray-400 block">
                      Merek & Tipe Kendaraan *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Suzuki Swift 2012"
                        value={vehicleBrandModel}
                        onChange={(e) => setVehicleBrandModel(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-red-650 ${
                          darkMode
                            ? 'bg-neutral-950 border-neutral-800 text-white placeholder-gray-600'
                            : 'bg-gray-50 border-gray-200 text-neutral-900 placeholder-gray-400'
                        }`}
                      />
                      <input
                        type="text"
                        placeholder="Plat Nomor (D 1234 ABC)"
                        value={plateNumber}
                        onChange={(e) => setPlateNumber(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-red-650 ${
                          darkMode
                            ? 'bg-neutral-950 border-neutral-800 text-white placeholder-gray-600'
                            : 'bg-gray-50 border-gray-200 text-neutral-900 placeholder-gray-400'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Service choice & scheduling selector */}
                <div className="grid sm:grid-cols-3 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5 text-red-500" />
                      Layanan Utama *
                    </label>
                    <select
                      required
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className={`w-full px-3 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-red-650 cursor-pointer ${
                        darkMode
                          ? 'bg-neutral-950 border-neutral-800 text-white'
                          : 'bg-gray-50 border-gray-200 text-neutral-900'
                      }`}
                    >
                      <option value="" disabled>Pilih Layanan</option>
                      {servicesList.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                      <option value="Lainnya / Sesuai Keluhan">Lainnya / Sesuai Keluhan</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-red-500" />
                      Tanggal Booking *
                    </label>
                    <input
                      type="date"
                      required
                      min={getTodayString()}
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-red-650 ${
                        darkMode
                          ? 'bg-neutral-950 border-neutral-800 text-white'
                          : 'bg-gray-50 border-gray-200 text-neutral-900'
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-red-500" />
                      Jam Booking *
                    </label>
                    <select
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-red-650 cursor-pointer ${
                        darkMode
                          ? 'bg-neutral-950 border-neutral-800 text-white'
                          : 'bg-gray-50 border-gray-200 text-neutral-900'
                      }`}
                    >
                      <option value="08:00">08:00 WIB</option>
                      <option value="09:00">09:00 WIB</option>
                      <option value="10:00">10:00 WIB</option>
                      <option value="11:00">11:00 WIB</option>
                      <option value="13:00">13:00 WIB</option>
                      <option value="14:00">14:00 WIB</option>
                      <option value="15:00">15:00 WIB</option>
                      <option value="16:00">16:00 WIB</option>
                      <option value="17:00">17:00 WIB</option>
                      <option value="19:00">19:00 WIB (Kategori Malam)</option>
                      <option value="21:00">21:00 WIB (Kategori Malam)</option>
                    </select>
                  </div>
                </div>

                {/* Service Type (Panggilan vs. Ke Bengkel) */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 block">
                    Metode Pelayanan Pelanggan *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setServiceType('panggilan')}
                      className={`py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm cursor-pointer focus:outline-none transition-all flex items-center justify-center gap-2 border ${
                        serviceType === 'panggilan'
                          ? 'bg-red-600 border-red-600 text-white shadow-md shadow-red-600/10'
                          : darkMode
                          ? 'bg-neutral-950 border-neutral-800 text-gray-400 hover:bg-neutral-900'
                          : 'bg-gray-50 border-gray-200 text-gray-650 hover:bg-gray-100'
                      }`}
                    >
                      🏠 Panggilan ke Rumah / Lokasi Anda
                    </button>
                    <button
                      type="button"
                      onClick={() => setServiceType('ke_bengkel')}
                      className={`py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm cursor-pointer focus:outline-none transition-all flex items-center justify-center gap-2 border ${
                        serviceType === 'ke_bengkel'
                          ? 'bg-red-600 border-red-600 text-white shadow-md shadow-red-600/10'
                          : darkMode
                          ? 'bg-neutral-950 border-neutral-800 text-gray-400 hover:bg-neutral-900'
                          : 'bg-gray-50 border-gray-200 text-gray-650 hover:bg-gray-100'
                      }`}
                    >
                      🛠️ Datang Sendiri ke Workshop Cilame
                    </button>
                  </div>
                </div>

                {/* Address showing dynamically for PANGGILAN */}
                {serviceType === 'panggilan' && (
                  <div className="space-y-2 animate-fadeIn">
                    <label className="text-xs font-bold text-gray-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-red-500" />
                      Alamat Jemput Panggilan Lengkap *
                    </label>
                    <textarea
                      required
                      rows={2}
                      placeholder="Contoh: Jl. Graha Bukit Raya III Blok C No. 12, Cilame, Ngamprah, KBB (Sebutkan patokan rumah / titik maps)"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-red-650 ${
                        darkMode
                          ? 'bg-neutral-950 border-neutral-800 text-white placeholder-gray-600'
                          : 'bg-gray-50 border-gray-200 text-neutral-900 placeholder-gray-400'
                      }`}
                    ></textarea>
                  </div>
                )}

                {/* Complaints vehicles input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 block">
                    Keluhan Kendaraan / Keterangan Sparepart yg Dibutuhkan
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Contoh: Rem belakang tromol berbunyi berdecit saat diinjak, tarikan mesin loyo/pincang di pagi hari, butuh dibersihkan karbunya."
                    value={complaint}
                    onChange={(e) => setComplaint(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-red-650 ${
                      darkMode
                        ? 'bg-neutral-950 border-neutral-800 text-white placeholder-gray-600'
                        : 'bg-gray-50 border-gray-200 text-neutral-900 placeholder-gray-400'
                    }`}
                  ></textarea>
                </div>

                {/* Submit button Trigger */}
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-4 rounded-xl text-base shadow-lg shadow-red-600/10 hover:shadow-red-600/25 hover:-translate-y-0.5 transition-all focus:outline-none cursor-pointer flex items-center justify-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Buat Jadwal & Dapatkan Konfirmasi
                </button>
              </form>
            </div>
          </div>

          {/* Local bookings list tracker (Col 5) */}
          <div className="lg:col-span-5 h-full space-y-6">
            <div className={`p-6 sm:p-8 rounded-3xl border text-left ${
              darkMode ? 'bg-white/5 border-white/10 shadow-lg' : 'bg-white border-gray-100 shadow-xl'
            }`}>
              <h3 className="font-display font-black text-xl mb-4 tracking-tight">
                Riwayat Booking Anda
              </h3>
              <p className={`text-xs mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Disimpan otomatis di perangkat Anda sebagai track record order service mandiri Anda di Bengkel Hermon.
              </p>

              {bookingsList.length === 0 ? (
                <div className="p-8 border-2 border-dashed border-neutral-800/40 rounded-2xl text-center space-y-2">
                  <Calendar className="w-10 h-10 text-neutral-700 mx-auto" />
                  <span className="text-sm font-bold text-gray-400 block">Belum Ada Riwayat</span>
                  <p className="text-[10px] text-gray-500 leading-normal max-w-[200px] mx-auto">
                    Data booking baru akan otomatis ditambahkan setelah Anda mengirim form.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                  {bookingsList.map((booking) => (
                    <div
                      key={booking.id}
                      className={`p-4 rounded-2xl border flex flex-col justify-between gap-3 transition-colors ${
                        darkMode ? 'bg-neutral-950 border-neutral-800/80 hover:bg-neutral-900' : 'bg-gray-50 border-gray-100 hover:bg-white'
                      }`}
                    >
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-extrabold text-white">
                              {booking.customerName}
                            </span>
                            <span className="text-[9px] font-mono font-bold tracking-wider px-1.5 py-0.5 bg-neutral-800/80 rounded uppercase text-red-400 flex items-center gap-0.5">
                              {booking.vehicleType === 'mobil' ? '🚗 Mobil' : '🏍️ Motor'}
                            </span>
                          </div>
                          <span className="text-[11px] block text-gray-400 font-semibold mt-1">
                            {booking.vehicleBrandModel} — <span className="uppercase text-red-500">{booking.plateNumber}</span>
                          </span>
                        </div>

                        {/* Status color indicator badge */}
                        <span className={`text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                          booking.status === 'sent_to_whatsapp'
                            ? 'bg-green-600/10 text-green-500 border border-green-500/10'
                            : booking.status === 'cancelled'
                            ? 'bg-neutral-800 text-gray-500'
                            : 'bg-yellow-600/10 text-yellow-500 border border-yellow-500/10'
                        }`}>
                          {booking.status === 'sent_to_whatsapp' ? '✓ Tersalur WA' : booking.status === 'cancelled' ? 'Batal' : 'Pending WA'}
                        </span>
                      </div>

                      <div className="text-[11px] text-gray-400 border-t border-neutral-800/40 pt-2 grid grid-cols-2 gap-2">
                        <div>
                          <strong className="text-gray-500 block text-[9px] uppercase font-mono">LAYANAN UTAMA</strong>
                          <span className="font-semibold text-gray-300">{booking.selectedService}</span>
                        </div>
                        <div>
                          <strong className="text-gray-500 block text-[9px] uppercase font-mono">JADWAL</strong>
                          <span className="font-semibold text-gray-300">{booking.bookingDate} @ {booking.bookingTime}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-neutral-850 pt-2.5">
                        {/* Cancellation / Delete Actions */}
                        <div className="flex items-center gap-2">
                          {booking.status !== 'cancelled' && (
                            <button
                              onClick={() => handleCancelBooking(booking.id)}
                              className="text-[10px] text-gray-500 hover:text-red-500 font-bold focus:outline-none"
                            >
                              Batalkan
                            </button>
                          )}
                          <button
                            onClick={() => handleDeleteBookingHistory(booking.id)}
                            className="p-1 text-gray-500 hover:text-red-500 rounded hover:bg-neutral-800/20 focus:outline-none"
                            title="Hapus riwayat lokal"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Direct WA transmission trigger button */}
                        {booking.status !== 'cancelled' && (
                          <button
                            onClick={() => triggerWhatsAppSend(booking)}
                            className="flex items-center gap-1 text-[10px] bg-red-650 hover:bg-red-700 text-white font-extrabold px-3 py-1.5 rounded-lg focus:outline-none transition-colors"
                          >
                            Kirim WA
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Congratulation / Form Confirm Modal */}
        {showConfirmModal && activeBookingForModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="fixed inset-0 bg-black/90 backdrop-blur-sm"
              onClick={() => setShowConfirmModal(false)}
            ></div>

            <div
               id="booking-congratulations-modal"
               className={`relative w-full max-w-md rounded-3xl p-6 sm:p-8 border shadow-2xl transition-all text-center space-y-6 ${
                 darkMode ? 'bg-[#0f0f0f] border-white/10 text-white' : 'bg-white border-gray-100 text-neutral-900'
               }`}
             >
              <div className="mx-auto w-16 h-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center border border-green-500/20">
                <CheckCircle className="w-8 h-8 animate-bounce" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-red-500">BOOKING SUKSES DICATAT</span>
                <h4 className="font-display font-black text-xl sm:text-2xl tracking-tight">
                  Satu Langkah Lagi, Kirim ke WhatsApp Mekanik!
                </h4>
                <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Terima kasih <strong className="text-red-500">{activeBookingForModal.customerName}</strong>. Agar tim Bengkel Hermon langsung merespons dan me-lock jadwal Anda, silakan klik tombol di bawah untuk meneruskan detail booking langsung ke WhatsApp resmi kami (0821-2959-0179).
                </p>
              </div>

              {/* Receipt Summary representation */}
              <div className="bg-neutral-950/50 p-4 rounded-2xl border border-neutral-800 text-left text-xs space-y-1.5 font-mono">
                <div><span className="text-gray-500">Unit:</span> {activeBookingForModal.vehicleBrandModel} ({activeBookingForModal.plateNumber.toUpperCase()})</div>
                <div><span className="text-gray-500">Servis:</span> {activeBookingForModal.selectedService}</div>
                <div><span className="text-gray-500">Jadwal:</span> {activeBookingForModal.bookingDate} @ {activeBookingForModal.bookingTime} WIB</div>
                <div><span className="text-gray-500">Tipe:</span> {activeBookingForModal.serviceType === 'panggilan' ? '🏠 Panggilan' : '🛠️ Ke Bengkel'}</div>
              </div>

              {/* Action columns */}
              <div className="flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    triggerWhatsAppSend(activeBookingForModal);
                    setShowConfirmModal(false);
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-extrabold py-3.5 rounded-xl shadow-lg shadow-green-600/15 focus:outline-none cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5 text-white fill-white" />
                  Kirim Detail via WhatsApp
                </button>
                <button
                  onClick={() => setShowConfirmModal(false)}
                  className={`w-full py-3 rounded-xl border text-xs font-bold transition-all focus:outline-none cursor-pointer ${
                    darkMode ? 'bg-neutral-800 border-neutral-700 hover:bg-neutral-700' : 'bg-gray-100 border-gray-200 hover:bg-gray-200 text-neutral-800'
                  }`}
                >
                  Lakukan Nanti / Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
