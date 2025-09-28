import { motion as Motion } from "framer-motion";

import { useNavigate } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <SectionWrapper className="bg-gradient-to-r from-pink-200 to-blue-200 dark:from-gray-900 dark:to-gray-800 px-8 py-16 flex h-auto">
      <Motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 animate-text">
            Crack IELTS with Confidence
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Join 5000+ students who achieved their dream band score with us.
        </p>

        <div className="flex gap-6">
          <button
            onClick={() => navigate("/courses")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:scale-[1.02] transition transform"
          >
            Get Started
          </button>

          <a href="/contact" className="px-6 py-3 border rounded-lg hover:shadow">
            Contact
          </a>
        </div>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        className="md:w-1/2 mt-10 md:mt-0"
      >
        <div className="rounded-lg overflow-hidden shadow-lg w-[300px]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5PVB02uUA0VIOWSwmAp2LMa-v3iOTfXDM4g&s"
            alt="Students studying"
            className="w-full h-auto"
          />
        </div>
      </Motion.div>
    </SectionWrapper>
  );
};

export default Hero;
