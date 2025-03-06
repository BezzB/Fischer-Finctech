# Fischer Telesec - Telecommunications & IT Solutions

A modern, responsive website for Fischer Telesec, a telecommunications and IT solutions provider serving businesses across East Africa. Built with Next.js and Tailwind CSS, this website showcases the company's services, portfolio, and expertise in the telecommunications industry.

![Fischer Telesec](public/assets/logo.png)

## 🚀 Features

- **Modern UI/UX Design**: Clean, professional interface with smooth animations and transitions
- **Responsive Layout**: Optimized for all devices from mobile to desktop
- **Service Showcase**: Detailed presentation of telecommunications and IT services
- **Portfolio Section**: Showcase of completed projects and case studies
- **Client Testimonials**: Feedback from satisfied clients
- **Team Profiles**: Information about key team members
- **Contact Forms**: Interactive forms for inquiries and quote requests
- **Interactive Elements**: Animations, hover effects, and micro-interactions for enhanced user experience

## 🛠️ Technologies Used

- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation Library**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Form Handling**: [EmailJS](https://www.emailjs.com/)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/)
- **Carousel**: [React Slick](https://react-slick.neostack.com/)

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

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Fischer-Finctech.git
   cd Fischer-Finctech
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with your environment variables:
   ```
   # Example environment variables
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔧 Project Structure

```
Fischer-Finctech/
├── components/         # React components
├── pages/              # Next.js pages
├── public/             # Static assets
│   └── assets/         # Images and other media
├── styles/             # CSS styles
├── tailwind.config.js  # Tailwind CSS configuration
└── next.config.js      # Next.js configuration
```

## 🎨 Design System

The project uses a custom design system with:

- **Color Palette**: Primary, secondary, and accent colors with various shades
- **Typography**: Custom font settings for headings and body text
- **Components**: Reusable UI components like buttons, cards, and sections
- **Animations**: Consistent animation patterns for enhanced user experience

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (< 640px)
- Tablets (641px - 1023px)
- Desktops (> 1024px)

## 🚀 Deployment

The site can be deployed to various platforms:

- **Render** (current deployment):
  ```bash
  # The site is configured for static deployment on Render
  npm run build
  # This creates a static export in the 'out' directory
  # Render is configured to serve from this directory
  ```

- **Vercel** (recommended for Next.js projects):
  ```bash
  npm run build
  # Deploy using Vercel CLI or GitHub integration
  ```

- **Traditional Hosting**:
  ```bash
  npm run build
  npm run start
  ```

## 🔄 Continuous Integration

The project includes GitHub Actions workflows for:
- Linting and testing
- Automated deployments

## 📄 License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

## 👥 Contributors

- Your Development Team

---

© 2024 Fischer Telesec. All Rights Reserved.
