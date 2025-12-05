'use server'

import { createBucketClient } from '@cosmicjs/sdk'

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

export interface HostApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  propertyName: string;
  propertyType: string;
  location: string;
  description: string;
  whyHost: string;
}

export async function submitHostApplication(formData: HostApplicationFormData) {
  try {
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone) {
      return {
        success: false,
        error: 'Please fill in all required fields',
      }
    }

    // Create the host application object in Cosmic
    const response = await cosmic.objects.insertOne({
      title: `${formData.fullName} - Host Application`,
      type: 'host-applications',
      status: 'published',
      metadata: {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        property_name: formData.propertyName,
        property_type: formData.propertyType,
        location: formData.location,
        description: formData.description,
        why_host: formData.whyHost,
        application_status: 'Pending Review',
        submitted_at: new Date().toISOString(),
      },
    })

    return {
      success: true,
      data: response.object,
    }
  } catch (error) {
    console.error('Error submitting host application:', error)
    return {
      success: false,
      error: 'Failed to submit application. Please try again.',
    }
  }
}