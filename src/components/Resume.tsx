import { motion } from "framer-motion";

const Resume = () => {
  const handleDownload = () => {
    alert(
      "Resume download functionality will be implemented once your resume file is added to the project."
    );
  };

  return (
    <section id="resume" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Resume
            </span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A quick overview of my journey, skills, achievements, and experience.
          </p>

          {/* Resume CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 transition-all"
            >
              <span>Download My Resume</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
