import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = () => {
  const titles = [
    "Full-Stack Developer",
    "MERN Stack Developer",
    "AI Enthusiast",
    "Problem Solver",
    "Software Developer",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#0A0A0A] relative px-6"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-purple-500/20 blur-[140px] rounded-full"></div>
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto w-full">

        {/* ===========================
            LEFT SIDE — TEXT CONTENT
        ============================== */}
        <div className="space-y-6">

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-6xl font-extrabold leading-tight"
          >
            Swapnil Shikha
          </motion.h1>

          {/* Rotating Title */}
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold h-10"
          >
            {titles[index]}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-300 text-lg leading-relaxed max-w-md"
          >
            I build modern, fast, and intelligent web applications. 
            My journey started with curiosity for problem-solving and has grown 
            into a passion for creating digital experiences that make an impact.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 mt-6"
          >
            <Link
              to="/projects"
              className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              View My Work
            </Link>

            <Link
              to="/about"
              className="px-8 py-4 rounded-xl border border-gray-500 text-white font-semibold hover:border-white transition"
            >
              About Me
            </Link>
          </motion.div>

        </div>

        {/* ===========================
             RIGHT SIDE — PROFILE IMAGE
        ============================== */}
       
        
       <div className="flex justify-center md:justify-end">
  {/* Outer gradient border */}
  <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-tr from-purple-400 to-blue-400 flex items-center justify-center shadow-2xl shadow-purple-500/30">
    
    {/* Inner circle: photo */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full h-full rounded-full overflow-hidden bg-black"
    >
      <img
        src="/src/profile.jpg"
        alt="Swapnil Shikha"
        className="w-full h-full object-cover rounded-full"
      />
      
      {/* Optional inner glow */}
      <div className="absolute inset-0 rounded-full ring-4 ring-purple-500/20 animate-pulse"></div>
    </motion.div>

  </div>
</div>




      </div>
    </section>
  );
};

export default Hero;
