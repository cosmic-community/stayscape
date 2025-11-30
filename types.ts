// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at?: string;
  modified_at?: string;
}

// Image type for file metafields
export interface CosmicImage {
  url: string;
  imgix_url: string;
}

// Property type select-dropdown values
export type PropertyTypeKey = 'apartment' | 'house' | 'villa' | 'cabin' | 'condo' | 'cottage' | 'loft';
export type PropertyTypeValue = 'Apartment' | 'House' | 'Villa' | 'Cabin' | 'Condo' | 'Cottage' | 'Loft';

export interface PropertyType {
  key: PropertyTypeKey;
  value: PropertyTypeValue;
}

// Amenity options
export type Amenity = 
  | 'WiFi'
  | 'Kitchen'
  | 'Pool'
  | 'Hot Tub'
  | 'Free Parking'
  | 'Air Conditioning'
  | 'Washer'
  | 'Dryer'
  | 'TV'
  | 'Workspace'
  | 'Beach Access'
  | 'Mountain View'
  | 'Pet Friendly';

// Category type
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name: string;
    icon?: CosmicImage;
    description?: string;
  };
}

// Host type
export interface Host extends CosmicObject {
  type: 'hosts';
  metadata: {
    name: string;
    photo?: CosmicImage;
    bio?: string;
    superhost?: boolean;
    response_rate?: number;
  };
}

// Listing type
export interface Listing extends CosmicObject {
  type: 'listings';
  metadata: {
    property_name: string;
    description?: string;
    city: string;
    country: string;
    address?: string;
    price_per_night: number;
    property_type: PropertyType;
    bedrooms: number;
    bathrooms: number;
    max_guests: number;
    featured_image?: CosmicImage;
    photo_gallery?: CosmicImage[];
    amenities?: Amenity[];
    category?: Category;
    host?: Host;
  };
}

// API Response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip?: number;
}

export interface CosmicSingleResponse<T> {
  object: T;
}

// Filter types
export interface ListingFilters {
  category?: string;
  propertyType?: PropertyTypeKey;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  amenities?: Amenity[];
}