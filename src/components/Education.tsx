import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>

          {/* Timeline Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary" />

            {/* Card Wrapper */}
            <div className="relative pl-24 pb-12">

              {/* Education Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative bg-glass backdrop-blur-xl border border-glass-border rounded-2xl p-8 shadow-2xl transition-all hover:shadow-primary/20"
              >
                {/* Floating Graduation Cap */}
                <div className="absolute -left-10 top-2 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/50 group-hover:shadow-primary/70 transition-all">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="space-y-4 ml-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      B.Tech in Computer Science and Engineering
                    </h3>
                    <p className="text-primary font-semibold">2023 – 2027</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    I am currently studying in Computer Science and Engineering (6th Semester)
                    at Jodhpur Institute of Engineering and Technology,
                    Jodhpur, Rajasthan, India.
                  </p>
                </div>
              </motion.div>

              {/* Gradient Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Education;
