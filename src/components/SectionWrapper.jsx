// src/components/SectionWrapper.jsx
import { motion as Motion } from "framer-motion";

const SectionWrapper = ({ children, className = "" }) => {
  return (
    <Motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </Motion.section>
  );
}
export default SectionWrapper;