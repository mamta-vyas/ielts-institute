import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion as Motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="px-8 py-8 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left */}
        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm"
        >
          &copy; {new Date().getFullYear()} IELTS Connect. All rights reserved.
        </Motion.p>

        {/* Middle: Links */}
        <Motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex gap-6 text-sm"
        >
          <li>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </li>
        </Motion.ul>

        {/* Right: Social Icons */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex gap-4 text-gray-400"
        >
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="p-2 rounded-full hover:bg-blue-600 hover:text-white transition transform hover:scale-110"
            >
              <Icon />
            </a>
          ))}
        </Motion.div>
      </div>
    </footer>
  );
};

export default Footer;
