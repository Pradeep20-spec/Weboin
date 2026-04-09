# Weboin Technologies - Design Agency Homepage

A modern, responsive agency homepage built with Next.js and Tailwind CSS.

This project includes:
- A hero section with branded visual design
- A professional services section
- A portfolio section with expandable project list
- A contact section with client-side validation
- A dark visual theme and clean component-based architecture

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Features

- Responsive layout for mobile, tablet, and desktop
- Section-based component architecture
- Expandable portfolio grid with View All / Show Less behavior
- Optimized images with Next Image
- Clean, reusable functional components

## Project Structure

```text
design-agency/
	app/
		components/
			sections/
				ContactSection.tsx
				HeroSection.tsx
				PortfolioSection.tsx
				ServicesSection.tsx
		globals.css
		layout.tsx
		page.tsx
	public/
		newimage.png
		weboin-logo.png
		portfolio/
	next.config.ts
	package.json
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Image Notes

- Local assets are served from the public directory.
- Remote image loading is configured in next.config.ts.

