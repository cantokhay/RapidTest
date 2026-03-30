# FutbolTakip - Brand Guidelines & UI Prompt

## 🎨 Visual Identity

**Brand Personality**: Modern, sporty, data-driven, accessible
**Color Palette**:
- Primary: #00b894 (Vibrant Green - futbol sahası)
- Secondary: #0984e3 (Dynamic Blue - gökyüzü)
- Accent: #fdcb6e (Golden Yellow - zafer)
- Dark: #2d3436 (Charcoal)
- Light: #dfe6e9 (Soft Gray)
- Background: #ffffff (Clean White)
- Surface: #f8f9fa (Light Surface)

**Typography**:
- Headings: Inter Bold, 24-32px
- Body: Inter Regular, 14-16px
- Data/Numbers: Inter Medium, 16-18px
- Small text: Inter Regular, 12px

## 🏗️ Component Rules

**Cards**:
- Border-radius: 12px
- Shadow: 0 2px 8px rgba(0,0,0,0.08)
- Padding: 16-24px
- Hover: scale(1.02) + shadow lift

**Grid Layout**:
- Desktop: 4 columns, 24px gap
- Tablet: 3 columns, 20px gap
- Mobile: 2 columns, 16px gap

**Spacing System**: 4px base (4, 8, 12, 16, 24, 32, 48, 64)

**Buttons**:
- Primary: bg-primary, white text, 40px height
- Border-radius: 8px
- Hover: darken 10%

**Team Logos**:
- Size: 80x80px on cards
- Background: white circle
- Shadow on hover

**Data Tables**:
- Zebra striping: alternate row bg #f8f9fa
- Header: bold, bg #e9ecef
- Borders: 1px solid #dee2e6

## 📱 Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640-1024px
- Desktop: > 1024px

## ♿ Accessibility
- Color contrast ratio: minimum 4.5:1
- Focus states: 2px solid primary
- Alt text for all logos
- ARIA labels for interactive elements

---

## 🤖 AI Coding Tool Prompt
```
Build "FutbolTakip" - a Turkish Super League team roster viewer using React.

BRAND IDENTITY:
- Colors: primary #00b894 (green), secondary #0984e3 (blue), accent #fdcb6e (yellow), dark #2d3436
- Typography: Inter font family throughout
- Cards: 12px border-radius, subtle shadows (0 2px 8px rgba(0,0,0,0.08))
- Spacing: 4px system (use multiples of 4)

UI STRUCTURE:
1. Dashboard: Grid of 18-20 team logo cards (4 cols desktop, 3 tablet, 2 mobile, 24px gap)
   - Each card: 80x80px logo centered, team name below, white bg, hover scale(1.02)
   
2. Player Modal/Sidebar: Opens on team click
   - Header: Team name + logo, close button
   - Table: columns (Name, Position, #, Age, Country)
   - Zebra striping, responsive scroll

3. Top bar: "FutbolTakip" logo/title left, API counter right (e.g. "47/50 istekleri kaldı")

API INTEGRATION:
- RapidAPI footapi7 (key: 56eeaae0a2msh1f5a78362b65e64p1c49efjsn933601bf2799)
- Endpoints: Süper Lig teams list → `/api/team/{id}/players` for roster
- LocalStorage cache: save all responses, check cache before API call
- Track request count in localStorage

TECHNICAL:
- React hooks (useState, useEffect)
- Tailwind CSS for styling
- Fetch API for HTTP
- Error states: show user-friendly messages
- Loading states: skeleton loaders matching card layout

DESIGN FEEL: Clean, modern football dashboard - think ESPN meets minimalist SaaS. White space, clear hierarchy, data-first, mobile-optimized.
```

---

## 🎯 Quick Reference for Designers

**DO**:
✅ Use green (#00b894) for primary actions and highlights
✅ Keep white space generous (minimum 16px between sections)
✅ Make logos prominent and clickable
✅ Show data in clean tables with good contrast
✅ Use loading states (skeleton screens)

**DON'T**:
❌ Overcrowd the interface
❌ Use more than 3 colors per screen
❌ Make text smaller than 12px
❌ Hide important data in dropdowns
❌ Forget mobile users (50%+ traffic)

---

## 📐 Layout Measurements

**Dashboard Grid Card**:
- Width: calc((100% - 72px) / 4) on desktop
- Height: auto (maintain aspect ratio)
- Logo container: 80x80px
- Team name: 14px, centered, 8px margin-top

**Player Table**:
- Min-width: 600px (horizontal scroll on mobile)
- Row height: 48px
- Header height: 56px
- Column widths: Name 40%, Position 15%, Number 10%, Age 10%, Country 25%

**Modal/Sidebar**:
- Desktop: 600px width, slide from right
- Mobile: full-screen overlay
- Header: 64px height, sticky
- Close button: 32x32px, top-right 16px padding