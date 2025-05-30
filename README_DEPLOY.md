# Deploying envy-music-app to Vercel

## 1. Push to GitHub
1. Create a new GitHub repository (e.g. `envy-music-app`).
2. In your project folder, run:
   ```pwsh
   git init
   git remote add origin https://github.com/YOUR_USERNAME/envy-music-app.git
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git push -u origin main
   ```

## 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **New Project** and import your `envy-music-app` repo.
3. Set the following environment variables in the Vercel dashboard (from your `.env.example`):
   - `DATABASE_URL`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (set to your Vercel domain)
   - `STRIPE_SECRET_KEY`
   - `STRIPE_PUBLIC_KEY`
4. Click **Deploy**.

## 3. Database
- If you want to use a cloud Postgres (recommended for production), use [Neon](https://neon.tech), [Supabase](https://supabase.com), or [Railway](https://railway.app) and update your `DATABASE_URL` accordingly.
- For local development, make sure your Postgres server is running and the database exists.

## 4. Local Development
```pwsh
npm install
npm run dev
```

---

**If you have any issues, check the Vercel build logs or ask for help!**
