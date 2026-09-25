import { NextResponse } from 'next/server';

export async function GET() {
  const fileId = process.env.CV_DRIVE_ID;

  if (!fileId) {
    return NextResponse.json({ error: 'CV not configured' }, { status: 500 });
  }

  return NextResponse.redirect(
    `https://docs.google.com/document/d/${fileId}/export?format=pdf`
  );
}
