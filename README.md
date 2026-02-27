# 🛺 MaruwaGo — Tricycle Delivery Platform

A full-featured logistics web app for connecting Nigerian SMEs and individuals with Maruwa (tricycle) riders for delivery services. Built with **Next.js 14 App Router + TypeScript + Tailwind CSS**.

---

## 📄 Pages Overview (14 Total)

| Route | Page | Role |
|---|---|---|
| `/` | Landing / Marketing Page | Public |
| `/login` | Login Page | Public |
| `/register` | Register with role selector (Business or Rider) | Public |
| `/dashboard/business` | Business Owner Dashboard | Business |
| `/dashboard/rider` | Rider Dashboard (job feed, toggle online) | Rider |
| `/book` | Book a Delivery (3-step wizard) | Business |
| `/track/[id]` | Live Tracking Page with map simulation | Business/Rider |
| `/history` | Delivery History with filters | Business |
| `/profile` | Profile & Settings (tabs) | Business/Rider |
| `/admin` | Admin Dashboard — platform overview | Admin |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# 1. Navigate to the project folder
cd maruwago

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

---

## 🏗️ Project Structure

```
maruwago/
├── src/
│   └── app/
│       ├── page.tsx               # Landing page
│       ├── layout.tsx             # Root layout
│       ├── globals.css            # Global styles + fonts
│       ├── login/page.tsx         # Login
│       ├── register/page.tsx      # Register (role selector)
│       ├── dashboard/
│       │   ├── business/page.tsx  # Business dashboard
│       │   └── rider/page.tsx     # Rider dashboard
│       ├── book/page.tsx          # Book delivery wizard
│       ├── track/[id]/page.tsx    # Live tracking
│       ├── history/page.tsx       # Delivery history
│       ├── profile/page.tsx       # Profile & settings
│       └── admin/page.tsx         # Admin panel
├── tailwind.config.ts
├── next.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🎨 Design System

**Color Palette:**
- Orange Primary: `#F97316`
- Dark Orange: `#FF4500`
- Charcoal BG: `#1C1C1E`
- Smoke Card: `#2A2A2E`
- Gold Accent: `#F59E0B`

**Fonts:**
- Display: `Bebas Neue` (headings, numbers)
- Body: `DM Sans` (text, labels)

---

## 🔌 Integration Checklist (Next Steps)

- [ ] **Authentication** — NextAuth.js or Supabase Auth with role-based access
- [ ] **Database** — Supabase / PostgreSQL for users, deliveries, riders
- [ ] **Maps** — Google Maps API or Mapbox for live tracking
- [ ] **Payments** — Paystack or Flutterwave integration
- [ ] **Push Notifications** — Firebase Cloud Messaging
- [ ] **Real-Time** — WebSockets (Socket.io) or Supabase Realtime for live tracking
- [ ] **SMS** — Africa's Talking or Termii for Nigerian SMS
- [ ] **Email** — Resend or Nodemailer for transactional emails

---

## 📱 User Flows

### Business Owner
1. Register → choose "Business" role
2. Lands on Business Dashboard
3. Click "Book Delivery" → 3-step wizard (addresses → package details → confirm)
4. Track live via `/track/[id]`
5. View history + analytics in History page

### Maruwa Rider
1. Register → choose "Rider" role
2. Admin verifies profile (within 24h)
3. Toggle "Online" in Rider Dashboard
4. Accept jobs from the nearby jobs feed
5. Navigate to pickup → deliver → earn

### Admin
1. Login as admin role
2. Monitor platform in real-time
3. Approve/reject rider applications
4. Handle disputes, payouts, reports

---

Made with ❤️ for Nigerian businesses and riders.
