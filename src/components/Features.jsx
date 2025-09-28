import { FaMicrophone, FaFileAlt, FaRobot, FaClock } from "react-icons/fa";
import { motion as Motion } from "framer-motion";

const features = [
  { title: "Speaking Practice", desc: "Live practice with expert trainers.", icon: FaMicrophone },
  { title: "Mock Tests", desc: "Real exam-like practice with feedback.", icon: FaFileAlt },
  { title: "AI Band Score", desc: "Instant feedback powered by AI.", icon: FaRobot },
  { title: "Flexible Timing", desc: "Morning and evening batches available.", icon: FaClock },
];

const Features = () => {
  return (
    <section className="px-8 py-16 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
        Why Choose Us?
      </h2>
      <div className="grid md:grid-cols-4 gap-6">
        {features.map((f, idx) => {
          const Icon = f.icon;
          return (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="p-6 border rounded-lg shadow-lg bg-gradient-to-br from-pink-100 to-blue-100 dark:from-gray-800 dark:to-gray-700
                         transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            >
              <div className="text-blue-600 dark:text-teal-400 text-4xl mb-4">
                <Icon />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
            </Motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
