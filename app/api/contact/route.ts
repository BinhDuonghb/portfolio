import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getDatabase } from '@/lib/mongodb';
import { contactFormSchema } from '@/lib/validation';
import { sendContactNotificationEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate input
    const validatedData = contactFormSchema.parse(body);

    // Connect to database
    const db = await getDatabase();
    const contactsCollection = db.collection('contacts');

    // Create document with timestamp
    const document = {
      ...validatedData,
      createdAt: new Date(),
      updatedAt: new Date(),
      read: false,
    };

    // Insert into database
    const result = await contactsCollection.insertOne(document);

    // Send email notification (non-blocking)
    sendContactNotificationEmail(validatedData).catch((error) => {
      console.error('Failed to send email notification:', error);
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Message received successfully',
        id: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    // Handle validation errors
    if (error instanceof z.ZodError) {
      // Format validation errors in a user-friendly way
      const fieldErrors = error.issues.reduce(
        (acc, issue) => {
          const field = issue.path.join('.');
          acc[field] = issue.message;
          return acc;
        },
        {} as Record<string, string>
      );

      return NextResponse.json(
        {
          success: false,
          message: 'Please check the following fields:',
          fieldErrors,
        },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to process message. Please try again later.',
      },
      { status: 500 }
    );
  }
}

