# Fischer Telesec - Telecommunications & IT Solutions

A modern, responsive website for Fischer Telesec, a leading telecommunications and IT solutions provider serving businesses across East Africa. Built with Next.js and Tailwind CSS, this website showcases the company's comprehensive services, extensive portfolio, and deep expertise in the telecommunications industry.

![Fischer Telesec](public/assets/logo.png)

## 🚀 Features

### Core Features
- **Modern UI/UX Design**: Clean, professional interface with smooth animations and transitions
- **Responsive Layout**: Fully optimized for all devices (mobile, tablet, desktop)
- **Service Showcase**: Detailed presentation of telecommunications and IT services
- **Portfolio Section**: Comprehensive showcase of completed projects and case studies
- **Client Testimonials**: Authentic feedback from satisfied clients
- **Team Profiles**: Detailed information about key team members and expertise
- **Contact Forms**: Interactive forms for inquiries and quote requests
- **Interactive Elements**: Engaging animations, hover effects, and micro-interactions

### Technical Features
- **SEO Optimization**: Built-in SEO best practices
- **Fast Loading**: Optimized performance and load times
- **Email Integration**: Automated email notifications using EmailJS
- **Form Validation**: Comprehensive client-side form validation
- **Toast Notifications**: User-friendly notification system
- **Carousel**: Smooth image sliders for portfolio and testimonials

## 🛠️ Technologies Used

### Core Technologies
- **Frontend Framework**: [Next.js](https://nextjs.org/) v14.1.0
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/) v3.1.4
- **React**: v18.2.0

### UI/UX Libraries
- **Animation**: [Framer Motion](https://www.framer.com/motion/) v12.4.10
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) v4.4.0
- **Carousel**: [React Slick](https://react-slick.neostack.com/) v0.30.1

### Form & Notification
- **Form Handling**: [@emailjs/browser](https://www.emailjs.com/) v4.1.0
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/) v10.0.4
- **Email Service**: Multiple options including SendGrid, Nodemailer

## 📋 Pages

- **Home**: Landing page with hero section, services overview, and company highlights
- **About Us**: Company history, mission, vision, and team information
- **Services**: Detailed information about telecommunications and IT services
- **Portfolio**: Showcase of completed projects and case studies
- **Clients**: Client testimonials and success stories
- **Partners**: Information about technology partners and collaborations
- **Contact**: Contact information and inquiry form
- **Get a Quote**: Service selection and quote request form
- **Privacy Policy**: Company privacy policy and data handling information

## 🔧 Project Structure

```
Fischer-Finctech/
├── components/         # React components
│   ├── AboutUs.jsx     # About page component
│   ├── Button.jsx     # Reusable button component
│   ├── Contact.js     # Contact form component
│   ├── Hero.jsx       # Hero section component
│   └── ...            # Other components
├── pages/             # Next.js pages
│   ├── _app.js        # App wrapper
│   ├── _document.js   # Custom document
│   ├── api/           # API routes
│   └── ...            # Page components
├── public/            # Static assets
│   └── assets/        # Images and media
├── styles/            # CSS styles
├── tailwind.config.js # Tailwind configuration
└── next.config.js     # Next.js configuration
```

## 🎨 Design System

The project implements a custom design system featuring:

- **Color Palette**: Primary, secondary, and accent colors with various shades
- **Typography**: Custom font settings for headings and body text
- **Components**: Reusable UI components like buttons, cards, and sections
- **Animations**: Consistent animation patterns for enhanced user experience

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/Fischer-Finctech.git
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Create a `.env.local` file with necessary environment variables:
```env
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_USER_ID=your_user_id
```

4. Run the development server:
```bash
yarn dev
# or
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Deployment

This project is configured for deployment on various platforms:

1. Build the project:
```bash
yarn build
# or
npm run build
```

2. Start the production server:
```bash
yarn start
# or
npm start
```

## 👥 Contributors

- Fischer Telesec Development Team

## 📄 License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

---

© 2024 Fischer Telesec. All Rights Reserved.
