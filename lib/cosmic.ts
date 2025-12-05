import { createBucketClient } from '@cosmicjs/sdk';
import { Listing, Category, Host, HostApplication } from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging',
});

// Helper to check if error has status property
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all listings
export async function getListings(): Promise<Listing[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'listings' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Listing[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch listings');
  }
}

// Fetch listings by category
export async function getListingsByCategory(categoryId: string): Promise<Listing[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'listings',
        'metadata.category': categoryId 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Listing[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch listings by category');
  }
}

// Fetch a single listing by slug
export async function getListingBySlug(slug: string): Promise<Listing | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'listings', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object as Listing;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch listing');
  }
}

// Fetch all categories
export async function getCategories(): Promise<Category[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'categories' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects as Category[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch categories');
  }
}

// Fetch a single category by slug
export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'categories', slug })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.object as Category;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch category');
  }
}

// Fetch all hosts
export async function getHosts(): Promise<Host[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'hosts' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects as Host[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch hosts');
  }
}

// Fetch a single host by slug
export async function getHostBySlug(slug: string): Promise<Host | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'hosts', slug })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.object as Host;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch host');
  }
}

// Fetch listings by host
export async function getListingsByHost(hostId: string): Promise<Listing[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'listings',
        'metadata.host': hostId 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Listing[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch listings by host');
  }
}

// Create host application
export async function createHostApplication(data: {
  full_name: string;
  email: string;
  phone: string;
  property_address: string;
  property_type: string;
  number_of_rooms: number;
  description: string;
  experience: string;
}): Promise<HostApplication> {
  try {
    const response = await cosmic.objects.insertOne({
      title: `Host Application - ${data.full_name}`,
      type: 'host-applications',
      metadata: {
        full_name: data.full_name,
        email: data.email,
        phone: data.phone,
        property_address: data.property_address,
        property_type: data.property_type,
        number_of_rooms: data.number_of_rooms,
        description: data.description,
        experience: data.experience,
        status: 'Pending'
      }
    });
    
    return response.object as HostApplication;
  } catch (error) {
    throw new Error('Failed to submit host application');
  }
}