import { NextResponse } from 'next/server';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { r2Client, R2_BUCKET_NAME } from '@/lib/r2';

export const runtime = "edge";

export async function POST(request: Request) {
    try {
        const { filename, contentType } = await request.json();

        if (!filename || !contentType) {
            return NextResponse.json(
                { error: 'Filename and contentType are required' },
                { status: 400 }
            );
        }

        // Generate a unique key for the upload to prevent overwrites
        const uniqueKey = `uploads/${Date.now()}-${filename.replace(/[^a-zA-Z0-9.-]/g, '_')}`;

        const command = new PutObjectCommand({
            Bucket: R2_BUCKET_NAME,
            Key: uniqueKey,
            ContentType: contentType,
            // ACL: 'public-read' // Uncomment if you want uploaded objects to be public immediately (depends on bucket settings)
        });

        const signedUrl = await getSignedUrl(r2Client, command, { expiresIn: 3600 }); // URL valid for 1 hour

        return NextResponse.json({
            url: signedUrl,
            key: uniqueKey
        });

    } catch (error) {
        console.error('Error generating presigned URL:', error);
        return NextResponse.json(
            { error: 'Failed to generate presigned URL' },
            { status: 500 }
        );
    }
}
