# Galactic Living Deployment

## Environment

Copy `.env.example` to `.env.local` and fill:

- `MONGODB_URI`
- `JWT_SECRET`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD_HASH`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`

Create an admin password hash:

```bash
node -e "require('bcryptjs').hash('your-password', 10).then(console.log)"
```

## Local

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy

Frontend and API routes are Vercel-ready. Add the environment variables in Vercel project settings.

MongoDB Atlas is recommended. Cloudinary stores uploaded gallery and property images; save returned secure URLs into the `GalleryItem` and `Property` documents.

For a split backend deployment on Render/Railway, move the route logic from `app/api/*` into an Express service and keep the same Mongoose models.
