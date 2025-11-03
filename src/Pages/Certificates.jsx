// src/Pages/Certificates.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { certificates } from "../data/certificates";
import { X } from "lucide-react";
import useWindowSize from "../hooks/useWindowSize";

export default function Certificates() {
  const [width] = useWindowSize();
  const carouselRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);

  // Responsive radius and card size
  const radius = width < 640 ? 180 : width < 1024 ? 300 : 360;
  const cardWidth =
    width < 640
      ? "w-48 h-32"
      : width < 1024
      ? "w-56 h-36"
      : "w-60 h-40";

  useEffect(() => {
    const carousel = carouselRef.current;
    const total = certificates.length;
    const step = 360 / total;
    let angle = 0;

    const animate = () => {
      angle = (angle - 0.25) % 360; // steady anti-clockwise

      // Slight vertical lift for visual balance
      const yOffset = -radius * 0.1;
      carousel.style.transform = `translateY(${yOffset}px) translateZ(-300px) rotateY(${angle}deg)`;

      // Maintain perfect circular path + scale front card
      const cards = carousel.children;
      for (let i = 0; i < total; i++) {
        const cardAngle = (step * i + angle) % 360;
        const diff = ((cardAngle + 180) % 360) - 180;
        const scale = 1 + (1 - Math.abs(diff) / 180) * 0.2; // max scale 1.2

        cards[i].style.transform = `rotateY(${step * i}deg) translateZ(${radius}px) scale(${scale})`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [radius]);

  return (
    <section
      id="certificates"
      className="min-h-screen flex flex-col items-center justify-start
                 bg-gradient-to-b from-gray-50 to-gray-100
                 dark:from-gray-800 dark:to-gray-800 px-4 sm:px-6 pt-16 overflow-hidden"
    >
      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My Certificates
      </motion.h1>

      {/* 3D Carousel */}
      <div className="relative w-[90vw] max-w-[600px] h-[400px] [perspective:1500px]">
        <div
          ref={carouselRef}
          className="absolute w-full h-full [transform-style:preserve-3d] transition-transform duration-700"
        >
          {certificates.map((cert, i) => (
            <div
              key={i}
              className={`absolute ${cardWidth} left-1/2 top-1/2 
                          -translate-x-1/2 -translate-y-1/2`}
              style={{
                transform: `rotateY(${(360 / certificates.length) * i}deg) translateZ(${radius}px)`,
              }}
            >
              <motion.img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover rounded-xl shadow-xl
                           border border-white/10
                           hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
                           transition-transform duration-500 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCert(cert)}
              />

              {/* Mirror Reflection */}
              <div className="absolute top-full left-0 w-full h-full overflow-hidden -scale-y-100 opacity-20">
                <img
                  src={cert.image}
                  alt={`Mirror ${cert.title}`}
                  className="w-full h-full object-cover rounded-xl blur-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative max-w-3xl w-[90%] md:w-[50%]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              onClick={(e) => e.stopPropagation()} // prevent modal click closing
            >
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full rounded-lg shadow-2xl object-contain"
              />

              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 p-2 bg-black/60 text-white
                           rounded-full hover:bg-black/80 transition"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="mt-4 text-center text-white">
                <h2 className="text-xl md:text-2xl font-semibold">{selectedCert.title}</h2>
                <p className="text-gray-300">
                  {selectedCert.issuer} — {selectedCert.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
