export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  fullDetails: string;
  iconName: string; // Used to map to Lucide icons dynamically
  category: 'perawatan' | 'perbaikan' | 'darurat';
  priceEstimate?: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment: string;
  isLocalGuide?: boolean;
  reviewCount?: number;
  photoCount?: number;
  highlightCategory?: string[];
  ownerResponse?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'servis' | 'bengkel' | 'before_after' | 'sparepart';
  imageUrl: string;
  description: string;
  beforeImageUrl?: string; // For before_after category comparison
}

export interface BookingData {
  id: string;
  customerName: string;
  phoneNumber: string;
  vehicleType: 'mobil' | 'motor';
  vehicleBrandModel: string;
  plateNumber: string;
  selectedService: string;
  complaint: string;
  bookingDate: string;
  bookingTime: string;
  serviceType: 'panggilan' | 'ke_bengkel';
  address?: string; // Optional for panggilan
  status: 'pending' | 'sent_to_whatsapp' | 'cancelled';
  createdAt: string;
}
