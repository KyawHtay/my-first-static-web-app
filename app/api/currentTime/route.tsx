import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() { 
    const currentTime = new Date().toLocaleTimeString('en-UK');

    return NextResponse.json({ 
        message: `Hello from the API! The current time (U.K) is ${currentTime}.`
    });
}