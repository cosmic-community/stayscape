'use server';

import { createBucketClient } from '@cosmicjs/sdk';

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
});

interface HostApplicationResult {
  success: boolean;
  error?: string;
}

export async function submitHostApplication(formData: FormData): Promise<HostApplicationResult> {
  try {
    // Extract form data
    const firstName = formData.get('first_name') as string;
    const lastName = formData.get('last_name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const propertyName = formData.get('property_name') as string;
    const propertyType = formData.get('property_type') as string;
    const city = formData.get('city') as string;
    const country = formData.get('country') as string;
    const bedrooms = parseInt(formData.get('bedrooms') as string, 10);
    const bathrooms = parseFloat(formData.get('bathrooms') as string);
    const maxGuests = parseInt(formData.get('max_guests') as string, 10);
    const description = formData.get('description') as string;
    const pricePerNight = parseInt(formData.get('price_per_night') as string, 10);
    const experience = formData.get('experience') as string;
    const additionalNotes = formData.get('additional_notes') as string;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !propertyName || !propertyType || !city || !country) {
      return {
        success: false,
        error: 'Please fill in all required fields.',
      };
    }

    // Create the host application object in Cosmic
    await cosmic.objects.insertOne({
      title: `${firstName} ${lastName} - ${propertyName}`,
      type: 'host-applications',
      status: 'published',
      metafields: [
        {
          title: 'First Name',
          key: 'first_name',
          type: 'text',
          required: true,
          value: firstName,
        },
        {
          title: 'Last Name',
          key: 'last_name',
          type: 'text',
          required: true,
          value: lastName,
        },
        {
          title: 'Email',
          key: 'email',
          type: 'text',
          required: true,
          value: email,
        },
        {
          title: 'Phone',
          key: 'phone',
          type: 'text',
          required: true,
          value: phone,
        },
        {
          title: 'Property Name',
          key: 'property_name',
          type: 'text',
          required: true,
          value: propertyName,
        },
        {
          title: 'Property Type',
          key: 'property_type',
          type: 'text',
          required: true,
          value: propertyType,
        },
        {
          title: 'City',
          key: 'city',
          type: 'text',
          required: true,
          value: city,
        },
        {
          title: 'Country',
          key: 'country',
          type: 'text',
          required: true,
          value: country,
        },
        {
          title: 'Bedrooms',
          key: 'bedrooms',
          type: 'number',
          required: true,
          value: bedrooms,
        },
        {
          title: 'Bathrooms',
          key: 'bathrooms',
          type: 'number',
          required: true,
          value: bathrooms,
        },
        {
          title: 'Max Guests',
          key: 'max_guests',
          type: 'number',
          required: true,
          value: maxGuests,
        },
        {
          title: 'Description',
          key: 'description',
          type: 'textarea',
          required: true,
          value: description,
        },
        {
          title: 'Price Per Night',
          key: 'price_per_night',
          type: 'number',
          required: true,
          value: pricePerNight,
        },
        {
          title: 'Experience',
          key: 'experience',
          type: 'text',
          required: false,
          value: experience || 'No',
        },
        {
          title: 'Additional Notes',
          key: 'additional_notes',
          type: 'textarea',
          required: false,
          value: additionalNotes || '',
        },
        {
          title: 'Status',
          key: 'application_status',
          type: 'text',
          required: true,
          value: 'Pending Review',
        },
        {
          title: 'Submission Date',
          key: 'submission_date',
          type: 'date',
          required: true,
          value: new Date().toISOString().split('T')[0],
        },
      ],
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error('Error submitting host application:', error);
    return {
      success: false,
      error: 'Failed to submit application. Please try again later.',
    };
  }
}