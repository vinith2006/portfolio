<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1rSExW8VthcpDiSjAGob61v6XTp-mqmy4

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Technical Details

### Stack

- Frontend: React 19 + TypeScript + Vite
- Backend: Express 4 (Node.js, ESM modules)
- Email Service: Nodemailer (Gmail transport)
- UI Icons: Lucide React

### Architecture

- `Vite` serves the SPA during development on port `3000`.
- Production build outputs static assets to `dist/`.
- `server.js` serves the `dist/` bundle and exposes `POST /api/send-email`.
- Non-API routes are handled by SPA fallback (`index.html`) to support client-side routing.

### Scripts

- `npm run dev` — starts Vite dev server.
- `npm run build` — runs Vite production build, then executes `copy-public.js` to copy `public/` assets into `dist/`.
- `npm run preview` — previews the Vite production bundle locally.
- `npm start` — starts the Express server (`server.js`) for production-like serving.

### Environment Variables

- `EMAIL_USER`: Gmail address used by Nodemailer sender/auth.
- `EMAIL_PASSWORD`: Gmail app password for SMTP authentication.
- `PORT`: Optional server port for Express (defaults to `3000`).

### Main App Composition

- The root app (`App.tsx`) renders: `Loader`, `CustomCursor`, `BackgroundEffects`, `Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Achievements`, `Experience`, and `Contact`.
