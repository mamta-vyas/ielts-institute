# EduConnect IELTS Institute - Home Page

A modern, responsive ReactJS homepage for a fictional IELTS coaching institute. Built with **React**, **TailwindCSS**, **Framer Motion**, and **SwiperJS** for animations and testimonials.

## Live Demo

> https://endearing-kitsune-dad83b.netlify.app/

## Features

- **Responsive Design:** Works seamlessly on desktop, tablet, and mobile.  
- **Hero Section:** Eye-catching headline, call-to-action buttons, and banner image.  
- **Feature Cards:** Highlights key offerings (Speaking Practice, Mock Tests, AI Band Score).  
- **Student Testimonials:** Interactive Swiper slider with autoplay and pagination.  
- **Contact Form:** Fully functional with EmailJS integration or localStorage fallback.  
- **Dark Mode Ready:** Supports light and dark themes.  
- **Animations:** Smooth fade-in and motion effects using Framer Motion.  
- **SEO Optimized:** Meta tags, alt attributes, and semantic HTML.

## Tech Stack

- ReactJS  
- TailwindCSS  
- Framer Motion  
- SwiperJS  
- React Hook Form  
- EmailJS  

## Folder Structure

src/
├── assets/ # Images, icons
├── components/ # Navbar, Hero, Features, Testimonials, Contact, SectionWrapper
├── pages/ # Home (main page)
├── App.jsx
└── main.jsx

bash
Copy code

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/educonnect-ielts.git
cd educonnect-ielts
Install dependencies:


npm install
Create a .env file for EmailJS (optional):

ini
Copy code
VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key
Start the development server:

npm run dev
Deployment
You can deploy on Netlify, Vercel, or any static hosting:

npm run build
Upload the dist folder to your hosting platform.

Design Choices
Used TailwindCSS for a modern, utility-first responsive design.

Framer Motion animations make sections appear smoothly while scrolling.

SwiperJS carousel provides an interactive testimonials slider.

Focused on clean UI, easy navigation, and accessibility.

SEO optimized with meta tags, alt attributes, and semantic HTML.

License

This project is for educational/demo purposes only.