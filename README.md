# Arbitrage Research App

## Setup
- Frontend: React + Tailwind (Vite)
- Backend: Express + Prisma
- Database: Postgres (Supabase)
- Deployment: Vercel (frontend) + Render (backend)

## How to Run
1. Clone repo
2. Install frontend deps (`cd frontend && npm install`)
3. Install backend deps (`cd backend && npm install`)
4. Copy `.env.example` → `.env` in backend
5. Run `npx prisma migrate dev` to init DB
6. Start backend: `npm run dev`
7. Start frontend: `npm run dev`
