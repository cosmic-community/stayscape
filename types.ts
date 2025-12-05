export interface Listing {
  id: string;
  slug: string;
  title: string;
  created_at: string;
  modified_at: string;
  status: string;
  thumbnail: string;
  metadata: {
    property_name: string;
    property_type: string;
    description: string;
    price_per_night: number;
    bedrooms: number;
    bathrooms: number;
    max_guests: number;
    location: string;
    city: string;
    country: string;
    latitude?: number;
    longitude?: number;
    featured_image: {
      url: string;
      imgix_url: string;
    };
    images?: Array<{
      url: string;
      imgix_url: string;
    }>;
    amenities?: string[];
    house_rules?: string;
    cancellation_policy?: string;
    minimum_nights?: number;
    instant_booking?: boolean;
    category?: {
      id: string;
      slug: string;
      title: string;
      metadata: {
        name: string;
      };
    };
    host?: {
      id: string;
      slug: string;
      title: string;
      metadata: {
        name: string;
        bio?: string;
        profile_image?: {
          url: string;
          imgix_url: string;
        };
      };
    };
  };
}

export interface Category {
  id: string;
  slug: string;
  title: string;
  metadata: {
    name: string;
    description?: string;
    icon?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface Host {
  id: string;
  slug: string;
  title: string;
  metadata: {
    name: string;
    email: string;
    phone?: string;
    bio?: string;
    profile_image?: {
      url: string;
      imgix_url: string;
    };
    verified?: boolean;
    response_rate?: number;
    response_time?: string;
  };
}

export interface HostApplication {
  id?: string;
  title: string;
  type: 'host-applications';
  status: 'published';
  metadata: {
    full_name: string;
    email: string;
    phone: string;
    property_name: string;
    property_type: string;
    location: string;
    description: string;
    why_host: string;
    application_status: string;
    submitted_at: string;
  };
}