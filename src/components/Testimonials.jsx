import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';// Correct import
import "swiper/css";
import "swiper/css/pagination";

import { motion as Motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Aman",
    text: "Scored Band 8 — trainers were amazing!",
    img: "https://i.pravatar.cc/100?img=12",
    rating: 5,
  },
  {
    name: "Sanya",
    text: "Mock tests boosted my confidence a lot.",
    img: "https://i.pravatar.cc/100?img=5",
    rating: 5,
  },
  {
    name: "Rahul",
    text: "AI feedback helped me focus on weak areas.",
    img: "https://i.pravatar.cc/100?img=32",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="px-6 py-16 bg-gradient-to-r from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          What Our Students Say
        </h2>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}>
            {reviews.map((r, i) => (
              <SwiperSlide key={i}>
                <div className="p-6 bg-white dark:bg-gray-700 shadow rounded-lg min-h-[200px] flex flex-col">
                  <div className="flex items-center gap-4">
                    <img
                      src={r.img}
                      alt={`${r.name} pic`}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                        {r.name}
                      </h4>
                      <div className="flex items-center text-yellow-400">
                        {Array.from({ length: r.rating }).map((_, idx) => (
                          <FaStar size={14} key={idx} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-200 italic flex-grow">
                    “{r.text}”
                  </p>
                  <div className="text-right text-sm text-gray-500 dark:text-gray-300 mt-4">
                    Verified student
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
