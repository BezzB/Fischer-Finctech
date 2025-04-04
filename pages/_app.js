import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import dynamic from 'next/dynamic';

// Dynamic imports for better performance
const DynamicToastContainer = dynamic(() => import('react-toastify').then(mod => mod.ToastContainer), {
  ssr: false
});

function MyApp({ Component, pageProps }) {
  // Reset scroll position when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Component]);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Navbar />
      <main className="page-content mt-0">
        <Component {...pageProps} />
      </main>
      <DynamicToastContainer />
      <Footer />
    </>
  );
}

export default MyApp;
