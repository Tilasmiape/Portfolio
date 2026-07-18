# Tilasmi Subedi — Personal Portfolio

A modern, responsive personal portfolio website built with Next.js App Router, TypeScript, and Tailwind CSS v4.

## Features

- **Modern Design:** Clean, professional aesthetics with a strong visual hierarchy.
- **Responsive:** Fully responsive across mobile, tablet, and desktop screens.
- **Animations:** Smooth scroll and subtle entrance animations powered by Framer Motion.
- **Customizable:** Centralized data file for easy updates to skills, experience, and projects.
- **SEO Optimized:** Built-in metadata and semantic HTML structure.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm (or yarn/pnpm)

### Installation

1. Navigate to the project directory:
   ```bash
   cd protfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

To update the portfolio with your latest information, simply edit the data in:
`src/data/portfolio.ts`

This file serves as the single source of truth for:
- Personal information & links
- Skills categories
- Work experience
- Projects
- Education history

## Deployment to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New** > **Project**.
3. Import your repository.
4. Leave the default build settings (`npm run build` and `npm run start`).
5. Click **Deploy**.

Vercel will automatically build and deploy your site, providing you with a live URL. Any future pushes to your main branch will automatically trigger a new deployment.