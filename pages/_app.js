import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import dynamic from 'next/dynamic';
import Script from 'next/script';

// Dynamic imports for better performance
const DynamicToastContainer = dynamic(() => import('react-toastify').then(mod => mod.ToastContainer), {
  ssr: false
});

function MyApp({ Component, pageProps }) {
  // Reset scroll position when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Prevent periodic polling of the /clients/ path via direct JS
    if (typeof window !== 'undefined') {
      const originalFetch = window.fetch;
      window.fetch = function(url, options) {
        if (typeof url === 'string' && (
           url === '/clients/' || 
           url.startsWith('/clients/') || 
           url.includes('/clients/')
        )) {
          console.log('Intercepted fetch request to', url);
          return Promise.resolve(new Response(JSON.stringify({ status: 'ok' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          }));
        }
        return originalFetch.apply(this, arguments);
      };
    }
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
      <Script src="/client-fallback.js" strategy="afterInteractive" />
    </>
  );
}

export default MyApp;
