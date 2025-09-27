initial={{ scale: 0 }}
whileInView={{ scale: 1 }}
transition={{ duration: 0.8, type: "spring", stiffness: 100 }}

# 🌟 ExcelIELTS: AI-Powered IELTS Preparation Platform Homepage

This project is the foundational landing page for a fictional AI-powered IELTS preparation institute, built as an assignment for the Full Stack Development internship at BabyCode.

The design adheres to a **modern, professional dark aesthetic** and is fully **responsive** across all screen sizes.

## 🚀 Key Technologies

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS (v4.x recommended)
- **Icons:** Lucide React (for scalable vector icons)

## ✨ Features Implemented

The homepage includes all required sections, focusing heavily on design and UI/UX quality:

1.  **Fixed Navbar:** Fully responsive with desktop navigation, centered CTA buttons, and a mobile hamburger menu that features a smooth slide-in effect and scroll-lock functionality. Active link tracking is implemented via an `Intersection Observer` (or scroll listener).
2.  **Hero Section:** Prominent headline, CTA buttons, and an illustrative image with floating statistics.
3.  **Feature Cards:** Three-to-four feature cards using a dark aesthetic, enhanced with a subtle **lift and glow hover effect**.
4.  **Student Testimonials:** A dynamic **CSS Marquee/Ticker Tape** displaying multiple student reviews in two continuous, counter-scrolling rows, which pauses automatically on hover.
5.  **Dark Theme:** Utilizes a custom radial gradient background for a deep, violet-tinged abyss effect.
6.  **Custom Font:** Integrates the professional, modern **Geist** font globally via Tailwind CSS configuration.

---

## 🛠️ Project Setup

Follow these steps to get the project running on your local machine.

### Prerequisites

You need **Node.js** (v18+) and **npm** or **Yarn** installed.

### Installation

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/Shreyash-patil/excelielts.git
    cd excelielts
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the Development Server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

The application should now be available at `http://localhost:5173` (or the port specified in your terminal).

---

## 🎨 Design Choices & Approach

### 1. Color Palette

- **Primary:** Deep Black / Very Dark Gray (`bg-black` with gradient overlay)
- **Accent:** Violet / Indigo (`#A000FD` and variations)
- **Text:** White and Gray Tints (high contrast for readability)

The deep violet radial gradient background provides a premium, high-tech feel, setting it apart from standard white-background education websites.

### 2. Responsiveness (Mobile-First)

The layout uses a **mobile-first** approach:

- **Navbar:** Links collapse into a smooth, full-height vertical menu (`h-screen`) on mobile screens.
- **Marquee:** Testimonial cards are adjusted to be near full-width on mobile (`w-[calc(100vw-4rem)]`) to ensure readability while maintaining the scroll effect.
- **Hero/Features:** Columns are stacked vertically below the `md` breakpoint for optimal viewing.

### 3. Code Clarity

Components (`Navbar`, `Hero`, `FeatureCard`, `Testimonials`) are separated into distinct files, and Tailwind CSS is utilized heavily for component-level styling, ensuring modular, clean, and easily maintainable code.
