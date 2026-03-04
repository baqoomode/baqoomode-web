import { S3Client } from "@aws-sdk/client-s3";

// Configure the S3 client to communicate with Cloudflare R2
export const r2Client = new S3Client({
    region: "auto",
    endpoint: process.env.CLOUDFLARE_R2_ENDPOINT!, // e.g., https://<account_id>.r2.cloudflarestorage.com
    credentials: {
        accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID!,
        secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY!,
    },
});

export const R2_BUCKET_NAME = process.env.CLOUDFLARE_R2_BUCKET_NAME!;

// Utility function to generate public URL if the bucket is configured for public access
export function getPublicR2Url(objectKey: string) {
    const publicDomain = process.env.CLOUDFLARE_R2_PUBLIC_DOMAIN;
    if (!publicDomain) {
        throw new Error("Public domain not configured for R2");
    }
    return `https://${publicDomain}/${objectKey}`;
}
