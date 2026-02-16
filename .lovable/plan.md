

# Student Dashboard UI — Implementation Plan

## Overview
A single-page, mobile-first student portal dashboard matching the uploaded screenshot. Dark theme with purple accents, built with React + TypeScript and **CSS Modules** for all styling (replacing the existing Tailwind setup).

---

## Components to Build

### A) Global Styles (`src/styles/global.module.css`)
- CSS variables for colors (dark bg, purple gradients, muted text, etc.)
- Global resets via `:global(:root)` and `:global(body)`
- System font stack, no external fonts

### B) HeaderCard
- Purple gradient card with large rounded bottom corners
- Orange circular avatar, greeting ("Hi, Onukwili"), student ID
- Three-dot menu icon (inline SVG)
- Faculty & Department info lines
- Pill/chip row: "300 Level", "REGULAR", "Session: 2025/2026", "Semester: first"

### C) WalletCard
- Dark purple/indigo gradient card
- "Wallet Balance" label on left, "NGN 0.00" pill on right

### D) QuickAccess
- Section title "Quick Access"
- 3 dark tiles in a row: SUG Election, Check Result, Register Courses
- Each with a small purple inline SVG icon + label

### E) CourseCarousel
- "Course Offered" title + refresh icon button (with animation on click)
- Purple gradient course card showing course name & code
- "View Details" pill button
- Dot indicators (6 dots, active one filled purple)
- Left/right navigation via buttons; keyboard arrow support

### F) BottomNav
- Fixed bottom bar, 5 items: Dashboard, Fees, SGS, Result, Course
- Active tab highlighted in purple; inactive in grey
- All icons as inline SVGs

### G) Icons (`icons.tsx`)
- All icon components as inline SVGs (menu dots, refresh, nav icons, quick access icons)

### H) Data & Types (`data.ts`)
- TypeScript types: `User`, `QuickAccessItem`, `Course`, `BottomNavItem`
- Hardcoded mock data matching the screenshot

---

## Interactions
- **Bottom nav**: stateful active tab switching
- **Course carousel**: prev/next with dot indicators, keyboard arrow support
- **Refresh button**: console.log + subtle rotation animation

## Responsive Behavior
- **Mobile** (<768px): full-width with 16px padding
- **Tablet** (≥768px): centered, max-width 720px
- **Desktop** (≥1024px): centered, max-width 900px
- Bottom nav pinned at all sizes

## Setup Changes
- Remove Tailwind CSS and related config
- Remove all existing `index.css` Tailwind directives
- Use CSS Modules exclusively
- Keep existing Vite + React + TypeScript foundation

