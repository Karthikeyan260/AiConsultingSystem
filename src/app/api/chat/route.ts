import { adaptResponseToNeed } from '@/ai/flows/adapt-response-to-need';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { domain, query, userNeed } = body;

    // Validate required parameters
    if (!domain || !query || !userNeed) {
      return NextResponse.json(
        { error: 'Missing required parameters: domain, query, and userNeed are required' },
        { status: 400 }
      );
    }

    // Validate domain
    const validDomains = ['Education', 'Healthcare', 'Finance', 'Retail'];
    if (!validDomains.includes(domain)) {
      return NextResponse.json(
        { error: 'Invalid domain. Must be one of: Education, Healthcare, Finance, Retail' },
        { status: 400 }
      );
    }

    // Call the Server Action
    const response = await adaptResponseToNeed({
      domain,
      query,
      userNeed,
    });

    // Return the adapted response
    return NextResponse.json({ adaptedResponse: response.adaptedResponse });
  } catch (error: any) {
    console.error('Error in chat API route:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate response' },
      { status: 500 }
    );
  }
}
