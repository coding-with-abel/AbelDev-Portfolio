# AbelDev Portfolio

A modern portfolio website showcasing my work as a full-stack developer.

**Live:** [abeldev-portfolio.vercel.app](https://abeldev-portfolio.vercel.app)

---

## 🛠 Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS, Framer Motion, Vite
- **Backend:** Node.js, Express, Nodemailer
- **Deployment:** Vercel

---

## 🚀 Getting Started

### Install & Setup

```bash
git clone https://github.com/coding-with-abel/abeldev-portfolio.git
cd abeldev-portfolio
npm install
```

### Environment Variables

Create `.env.local`:
```
GMAIL_USER=your-email@gmail.com
GMAIL_PASSWORD=your-gmail-app-password
```

[Get Gmail App Password](https://myaccount.google.com/apppasswords)

### Run Locally

**Terminal 1:**
```bash
npm run dev
```

**Terminal 2:**
```bash
npm run dev:api
```

Visit `http://localhost:5173`

---

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables (`GMAIL_USER`, `GMAIL_PASSWORD`)
5. Deploy

---

## 📁 Project Structure

```
src/components/ → Hero, Projects, Skills, Contact, etc.
api/contact.js → Email serverless function
public/images/ → Project screenshots
```

---

## 👤 Author

**Abel Olanrewaju** — [GitHub](https://github.com/coding-with-abel)