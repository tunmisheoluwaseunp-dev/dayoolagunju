# Activate your portfolio studio

The public portfolio works without Supabase. Its original images are bundled in public/__l5e/assets-v1, so they no longer depend on Lovable hosting.

## 1. Create Supabase
Create a project at https://supabase.com/dashboard. Copy its Project URL and publishable key. Never use a service-role/secret key in a VITE_ variable.

## 2. Create the database and image bucket
Open SQL Editor and run supabase/migrations/001_portfolio.sql once. This enables row-level security: visitors can only read the published document; only explicitly approved admin users can read drafts, save, publish or upload images. Uploaded images are public; do not upload confidential files.

## 3. Create your admin
In Authentication > Users, choose Add user > Create new user. Set your email and a strong password and confirm the email. Copy the new user's UUID. Then run:

    insert into public.portfolio_admins(user_id) values ('YOUR-AUTH-USER-UUID');

Do not add a public sign-up screen. Disable new-user signups in Supabase Auth settings if this project is only for your portfolio. Reset passwords through Supabase's user management if necessary.

## 4. Connect Vercel
In your Vercel project > Settings > Environment Variables, add VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY from .env.example for Production (and Preview if wanted). Redeploy after adding them. Do not paste database passwords or secret keys into code.

Keep the framework detected by Vercel; build command is pnpm build. This project includes pnpm-lock.yaml; use pnpm rather than the older bun lockfile. Add pnpm@11.25.0 as packageManager if your environment needs an explicit selection.

For local development, copy .env.example to .env.local, fill the values and run pnpm install, then pnpm dev. Use Node 22 or newer.

## 5. Manage the site
Visit /admin and sign in. The first visit loads your existing portfolio. Edit Profile, Projects, Services, Testimonials or Certificates. Image uploads accept JPG, PNG, WebP and AVIF up to 10 MB.

Save draft stores work privately. Publish changes writes the public document and draft together. Project visibility controls whether a project appears on the portfolio. Removing a project changes the draft until you publish. Empty certificate and testimonial sections are hidden. Public content is refreshed on navigation and after a short cache window (up to 30 seconds for an already open page).

Only one editor should edit at a time: saving replaces the content document. Keep a copy of content before large changes. Superseded images remain in Storage so older published pages retain working links; remove unused objects manually in Supabase when appropriate.

## Validation and remaining activation
The included tests cover content validation, published/draft selection and routes. Database policies must also be verified against your live Supabase project: signed-out requests must not read draft or write; an ordinary signed-in user must not write; an approved admin must be able to save, publish and upload.

## Local validation note
The generic production build, TypeScript checks and browser workflows were checked locally. A separate Vercel preset build compiled client and server successfully but its final dependency-tracing step hit a Windows sandbox EPERM while reading a parent directory. The final Vercel packaging/deployment must be verified on Vercel. No live deployment or live Supabase permission test has been performed.
