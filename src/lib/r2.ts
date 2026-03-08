import { S3Client } from "@aws-sdk/client-s3";

// Ensure environment variables are present
const accountId = process.env.R2_ACCOUNT_ID;
const accessKeyId = process.env.R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
const bucketName = process.env.R2_BUCKET_NAME;

if (!accountId || !accessKeyId || !secretAccessKey || !bucketName) {
    console.warn("Cloudflare R2 environment variables are missing. File uploads will not work.");
}

// Configure the S3 client to communicate with Cloudflare R2
export const r2Client = new S3Client({
    region: "auto",
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: accessKeyId!,
        secretAccessKey: secretAccessKey!,
    },
});

export const R2_BUCKET_NAME = bucketName!;

// Utility function to generate public URL if the bucket is configured for public access
// Note: This requires a Custom Domain or Public Development URL to be set in Cloudflare dashboard
export function getPublicR2Url(objectKey: string) {
    const publicDomain = process.env.R2_PUBLIC_DOMAIN;
    if (!publicDomain) {
        // Fallback to S3 API endpoint style if no public domain is set (might be restricted)
        return `https://${accountId}.r2.cloudflarestorage.com/${bucketName}/${objectKey}`;
    }
    return `https://${publicDomain}/${objectKey}`;
}
