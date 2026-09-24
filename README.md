# CareerAI — Your Next Step

**Challenge 10: Helping Young People Prepare for Employment**
Team 3 — Itu, Fusi, Boitshoko & Busi

CareerAI is a phone-friendly AI Career and Interview Assistant built for first-time
job seekers in Hammanskraal. It brings career exploration, CV support, interview
practice and verified job listings into one simple, trusted place — instead of
scattering across Facebook, WhatsApp and random websites.

## The Problem

Young job seekers with little or no experience struggle to find and understand
entry-level opportunities because verified information is scattered and difficult
to trust — leaving them confused, wasting their data, and draining their confidence.

## Who It's For

**Thando**, 21, from Hammanskraal. Finished matric last year. No work experience,
no CV, struggles with interviews. Only has a phone, no laptop. Doesn't know which
jobs are real or fake. Wants simple guidance, practice, and a way to find trusted
jobs near him.

## Research Behind It

We surveyed 6 young people and found:

| Finding | Result |
|---|---|
| Unemployed | 66.7% |
| Search for jobs on phone only | 66.7% |
| Use Indeed / PNet | 83.3% |
| Average confidence (out of 5) | 2.7 |
| Gap in Excel skills | 50% |

Their biggest struggles: finding reliable opportunities, choosing a career,
building a CV, and preparing for interviews.

## Features

- **Overview** — dashboard with quick access to every feature and a live progress tracker
- **My Career Path** — select your skills and get matched to realistic entry-level roles, plus the next skill to learn
- **CV Builder** — five simple questions turn real, informal experience (spaza shop work, volunteering, school activities) into professional CV bullet points
- **AI Interview Practice** — pick a common interview question, type an answer, and get instant feedback based on the STAR method (Situation, Task, Action, Result), plus a confidence meter
- **Explore Opportunities** — verified job listings, with a toggle between **Near Me** (local, verified entry-level jobs) and **Worldwide** (trusted external sources: Arbeitnow, LinkedIn Jobs, Indeed)

## Tech

Single self-contained `index.html` — plain HTML, CSS and JavaScript, no build step,
no external dependencies, no backend. The CV Builder and Interview Practice
feedback use lightweight, rule-based logic (keyword matching) so the demo works
reliably offline and with zero setup — in line with our "low-data mode" design
principle for users with limited mobile data.

## Run Locally

Just open `index.html` in any browser. No install, no server required.

## Deploy to Vercel

**Option A — Vercel dashboard (easiest, no CLI needed)**
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **Add New → Project**.
3. Choose **Deploy without Git** (or drag-and-drop) and upload this folder
   (or the unzipped contents of `careerai-website.zip`).
4. Vercel will detect `index.html` automatically as a static site — click **Deploy**.

**Option B — Vercel CLI**
```bash
npm install -g vercel
cd careerai-website
vercel
```
Follow the prompts (accept the defaults — it's a static site, no build command needed).

**Option C — GitHub + Vercel**
1. Push this folder to a new GitHub repository.
2. In Vercel, click **Add New → Project → Import Git Repository** and select the repo.
3. Deploy with default settings.

## Project Structure

```
careerai-website/
├── index.html   # the full app (structure, styles and logic)
└── README.md    # this file
```

## Team

Itu, Fusi, Boitshoko, Busi — Design Thinking Programme, Team 3.
