import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  // Reset scroll position when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Component]);

  return (
    <>
      <Navbar />
      <main className="page-content mt-0">
        <Component {...pageProps} />
      </main>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default MyApp;
