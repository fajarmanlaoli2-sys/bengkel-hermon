import { ServiceItem } from '../types';

export const servicesList: ServiceItem[] = [
  {
    id: 's1',
    title: 'Ganti Oli Mesin & Transmisi',
    description: 'Penggantian oli mesin, filter oli, dan oli transmisi berkualitas tinggi untuk menjaga performa mesin tetap halus dan awet.',
    fullDetails: 'Kami menyediakan berbagai pilihan oli mesin berkualitas (mesin bensin & diesel) dari merek terkemuka yang disesuaikan dengan rekomendasi pabrikan kendaraan Anda. Paket ini mencakup pengecekan filter oli, pembersih udara sederhana, penyetelan celah busi, dan pemantauan level cairan lainnya.',
    iconName: 'Droplet',
    category: 'perawatan',
    priceEstimate: 'Mulai Rp 350.000 (Oli + Jasa)'
  },
  {
    id: 's2',
    title: 'Tune Up Specialist',
    description: 'Pembersihan kerak ruang bakar, throtle body, pemeriksaan busi, filter udara, dan optimalisasi sistem pembakaran kendaraan.',
    fullDetails: 'Mengembalikan performa optimal mesin Anda, menghemat konsumsi bahan bakar, mengoreksi idle kasar, dan meremajakan respons throttle kendaraan Anda. Layanan ini mencakup pembersihan tuntas injector/karburator dan sensor-sensor aliran udara (MAF/MAP).',
    iconName: 'Gauge',
    category: 'perawatan',
    priceEstimate: 'Mulai Rp 200.000'
  },
  {
    id: 's3',
    title: 'Service & Overhaul Mesin',
    description: 'Perbaikan segala kendala mesin dari rembes oli, bunyi abnormal, pincang, hingga overhaul total (turun mesin).',
    fullDetails: 'Didukung peralatan lengkap & mekanik berpengalaman untuk mendeteksi masalah mekanikal mesin secara presisi. Mulai dari penggantian packing/gasket carter yang rembes, penggantian piston, klep, timing belt/chain, hingga pembubutan silinder head jika terjadi overheat.',
    iconName: 'Cpu',
    category: 'perbaikan',
    priceEstimate: 'Sesuai tingkat kerusakan (Konsultasi Free)'
  },
  {
    id: 's4',
    title: 'Service Sistem Rem & Tromol',
    description: 'Penggantian kampas rem, pembersihan piston kaliper, bubut piringan, pengurasan minyak rem, serta perawatan handbrake.',
    fullDetails: 'Keamanan adalah prioritas utama. Penanganan lengkap meliputi penggantian kampas rem (break pads/shoes), pelumasan pin kaliper, pembuangan angin palsu (bleeding), penyetelan rem tromol belakang, hingga pemeriksaan fungsi ABS secara elektronik.',
    iconName: 'Disc',
    category: 'perbaikan',
    priceEstimate: 'Mulai Rp 150.000'
  },
  {
    id: 's5',
    title: 'Kelistrikan & Kabel Bodi',
    description: 'Diagnosis dan perbaikan korsleting, kabel bodi terbakar, lampu redup/mati, alternator, dinamo starter, dan sensor bodi.',
    fullDetails: 'Menangani masalah kelistrikan kompleks pada mobil modern maupun klasik. Mengatasi dinamo starter yang ngadat, pengisian aki lemah (dinamo ampere/alternator), pemasangan relay lampu bodi, perbaikan central lock, power window, hingga wiring diagram bawaan.',
    iconName: 'Zap',
    category: 'perbaikan',
    priceEstimate: 'Mulai Rp 100.000'
  },
  {
    id: 's6',
    title: 'Ban, Velg & Spooring Panggilan',
    description: 'Pemeriksaan kaki-kaki, penggantian ban darurat, balancing, pemantauan as roda, shockbreaker, dan part kemudi lainnya.',
    fullDetails: 'Layanan pengecekan kaki-kaki mobil yang mendetail (tierod, balljoint, bushing arm, link stabilizer) untuk mengembalikan kenyamanan berkendara Anda. Kami juga melayani pendampingan darurat penggantian/tambal ban bocor di lokasi Anda.',
    iconName: 'Wrench',
    category: 'perawatan',
    priceEstimate: 'Mulai Rp 150.000'
  },
  {
    id: 's7',
    title: 'Ganti Aki Panggilan (24 Jam)',
    description: 'Layanan jumper aki mati atau penggantian aki baru bergaransi langsung di lokasi Anda (rumah, kantor, atau jalan).',
    fullDetails: 'Mobil mogok karena aki soak? Kami siap datang kapan saja (24 Jam) membawa unit aki baru berkualitas (aki kering/basah) sesuai spesifikasi kelistrikan mobil Anda, lengkap dengan pengujian sistem pengisian alternator sebelum pemasangan rampung.',
    iconName: 'BatteryCharging',
    category: 'darurat',
    priceEstimate: 'Harga Aki + Jasa Pasang (Garansi)'
  },
  {
    id: 's8',
    title: 'Service & Isi Freon AC',
    description: 'Mengatasi AC tidak dingin, bau tidak sedap, blower lemah, ganti magnetic clutch, pembersihan evaporator/kondensor.',
    fullDetails: 'Mengembalikan kesegaran kabin mobil Anda dari masalah AC panas atau sekadar perawatan berkala. Meliputi pengurasan oli kompresor AC, vakum, pengisian freon R134a murni, pembersihan filter kabin, hingga flushing sistem AC.',
    iconName: 'Wind',
    category: 'perbaikan',
    priceEstimate: 'Mulai Rp 200.000'
  },
  {
    id: 's9',
    title: 'Scan Engine OBD2 & Diagnosis',
    description: 'Pengecekan indikator Check Engine menyala menggunakan scanner scanner khusus untuk membaca kode eror sensor mobil.',
    fullDetails: 'Mobil modern dikendalikan ECU. Jika lampu injeksi / check engine Anda menyala, kami menggunakan scanner komputer profesional OBD2 untuk membaca kode kerusakan (DTC) secara real-time, menganalisis sensor oksigen, koil, throttle, mendeteksi kelainan sistem, dan melakukan reset data ECU pasca-perbaikan.',
    iconName: 'Activity',
    category: 'darurat',
    priceEstimate: 'Mulai Rp 150.000'
  }
];
