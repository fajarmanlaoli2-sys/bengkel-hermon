import { ShieldCheck, Flame, UserCheck, Settings, ExternalLink, MapPin } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const coreValues = [
    {
      icon: <Flame className="w-6 h-6 text-red-500" />,
      title: 'Gercep & Fast Response',
      desc: 'Seringkali datang dalam waktu singkat (di bawah 15-30 menit) setelah dikontak, mengawal kendala darurat di jalan raya Bandung-Lembang-Cimahi maupun langsung meluncur ke carport rumah Anda.',
    },
    {
      icon: <UserCheck className="w-6 h-6 text-red-500" />,
      title: 'Mekanik Ramah & Informatif',
      desc: 'Mekanik Juntak (Bang Hermon) & tim selalu sabar, telaten, ramah, dan bersedia menjawab, mengedukasi, serta menerangkan setiap detail kerusakan sekaligus mendiskusikan part alternatif guna menghemat biaya.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
      title: 'Kualitas Pengerjaan Rapi',
      desc: 'Tune-up, rem bocor, penggantian aki, hingga ganti radiator dikerjakan secara tuntas, bersih, teliti, dan rapi demi keselamatan berkendara keluarga Anda selama berwisata atau bepergian.',
    },
    {
      icon: <Settings className="w-6 h-6 text-red-500" />,
      title: 'Peralatan Modern & Komplit',
      desc: 'Menggunakan scanner komputer OBD2 canggih untuk mendiagnosis sensor, membersihkan ruang bakar dengan larutan Carbon Clean premium, serta didukung toolset portabel tangguh yang lengkap.',
    },
  ];

  return (
    <section
      id="tentang"
      className={`py-20 sm:py-28 transition-colors duration-300 ${
        darkMode ? 'bg-neutral-950 text-white' : 'bg-gray-50 text-neutral-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <h2 className="text-xs uppercase font-mono font-bold tracking-widest text-red-500">PROFIL BENGKEL</h2>
          <p className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Dari Cilame Menjangkau Seluruh Kebutuhan Otomotif Anda
          </p>
          <div className="w-16 h-1 mb-6 bg-red-600 mx-auto"></div>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Bengkel Hermon dirintis dari semangat menghadirkan solusi otomotif yang jujur, transparan, dan tidak merepotkan konsumen. Sebagai spesialis montir panggilan utama di se-Bandung Raya, kami meyakini bahwa servis kendaraan berkualitas tidak harus mahal dan membuang waktu Anda mengantre berjam-jam di bengkel fisik.
          </p>
        </div>

        {/* Content Block 1: History, Vision, and Mechanics */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Photos Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-neutral-800">
              <img
                src="/src/assets/images/luxury_cars_service_1779990878465.png"
                alt="Aktivitas Servis Kerjanya"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Secondary absolute decor image offset */}
            <div className="absolute -bottom-8 -right-8 w-48 sm:w-64 rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-neutral-800 hidden md:block">
              <img
                src="/src/assets/images/engine_spark_plugs_1779990921652.png"
                alt="Peralatan Komplit Bengkel Hermon"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Accent backdrop ornament */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-650/15 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Texts Bio */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
              Komitmen Layanan 24 Jam Bengkel Hermon
            </h3>
            <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
              Dimotori oleh <strong className="text-red-500">Bang Hermon Juntak</strong>, kami melayani perbaikan mobil dan motor baik yang sifatnya perawatan preventif rutin (ganti oli, tune up, setel rem) maupun penanganan tak terduga (mobil mogok mendadak pagi hari saat ingin berangkat kerja, radiator bocor di jalan tol, atau kipas mesin mati saat macet parah).
            </p>
            <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
              Wilayah jangkauan kami sangat fleksibel meliputi <strong className="text-white">Cilame, Ngamprah, Padalarang, Cimahi, Batujajar, Cisarua, Lembang</strong>, hingga area Bandung Raya sekitarnya. Kami memprioritaskan keselamatan berkendara Anda dengan selalu memberikan penjelasan tuntas sebelum melakukan tindakan atau penggantian suku cadang.
            </p>

            <div className="border-t border-neutral-800/80 pt-6 grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-red-500 block mb-1">VISI KAMI</span>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Menjadi penyedia jasa montir panggilan nomor satu se-Bandung Raya yang diakui atas kejujuran, kegerdepan, ketelitian, dan integritas tinggi.
                </p>
              </div>
              <div>
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-red-500 block mb-1">MISI KAMI</span>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Memberikan servis darurat yang reliabel selama 24 jam dengan biaya transparan, mengedukasi pelanggan, serta merawat kendaraan secara presisi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Block 2: Key Values Grid */}
        <div className="mt-20">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="font-display text-2xl sm:text-3xl font-black">
              Kenapa Pemilik Kendaraan Memilih Kami?
            </h3>
            <p className={`text-xs sm:text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Ulasan bintang 5 dari 27+ pelanggan kami membuktikan kualitas layanan luar biasa yang kami tawarkan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-xl ${
                  darkMode
                    ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-red-600/40'
                    : 'bg-white border-gray-100 hover:bg-white hover:border-blue-50/80 shadow-sm'
                }`}
              >
                <div className="p-3 bg-red-600/10 rounded-xl inline-block mb-5">
                  {val.icon}
                </div>
                <h4 className="font-display font-bold text-lg mb-3 tracking-tight">
                  {val.title}
                </h4>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Map Address Quick Pointer */}
        <div className={`mt-16 p-6 sm:p-8 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-6 ${
          darkMode ? 'bg-white/5 border-white/10 shadow-lg' : 'bg-red-50/10 border-red-500/10'
        }`}>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-600/20 text-red-500 rounded-xl hidden sm:block mt-1">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="text-left space-y-1">
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-red-500">LOKASI UTAMA KAMI</span>
              <p className="font-bold text-sm sm:text-base text-white">5G29+CFJ Cilame, Kabupaten Bandung Barat, Jawa Barat</p>
              <p className="text-[11px] font-mono text-red-400 font-bold">Koordinat / Pin Lokasi: (-6.8489196, 107.5186309)</p>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-650'}`}>
                Workshop utama kami strategis berada di Cilame, Kec. Ngamprah, mempermudah tim kami menjangkau tol Padalarang, daerah Pemda, Cimahi, Lembang, Lembang Barat, hingga seluruh wilayah Bandung Raya secara gercep.
              </p>
            </div>
          </div>
          <a
            href="https://maps.app.goo.gl/XNoZX9c5Hv8VFUFt5"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 bg-red-600 text-white font-bold text-xs px-5 py-3 rounded-full hover:bg-red-700 transition-colors whitespace-nowrap"
          >
            Petunjuk Arah Rute Google
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
