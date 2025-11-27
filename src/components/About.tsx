import { motion } from "framer-motion";
import { Code2, Lightbulb, Users, BookOpen } from "lucide-react";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";

const About = () => {
  const skills = [
    "HTML",
    "TailwindCSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "Git",
  ];

  const highlights = [
    {
      icon: () => <Code2 className="w-6 h-6" />,
      title: "Problem Solving",
      description:
        "Ability to break down complex issues and develop efficient solutions.",
    },
    {
      icon: () => <Users className="w-6 h-6" />,
      title: "Teamwork",
      description:
        "Works effectively within cross-functional teams to achieve shared goals.",
    },
    {
      icon: () => <Lightbulb className="w-6 h-6" />,
      title: "Communication",
      description:
        "Communicates technical concepts clearly to both technical and non-technical audiences.",
    },
    {
      icon: () => <BookOpen className="w-6 h-6" />,
      title: "Adaptability",
      description:
        "Quickly learns new technologies and adapts to changing project requirements.",
    },
  ];

  const dsaProfiles = [
    {
      title: "LeetCode",
      icon: <SiLeetcode className="w-10 h-10" />,
      description: "Daily problem solver improving logic & DSA depth.",
      link: "https://leetcode.com/",
      gradient: "bg-[#f4b400]",
    },
    {
      title: "GeeksforGeeks",
      icon: <SiGeeksforgeeks className="w-10 h-10" />,
      description: "Mastering concepts through structured practice.",
      link: "https://www.geeksforgeeks.org/",
      gradient: "bg-[#0f9d58]",
    },
    {
      title: "NeetCode",
      icon: <FaYoutube className="w-10 h-10" />,
      description: "Following DSA roadmap to ace coding interviews.",
      link: "https://neetcode.io/",
      gradient: "bg-[#ff0000]",
    },
  ];

  const handleDownload = () => {
    alert(
      "Resume download functionality will be implemented once your resume file is added."
    );
  };

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Get to know me better
          </p>
        </motion.div>

        {/* Profile + Text */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-glass backdrop-blur-xl border border-glass-border rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              I am <span className="text-primary font-semibold">Swapnil Shikha</span>, currently
              in my 3rd year. As a MERN stack developer, I build high-quality,
              scalable web applications using React.js, Next.js, TypeScript,
              MongoDB, Express.js, and Node.js. I love improving my
              problem-solving skills and exploring new technologies.
            </p>
          </motion.div>

          {/* Profile Image */}
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

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="bg-glass backdrop-blur-xl border border-glass-border rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 text-primary-foreground">
                {item.icon()}
              </div>

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-6 py-3 rounded-full bg-glass backdrop-blur-xl border border-glass-border font-medium shadow-lg cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* DSA Section */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              DSA{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Solving challenges. Improving logic. Becoming a stronger engineer.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dsaProfiles.map((item, index) => (
              <motion.a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-6 rounded-2xl bg-glass backdrop-blur-xl border border-glass-border shadow-xl transition-all cursor-pointer"
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-white ${item.gradient}`}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <span>Download My Resume</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
