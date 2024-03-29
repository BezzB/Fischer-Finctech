import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      
      <Navbar />
      <Component {...pageProps} />
      <ToastContainer />
      <Footer />
    </>
  );
}

export default MyApp;
