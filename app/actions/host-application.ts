'use server';

import { createHostApplication } from '@/lib/cosmic';

export async function submitHostApplication(formData: FormData) {
  // Extract and validate form data
  const full_name = formData.get('full_name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const property_address = formData.get('property_address') as string;
  const property_type = formData.get('property_type') as string;
  const number_of_rooms = parseInt(formData.get('number_of_rooms') as string, 10);
  const description = formData.get('description') as string;
  const experience = (formData.get('experience') as string) || '';

  // Validate required fields
  if (!full_name || !email || !phone || !property_address || !property_type || !number_of_rooms || !description) {
    throw new Error('Please fill in all required fields');
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('Please enter a valid email address');
  }

  // Validate number of rooms is positive
  if (number_of_rooms < 1) {
    throw new Error('Number of bedrooms must be at least 1');
  }

  try {
    // Create the host application in Cosmic
    await createHostApplication({
      full_name,
      email,
      phone,
      property_address,
      property_type,
      number_of_rooms,
      description,
      experience,
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to submit host application:', error);
    throw new Error('Failed to submit application. Please try again later.');
  }
}