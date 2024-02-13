import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
      <div className="mb-4 lg:mb-0 lg:mr-8">
        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
        <ul className="list-none p-0">
          <li>Email: info@fischertelesec.co.ke </li>
          <li>Mobile: +254724-612-514</li>
          <li>Address: Zayed Plaza, New Mombasa- Malindi Road, Mombasa.</li>
        </ul>
      </div>
      <div className="mb-4 lg:mb-0 lg:mr-8">
  <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
  <ul className="list-none p-0">
    <li><Link href="/aboutus">About Us</Link></li>
    <li><Link href="/services">Services</Link></li>
    <li><Link href="/contact">Contact</Link></li>
    <li><Link href="/privacy">Privacy Policy</Link></li>
  </ul>
</div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
        <div className="flex items-center gap-4">
          <a href="#" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
